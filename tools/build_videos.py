"""Transcode a curated set of clips into web-sized MP4s + poster frames.

Source videos live outside the repo (1.2 GB of Instagram exports); this bakes
a small, mobile-friendly subset into Friendship Day/videos/ and writes
video-data.js. Re-run after changing SETS.
"""
import os, re, json, subprocess, sys

HL   = r"E:\New Folder\Highlights"
NF   = r"E:\New Folder\New folder"
EDITS = r"D:\New folder (2)\New folder (2)\Edits"
ROOT = r"C:\Users\Axel\reet-birthday-wish"
OUT  = os.path.join(ROOT, "videos")

def ed(name): return os.path.join(EDITS, name)

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
    ("keepsakes", "Keepsakes", [
        (ed("7 year.mp4"), "7 Years of Trust and Devotion"),
        (ed("WhatsApp Video 2025-08-05 at 5.45.13 PM.mp4"), "Mad Monkey"),
        (ed("WhatsApp Video 2026-03-13 at 5.53.49 PM.mp4"), "peak chaos"),
        (ed("baithe.mp4"), "Grace with Tint"),
        (ed("beauty.mp4"), "happiest kind of loud"),
        (ed("kinni.mp4"), "a whole mood"),
        (ed("guggu.mp4"), "Beautiful Bond"),
        (ed("suitt.mp4"), "Subtle and Kind"),
        (ed("meet me.mp4"), "Just Late to Meet You"),
        (ed("S1.mp4"), "Still Moment"),
        (ed("S2.mp4"), "This one still makes me Smile"),
        (ed("S3.mp4"), "Kudi Kamaal Hai Ni"),
        (ed("Status (192).mp4"), "All Done"),
        (ed("AQMG5IF90A0k_Cx_X8q-SBba_bLi7F1S2lIzq0ONJ9Hz4H3AsmgzgSs7TuXBPhb6_eFzTodP21LQRK6KnxK2YI6DaQKF_DCKs9ihYSQ.mp4"), "Fairy in Real"),
        (ed("Status (150).mp4"), "Two Cuties Together"),
        (ed("Status (50).mp4"), "One Look"),
    ]),
]

def pick(folder, n):
    d = os.path.join(HL, folder)
    if not os.path.isdir(d): return []
    fs = sorted((f for f in os.listdir(d) if f.lower().endswith(".mp4")),
                key=lambda f: os.path.getsize(os.path.join(d, f)), reverse=True)
    return [(os.path.join(d, f), None) for f in fs[:n]]

SETS.append(("bestie", "Bestie", pick(BESTIE, 8) + pick(HEART, 4)
             + pick("❣️", 4) + pick("💕", 3) + pick("😍", 4) + pick("🦋🫶✨", 2)))

# Her solo highlights - not "us" specifically, but still her, still worth keeping.
SOLO_CAPTIONS = ['just her being her', 'main character energy', 'her, unfiltered',
                  'caught mid-laugh', 'that smile again', 'her own thing',
                  'this one is all her', 'quietly iconic', 'her at her best', 'no caption needed']
her_solo_items = (pick("😍😊its me Reet.😋😘", 6) + pick("Birthday Girl", 3)
                  + pick("Its My Birthday", 3) + pick("Create your ownself", 3) + pick("New look", 1))
her_solo_items = [(src, SOLO_CAPTIONS[i % len(SOLO_CAPTIONS)]) for i, (src, _) in enumerate(her_solo_items)]
SETS.append(("her-solo", "Just Her", her_solo_items))

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
