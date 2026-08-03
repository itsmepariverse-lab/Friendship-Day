# Dynamic Music Stations from R2

The music app now supports dynamic station loading from your R2 bucket. This means you can add new music stations without needing to commit code to GitHub!

## How It Works

1. **Upload MP3s to R2** - Create folders for each station and upload MP3 files
2. **Create `stations.json`** - List all stations and tracks in a JSON file
3. **Upload `stations.json` to R2** - The app fetches this file automatically
4. **That's it!** - New stations appear instantly in the app

## Setup Steps

### Step 1: Upload Your MP3s to R2

Create folders in your R2 bucket for each station:
```
your-bucket-name/
├── Alka Yagnik Radio/
│   ├── song1.mp3
│   ├── song2.mp3
│   └── ...
├── Honey Singh Radio/
│   ├── song1.mp3
│   ├── song2.mp3
│   └── ...
└── stations.json
```

### Step 2: Create `stations.json`

Create a JSON file with the following format. Use the `stations.json.example` file as a template:

```json
[
  {
    "key": "Alka Yagnik Radio",
    "name": "Alka Yagnik",
    "tracks": [
      {
        "t": "Song Title",
        "f": "filename.mp3"
      },
      {
        "t": "Another Song",
        "f": "another_song.mp3"
      }
    ]
  },
  {
    "key": "Honey Singh Radio",
    "name": "Honey Singh",
    "tracks": [
      {
        "t": "Mundian To Bach Ke",
        "f": "Mundian_To_Bach_Ke.mp3"
      }
    ]
  }
]
```

**Format Notes:**
- `key` - Unique identifier (must match your R2 folder name, used in URL paths)
- `name` - Display name shown in the app
- `t` - Track title (shown to user)
- `f` - Filename (must match the MP3 file in R2)

### Step 3: Upload `stations.json` to R2

Upload the JSON file to the **root** of your R2 bucket (same level as your station folders, not inside them).

### Step 4: Enjoy!

Open the app and new stations will appear:
- ✅ No GitHub commit needed
- ✅ Updates appear instantly (or after cache refreshes)
- ✅ 24-hour local cache to avoid repeated downloads

## Caching

The app caches the stations list in browser localStorage for 24 hours to minimize R2 API calls. To force a refresh:

1. Open browser DevTools (F12)
2. Go to Application → Local Storage
3. Find `reetos-stations-cache` and `reetos-stations-cache-time`
4. Delete both entries
5. Reload the page

## Troubleshooting

### Stations don't appear
1. Check that `stations.json` is at the bucket root (not in a subfolder)
2. Verify the JSON is valid (use https://jsonlint.com)
3. Check browser console for fetch errors (F12 → Console)
4. Clear browser cache and localStorage

### Songs don't play
1. Verify MP3 files are in folders matching the `key` field
2. Confirm filenames in JSON exactly match the uploaded files
3. Check that the R2 bucket is publicly readable

### JSON validation
- All field names must be lowercase
- String values must use double quotes
- No trailing commas in arrays/objects
- File paths should not include folder names (just filename)

## Example Workflow

```bash
# 1. Create station folder structure
mkdir -p "Honey Singh Radio"
cd "Honey Singh Radio"

# 2. Add MP3 files
# Place your MP3 files here

# 3. Go back and create stations.json
# Edit stations.json with your station info

# 4. Upload to R2
# Upload entire folder structure to your R2 bucket
# Upload stations.json to bucket root

# 5. Open app and see new stations!
```

## Advanced: Station Properties

Future versions may support additional properties like:
- `description` - Station description
- `image` - Station artwork URL
- `color` - Theme color for the station

For now, only `key`, `name`, and `tracks` are used.
