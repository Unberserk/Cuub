const fs = require('fs');
const path = require('path');

// Array of objects with gameroots
const folders = [
  { "gameroot": "kemono_su_posts_popular/", "game": "Kemono Popular Posts" },
  { "gameroot": "danbooru_posts/", "game": "Danbooru Posts" },
  { "gameroot": "rule34_xxx/", "game": "Rule34" },
  { "gameroot": "rule34_takorin/", "game": "Rule34 Takorin" },
  { "gameroot": "danbooru_takeuchi/", "game": "Danbooru Takeuchi Ryousuke" },
  { "gameroot": "danbooru_aetherion/", "game": "Danbooru Aetherion" },
  { "gameroot": "kemono_patreon_219523/", "game": "Kemono Patreon User 219523" },
  { "gameroot": "mega_folder_vm02ccwd/", "game": "Mega Folder" },
  { "gameroot": "google_ishtar_fate_nsfw/", "game": "Google Ishtar Fate NSFW" },
  { "gameroot": "patreon_nsfwpixels/", "game": "Patreon NSFW Pixels" },
  { "gameroot": "kemono_patreon_8693043/", "game": "Kemono Patreon User 8693043" },
  { "gameroot": "kemono_patreon_3295915/", "game": "Kemono Patreon User 3295915" },
  { "gameroot": "rule34video_suoiresnuart/", "game": "Rule34 Video Suoiresnuart" },
  { "gameroot": "rule34video_anna_anon/", "game": "Rule34 Video Anna Anon" },
  { "gameroot": "xvideos_haunted_mansion/", "game": "Xvideos Haunted Mansion" },
  { "gameroot": "rule34video_sodeno19_compilation/", "game": "Rule34 Video Sodeno19 Compilation" },
  { "gameroot": "rule34video_lacey_and_xitzal/", "game": "Rule34 Video Lacey and Xitzal Compilation" },
  { "gameroot": "xvideos_momiji_attacks_aya/", "game": "Xvideos Momiji Attacks Aya" },
  { "gameroot": "xvideos_harddegenerate_momo/", "game": "Xvideos Harddegenerate Momo x Kai" },
  { "gameroot": "rule34video_makima_reze/", "game": "Rule34 Video Makima x Reze" },
  { "gameroot": "pornhub_video1/", "game": "Pornhub Video 1" },
  { "gameroot": "pornhub_video2/", "game": "Pornhub Video 2" },
  { "gameroot": "pornhub_video3/", "game": "Pornhub Video 3" },
  { "gameroot": "pornhub_video4/", "game": "Pornhub Video 4" },
  { "gameroot": "pornhub_video5/", "game": "Pornhub Video 5" },
  { "gameroot": "pornhub_video6/", "game": "Pornhub Video 6" },
  { "gameroot": "disboard_servers/", "game": "Disboard NSFW Servers" },
  { "gameroot": "mediafire_tsr_nsfw_paintings/", "game": "MediaFire TSR NSFW Paintings" },
  { "gameroot": "kemono_n2_ful_ver/", "game": "Kemono Video Full Ver" },
  { "gameroot": "mega_folder_js8mtdb/", "game": "Mega Folder" },
  { "gameroot": "kemono_gumroad_1876634283640/", "game": "Kemono Gumroad Post" },
  { "gameroot": "kemono_patreon_21647579/", "game": "Kemono Patreon User 21647579" },
  { "gameroot": "kemono_gumroad_8374489688419/", "game": "Kemono Gumroad Post" },
  { "gameroot": "kemono_fanbox_4107959/", "game": "Kemono Fanbox User 4107959" }
];

// Directory where folders will be created
const rootDirectory = path.join(__dirname, 'gameFolders');

// Create the root directory if it doesn't exist
if (!fs.existsSync(rootDirectory)) {
    fs.mkdirSync(rootDirectory);
}

// Create each folder
folders.forEach(folder => {
  const folderPath = path.join(rootDirectory, folder.gameroot);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Created folder: ${folderPath}`);
  } else {
    console.log(`Folder already exists: ${folderPath}`);
  }
});
