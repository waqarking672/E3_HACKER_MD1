const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUVhNFNuVnNoWWYwMjFkQWtiZURoMlJtY05CS3AzUS9VRG0yMnAzRG5rST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienV0NlpRTm9XNHVNeHFiTThPUm5qdVBNeE1wajZZMDdHem5qSUhyZVRGdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSzJ6TEduTytsWldMT0tMK3RnSTROYzE3d3pUNTVLaUdyMFBWYkF3VVhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxcGdrTEtxNnRDeE5KamtSRHdEQXJOeVFNc3A1S0xwTUtDV3Z0aFRJWUhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlNL1F3dEQxNUk3UlpIUEJWYXZRTVBMbTVnWlcxOTU4c3RLS2dKeFlTRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY2eHo4OVhaMVVSMWlJZjl2WGphckFOMlBqM25qYzRYRUdTMTU3RkJZZzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0hsdEFoL3lyNXYrVFJDMDVFTlJWby9uaE9qSVdCR2VLck9xZ2ZndVExYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1B1Zy9PK0VudWJtNWZ2T0VZbWhHQzV1TDlwMzlYMm9YeXRpT1FoTXdGaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFTNlhwZ0xnWE03WlhuVngrclM4WjYyUFZTYVRYR1p0Q1hacXFaZ1hpTXRLaU9xWFFqdGg2S3ZjM3pJNVlXb2tRcUFOTDNoZEZWYlJEdmVmdVEwNmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6ImlXSUlTS2s0R3dxQWQ3UmJPdHR3UC9DS1BJMWgvSnBDNlpYR25Ea29rTmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjk1OTAxNzk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA1OUZENEE5QkFEOUU0MzRGNTExNTU3Q0U4MzlDNDAyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY5NjQ5MjJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI5NTkwMTc5OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFNTU5RDM0Q0FEQTlDQTlBMzEyQUQxQjUxODA5QzgyMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2OTY0OTIzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyOTU5MDE3OTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzJBODYwMjJCMTM0MjkwQUMwMTREOUYwRDU4NzE4MUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Njk2NDkyNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiMjRHUjRaTTgiLCJtZSI6eyJpZCI6IjkyMzI5NTkwMTc5OTo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImJvdCIsImxpZCI6IjQwNDY3ODM2MjMxODk0OjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPR01weVFRdHREa3hRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1bDNZUy90TzJnNm5ObmtibTVCM1E1QzhEcXhGelE5M2Fub0N2eEwrWlRZPSIsImFjY291bnRTaWduYXR1cmUiOiJLZWN6SVNveXNyUWVtblMreEoxT2ZkbmdQakhLTFU3NFFaNURjSVVjcEVHT2NyU21MNGFuWE0xVzhmYWFTUDg4ano2R2NpMUcvNDRPZ0xiQTJ6ZnVEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT2xyRHJ5MWQrT2VHeElvS1BFakNqcndIVld2TzIvZm10aTBpWlZOMmtyVVFqL1hqUXN0OVhRRktueEljdXNlQnRWZW5VZm9ic1dYdjdnd3VjQ3A2aVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyOTU5MDE3OTk6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJicGQyRXY3VHRvT3B6WjVHNXVRZDBPUXZBNnNSYzBQZDJwNkFyOFMvbVUyIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY5NjQ5MjEsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSzFNIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3-𝙃𝘼𝘾𝙆𝙀𝙍-𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/iyudhj.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙀3-𝙃𝘼𝘾𝙆𝙀𝙍,-𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3-HACKER-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3-HACKER-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/iyudhj.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
