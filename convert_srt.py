import os
import re

srt_dir = r"C:\Users\Axel\Downloads\MC Subtitle"
vtt_dir = r"C:\Users\Axel\reet-birthday-wish\assets\subtitles"

def srt_to_vtt(srt_text):
    vtt_text = "WEBVTT\n\n"
    lines = srt_text.replace("\r", "").split("\n")
    for line in lines:
        if re.match(r"^\d+$", line):
            continue  # Skip index lines
        if re.match(r"^\d{2}:\d{2}:\d{2}", line):
            line = line.replace(",", ".")  # Convert timestamps
        vtt_text += line + "\n"
    return vtt_text

for file_name in os.listdir(srt_dir):
    if file_name.endswith(".srt"):
        # Match S01E01, etc.
        match = re.search(r"S\d{2}E(\d{2})", file_name)
        if match:
            ep_num = match.group(1)
            vtt_file_name = f"ep{ep_num}.vtt"
            
            srt_path = os.path.join(srt_dir, file_name)
            vtt_path = os.path.join(vtt_dir, vtt_file_name)
            
            with open(srt_path, 'r', encoding='utf-8-sig') as f:
                srt_data = f.read()
                
            vtt_data = srt_to_vtt(srt_data)
            
            with open(vtt_path, 'w', encoding='utf-8') as f:
                f.write(vtt_data)
            
            print(f"Converted {file_name} -> {vtt_file_name}")

print("Done.")
