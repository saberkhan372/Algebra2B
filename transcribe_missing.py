#!/usr/bin/env python3
"""Transcribe all videos in 'teacher and student work' that lack a transcript."""

import os
import subprocess
import sys
import tempfile
from pathlib import Path

BASE = Path("/Users/saberkhan/Documents/coding/Algebra2B/teacher and student work")
TRANSCRIPTS = Path("/Users/saberkhan/Documents/coding/Algebra2B/video-learning/transcripts")

# Skip files that are just "(1)" duplicates of another file in a different folder
# (same name, just copied to multiple student folders)
def canonical_name(path: Path) -> str:
    """Return the stem with trailing '(1)' stripped, for dedup purposes."""
    stem = path.stem
    if stem.endswith("(1)"):
        stem = stem[:-3].rstrip()
    return stem

def find_videos() -> dict[str, Path]:
    """
    Return a dict of {canonical_name -> first_found_path} for all videos,
    preferring originals (no '(1)') over copies.
    """
    videos: dict[str, Path] = {}
    for f in sorted(BASE.rglob("*")):
        if f.suffix.lower() not in (".mp4", ".mov"):
            continue
        name = canonical_name(f)
        if name not in videos:
            videos[name] = f
        elif "(1)" not in f.stem and "(1)" in videos[name].stem:
            # Prefer the non-(1) version
            videos[name] = f
    return videos

def has_transcript(name: str) -> bool:
    return (TRANSCRIPTS / f"{name}.txt").exists()

def transcribe(video_path: Path, out_name: str):
    out_file = TRANSCRIPTS / f"{out_name}.txt"
    print(f"\n{'='*60}")
    print(f"Transcribing: {video_path.name}")
    print(f"Output:       {out_file.name}")
    print(f"{'='*60}")

    # Extract audio to a temp wav file first (faster than feeding video directly)
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as tmp:
        tmp_path = tmp.name

    try:
        subprocess.run(
            ["ffmpeg", "-y", "-i", str(video_path),
             "-ar", "16000", "-ac", "1", "-f", "wav", tmp_path],
            check=True, capture_output=True
        )

        import mlx_whisper
        result = mlx_whisper.transcribe(
            tmp_path,
            path_or_hf_repo="mlx-community/whisper-large-v3-turbo",
            verbose=False,
        )
        text = result["text"].strip()
        out_file.write_text(text, encoding="utf-8")
        print(f"  Saved {len(text):,} chars")
    finally:
        os.unlink(tmp_path)

def main():
    videos = find_videos()
    missing = {name: path for name, path in videos.items() if not has_transcript(name)}

    print(f"Found {len(videos)} unique videos, {len(missing)} missing transcripts.\n")
    for name in sorted(missing):
        print(f"  MISSING: {name}")

    if not missing:
        print("Nothing to do.")
        return

    print(f"\nStarting transcription of {len(missing)} videos...\n")
    done, failed = [], []
    for i, (name, path) in enumerate(sorted(missing.items()), 1):
        print(f"[{i}/{len(missing)}] {name}")
        try:
            transcribe(path, name)
            done.append(name)
        except Exception as e:
            print(f"  ERROR: {e}")
            failed.append((name, str(e)))

    print(f"\n{'='*60}")
    print(f"Done: {len(done)}, Failed: {len(failed)}")
    if failed:
        print("\nFailed:")
        for name, err in failed:
            print(f"  {name}: {err}")

if __name__ == "__main__":
    main()
