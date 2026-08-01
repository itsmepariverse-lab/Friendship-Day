import os, re, json

MUSIC = r"C:\Users\Axel\reet-birthday-wish\Friendship Day\assets\music"
OUT   = r"C:\Users\Axel\reet-birthday-wish\Friendship Day\music-data.js"

DISPLAY = {
    "Shreya Goshal Radio": "Shreya Ghoshal",
    "Alka Yagnik Radio":   "Alka Yagnik",
    "Arijit Singh Radio":  "Arijit Singh",
    "KK Radio":            "KK",
    "Kishore Kumar Radio": "Kishore Kumar",
}

def clean(name):
    n = name
    n = re.sub(r"\.mp3$", "", n, flags=re.I)
    n = re.sub(r"_?spotdown\.org", "", n, flags=re.I)
    # "(From _Baazigar_)" -> "(Baazigar)"
    n = re.sub(r"\(\s*From\s+_(.+?)_\s*\)", r"(\1)", n, flags=re.I)
    # "- From _Baazigar- Hindi_" -> "(Baazigar)"
    n = re.sub(r"[-–]\s*From\s+_(.+?)_", r"(\1)", n, flags=re.I)
    n = re.sub(r"\(\s*From\s+(.+?)\s*\)", r"(\1)", n, flags=re.I)
    n = n.replace("_", " ")
    # tidy "(Baazigar- Hindi)" -> "(Baazigar)"
    n = re.sub(r"\(([^)]*?)[-–]\s*Hindi\s*\)", r"(\1)", n)
    n = re.sub(r"\s{2,}", " ", n)
    n = re.sub(r"\s+\)", ")", n)
    n = re.sub(r"\(\s+", "(", n)
    return n.strip(" -–")

stations = []
for folder in sorted(os.listdir(MUSIC)):
    d = os.path.join(MUSIC, folder)
    if not os.path.isdir(d):
        continue
    files = sorted(f for f in os.listdir(d) if f.lower().endswith(".mp3"))
    if not files:
        continue
    stations.append({
        "key": folder,
        "name": DISPLAY.get(folder, folder.replace(" Radio", "")),
        "tracks": [{"t": clean(f), "f": f} for f in files],
    })

js = (
    "/* AUTO-GENERATED from assets/music/ — do not edit by hand.\n"
    "   Regenerate after adding songs. Audio files are gitignored. */\n"
    "const STATIONS = " + json.dumps(stations, ensure_ascii=False, indent=1) + ";\n"
)
with open(OUT, "w", encoding="utf-8") as f:
    f.write(js)

total = sum(len(s["tracks"]) for s in stations)
print(f"stations: {len(stations)}  tracks: {total}")
for s in stations:
    print(f"  {s['name']:16s} {len(s['tracks']):3d}")
print("\nsample cleaned titles:")
for t in stations[0]["tracks"][:6]:
    print("   ", t["t"])
print("\nwrote", OUT, os.path.getsize(OUT), "bytes")
