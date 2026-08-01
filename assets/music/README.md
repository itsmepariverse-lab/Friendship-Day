# Music — radio stations

Each **subfolder here becomes a station** in the music app. Drop MP3s into a
folder and the station appears; the track list is read from a generated
manifest, not from the folder at runtime.

Current stations:

| Folder | Station | Tracks |
|---|---|---|
| `Alka Yagnik Radio` | Alka Yagnik | 50 |
| `Arijit Singh Radio` | Arijit Singh | 50 |
| `KK Radio` | KK | 44 |
| `Kishore Kumar Radio` | Kishore Kumar | 50 |
| `Shreya Goshal Radio` | Shreya Ghoshal | 47 |

Plus **Ours** — `assets/falak_tak.mp3`, the default track.

## After adding or removing songs

Regenerate the manifest, or the app won't see the change:

```bash
python "Friendship Day/tools/build_music.py"
```

That rewrites `Friendship Day/music-data.js`. The script also tidies titles —
it strips the `_spotdown.org` suffix and rewrites `(From _Movie_)` into
`(Movie)`.

To rename a station, edit the `DISPLAY` map in that script.

## Note on the audio files

These ~2 GB of MP3s are **gitignored** (`Friendship Day/assets/music/*/`) — they
are commercial recordings, so they stay on your machine and are not committed
or distributed. Only `music-data.js` is committed. If you move the site to
another computer or host it, copy the audio across manually.
