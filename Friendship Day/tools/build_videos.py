"""Transcode a curated set of clips into web-sized MP4s + poster frames.

Source videos live outside the repo (1.2 GB of Instagram exports); this bakes
a small, mobile-friendly subset into Friendship Day/videos/ and writes
video-data.js. Re-run after changing SETS.
"""
import os, re, json, subprocess, sys

HL   = r"E:\New Folder\Highlights"
NF   = r"E:\New Folder\New folder"
ROOT = r"C:\Users\Axel\reet-birthday-wish\Friendship Day"
OUT  = os.path.join(ROOT, "videos")

MAX_W, CRF, MAX_SECS = 720, 30, 60

def nf(name):  return os.path.join(NF, name)
def hl(folder, name): return os.path.join(HL, folder, name)

BESTIE = "#bestie..\U0001f618\U0001f60d"
HEART  = "My Heart"

SETS = [
    ("reels", "Reels", [
        (nf("Falak tak - January 31st 2025.mp4"),                          "Falak Tak"),
        (nf("Jahan main jati hu wahi chale aate ho - January 31st 2025.mp4"), "Jahan Main Jati Hu"),
        (nf("Kabhi Kabhi Kuch toh kaho piya humse - January 31st 2025.mp4"),  "Kabhi Kabhi Kuch Toh Kaho"),
        (nf("Maine koi jaadu nahi kiya - January 10th 2025.mp4"),           "Maine Koi Jaadu Nahi Kiya"),
        (nf("Tu ishq hain toh main baaho main hu - February 2nd 2025.mp4"), "Tu Ishq Hain"),
        (nf("Gali Gali Mere Naam ke Deewane -March 14th 2025.mp4"),         "Gali Gali Mere Naam Ke Deewane"),
        (nf("Tere Bina - February 13.mp4"),                                 "Tere Bina"),
        (nf("Zindagi Rubic Cube jaisi ho gayi hain - December 27th 2024.mp4"), "Zindagi Rubic Cube Jaisi"),
        (nf("With Bindi haayeee - January 31st 2025.mp4"),                  "With Bindi, Haayeee"),
        (nf("Kesa ladka Chahiye - May 4th 2024.mp4"),                       "Kesa Ladka Chahiye"),
    ]),
    ("days", "Days", [
        (nf("College Holi Dance Party - March 11th 2025.mp4"),   "College Holi Dance Party"),
        (nf("2025 Holi Latepost - March 22nd 2025.mp4"),         "Holi, Latepost"),
        (nf("the whole world is a garden - March 7th 2025.mp4"), "The Whole World Is A Garden"),
        (nf("First Resin Art- March 4th 2025.mp4"),              "First Resin Art"),
        (nf("Beautiful SunSet while returning - January 19th 2025.mp4"), "Sunset On The Way Home"),
        (nf("Reet - Madhu 2025 first meet - January 16th 2025.mp4"),      "First Meet Of 2025"),
        (nf("Bhandara day - Feb 13th 2025.mp4"),                 "Bhandara Day"),
        (nf("My son is my Heart beat - June 3rd 2025.mp4"),      "My Heartbeat"),
    ]),
]

def pick(folder, n):
    d = os.path.join(HL, folder)
    if not os.path.isdir(d): return []
    fs = sorted((f for f in os.listdir(d) if f.lower().endswith(".mp4")),
                key=lambda f: os.path.getsize(os.path.join(d, f)), reverse=True)
    return [(os.path.join(d, f), None) for f in fs[:n]]

SETS.append(("bestie", "Bestie", pick(BESTIE, 8) + pick(HEART, 4)))

# Highlight exports have meaningless filenames, so unlabelled clips draw from here.
CAPTIONS = ['us being us', 'no context needed', 'peak chaos', 'my favourite people',
            'partners in crime', 'this one still makes me laugh', 'unserious behaviour',
            'the group chat, live', 'certified nonsense', 'happiest kind of loud',
            'you two, always', 'a whole mood']

DATE_RE = re.compile(r"[-–]\s*((January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}(st|nd|rd|th)?\s*,?\s*\d{0,4})", re.I)

def date_of(path):
    m = DATE_RE.search(os.path.basename(path))
    return re.sub(r"\s+", " ", m.group(1)).strip() if m else ""

def probe(path):
    try:
        out = subprocess.run(
            ["ffprobe", "-v", "error", "-show_entries", "format=duration",
             "-of", "default=nw=1:nk=1", path],
            capture_output=True, text=True, timeout=60)
        return float(out.stdout.strip())
    except Exception:
        return 0.0

def run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True).returncode == 0

os.makedirs(OUT, exist_ok=True)
collections, total = [], 0

for key, title, items in SETS:
    vdir = os.path.join(OUT, key)
    pdir = os.path.join(vdir, "p")
    os.makedirs(pdir, exist_ok=True)
    entries, n = [], 0

    for src, label in items:
        if not os.path.exists(src):
            print("  MISSING", os.path.basename(src)); continue
        dur = probe(src)
        n += 1
        name = f"{key}{n:02d}"
        dst  = os.path.join(vdir, name + ".mp4")
        post = os.path.join(pdir, name + ".jpg")

        ok = run(["ffmpeg", "-y", "-v", "error", "-i", src,
                  "-t", str(MAX_SECS),
                  "-vf", f"scale='min({MAX_W},iw)':-2",
                  "-c:v", "libx264", "-preset", "veryfast", "-crf", str(CRF),
                  "-profile:v", "main", "-pix_fmt", "yuv420p", "-movflags", "+faststart",
                  "-c:a", "aac", "-b:a", "96k", "-ac", "2", dst])
        if not ok or not os.path.exists(dst):
            print("  FAIL", os.path.basename(src)); n -= 1; continue

        run(["ffmpeg", "-y", "-v", "error", "-i", dst, "-ss", "00:00:01.0",
             "-vframes", "1", "-vf", "scale=400:-2", "-q:v", "5", post])

        size = os.path.getsize(dst); total += size
        entries.append({
            "f": name,
            "t": label or CAPTIONS[(n - 1) % len(CAPTIONS)],
            "d": date_of(src),
        })
        print(f"  {name}  {size/1e6:5.2f} MB  {entries[-1]['t']}")

    collections.append({"key": key, "title": title, "items": entries})
    print(f"{title}: {len(entries)} clips\n")

with open(os.path.join(ROOT, "video-data.js"), "w", encoding="utf-8") as f:
    f.write("/* AUTO-GENERATED by tools/build_videos.py — do not edit by hand. */\n"
            "const VIDEOS = " + json.dumps(collections, ensure_ascii=False, indent=1) + ";\n")

print(f"TOTAL: {sum(len(c['items']) for c in collections)} clips, {total/1e6:.1f} MB")
