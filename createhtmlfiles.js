const fs = require('fs');
const path = require('path');

// Array of objects with gameroots and corresponding links
const folders = [
  { "gameroot": "kemono_su_posts_popular/", "link": "https://kemono.su/posts/popular" },
  { "gameroot": "danbooru_posts/", "link": "https://danbooru.donmai.us/posts" },
  { "gameroot": "rule34_xxx/", "link": "https://rule34.xxx/" },
  { "gameroot": "rule34_takorin/", "link": "https://rule34.xxx/index.php?page=post&s=list&tags=takorin" },
  { "gameroot": "danbooru_takeuchi/", "link": "https://danbooru.donmai.us/posts?tags=takeuchi_ryousuke" },
  { "gameroot": "danbooru_aetherion/", "link": "https://danbooru.donmai.us/posts?tags=aetherion&z=1" },
  { "gameroot": "kemono_patreon_219523/", "link": "https://kemono.su/patreon/user/219523" },
  { "gameroot": "mega_folder_vm02ccwd/", "link": "https://mega.nz/folder/Vm02CCwD#i9ac58Of7D-d2Cg0qaeXww" },
  { "gameroot": "google_ishtar_fate_nsfw/", "link": "https://www.google.com/search?q=ishtar+fate+nsfw&source=lmns&hl=en-US&sa=X&ved=2ahUKEwj-4-SX1OOEAxU1x8kDHeNtCs8Q0pQJKAB6BAgBEAI" },
  { "gameroot": "patreon_nsfwpixels/", "link": "https://www.patreon.com/nsfwpixels" },
  { "gameroot": "kemono_patreon_8693043/", "link": "https://kemono.su/patreon/user/8693043?tag=Golden+tier" },
  { "gameroot": "kemono_patreon_3295915/", "link": "https://kemono.su/patreon/user/3295915" },
  { "gameroot": "rule34video_suoiresnuart/", "link": "https://rule34video.com/models/suoiresnuart/" },
  { "gameroot": "rule34video_anna_anon/", "link": "https://rule34video.com/models/anna-anon/" },
  { "gameroot": "xvideos_haunted_mansion/", "link": "https://www.xvideos.com/video.ubvkfcoad51/haunted_mansion_released_diives_" },
  { "gameroot": "rule34video_sodeno19_compilation/", "link": "https://rule34video.com/video/3495138/sodeno19-compilation2/" },
  { "gameroot": "rule34video_lacey_and_xitzal/", "link": "https://rule34video.com/video/3547190/lacey-and-xitzal-compilation3/" },
  { "gameroot": "xvideos_momiji_attacks_aya/", "link": "https://www.xvideos.com/video.ubttbod6fdb/momiji_attacks_aya_back_and_has_sex" },
  { "gameroot": "xvideos_harddegenerate_momo/", "link": "https://www.xvideos.com/video.ubueatf14eb/harddegenerate_-_momo_x_kai" },
  { "gameroot": "rule34video_makima_reze/", "link": "https://rule34video.com/video/3122888/makima-x-reze/" },
  { "gameroot": "pornhub_video1/", "link": "https://www.pornhub.com/view_video.php?viewkey=66a9224a94a7f" },
  { "gameroot": "pornhub_video2/", "link": "https://www.pornhub.com/view_video.php?viewkey=ph62019a1569a21" },
  { "gameroot": "pornhub_video3/", "link": "https://www.pornhub.com/view_video.php?viewkey=64babf9a403c6" },
  { "gameroot": "pornhub_video4/", "link": "https://www.pornhub.com/view_video.php?viewkey=66548d9447941" },
  { "gameroot": "pornhub_video5/", "link": "https://www.pornhub.com/view_video.php?viewkey=645c71aa416f7" },
  { "gameroot": "pornhub_video6/", "link": "https://www.pornhub.com/view_video.php?viewkey=6620e89e09fd8" },
  { "gameroot": "disboard_servers/", "link": "https://disboard.org/servers/tag/nsfw" },
  { "gameroot": "mediafire_tsr_nsfw_paintings/", "link": "https://www.mediafire.com/file/oe1esvg2p75n96m/TSR+NSFW+Paintings+1.21+.zip/file" },
  { "gameroot": "kemono_n2_ful_ver/", "link": "https://n2.kemono.su/data/bf/38/bf38b3f899850332a20322cf9a2015a7b054af6c6a8810e9b1f90b2df6a2427d.mp4?f=%E3%83%95%E3%83%ABver.mp4" },
  { "gameroot": "mega_folder_js8mtdb/", "link": "https://mega.nz/folder/JS8mTDDB#fOaAExaXh4Euj44WAvNPCg" },
  { "gameroot": "kemono_gumroad_1876634283640/", "link": "https://kemono.su/gumroad/user/1876634283640/post/qsgcl" },
  { "gameroot": "kemono_patreon_21647579/", "link": "https://kemono.su/patreon/user/21647579" },
  { "gameroot": "kemono_gumroad_8374489688419/", "link": "https://kemono.su/gumroad/user/8374489688419/post/zlwbx" },
  { "gameroot": "kemono_fanbox_4107959/", "link": "https://kemono.su/fanbox/user/4107959/post/5375096" }
];

// Directory where folders will be created
const rootDirectory = path.join(__dirname, 'gameFolders');

// HTML template function with dynamic link for iframe embedding
const generateHtml = (link) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Embedded Content</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    iframe {
      width: 100vw;
      height: 100vh;
      border: none;
    }
  </style>
</head>
<body>

<iframe src="${link}" allowfullscreen></iframe>

</body>
</html>
`;

// Create the root directory if it doesn't exist
if (!fs.existsSync(rootDirectory)) {
  fs.mkdirSync(rootDirectory);
}

// Create index.html in each folder with the corresponding embedded link
folders.forEach(folder => {
  const folderPath = path.join(rootDirectory, folder.gameroot);
  const filePath = path.join(folderPath, 'index.html');
  
  // Ensure the folder exists
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Generate the HTML content
  const htmlContent = generateHtml(folder.link);

  // Write the index.html file
  fs.writeFileSync(filePath, htmlContent, 'utf8');
  console.log(`Created index.html in ${folderPath}`);
});
