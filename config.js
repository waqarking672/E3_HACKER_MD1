const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0hQVEkxZlhpYVJHR2xVN2RWL0lyMGVGeW5TN3MxT3pEYlBGZXZwMWtuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmg0MU0ySy9FVUtWUHRKVks1S0kycUkyWGZMZjJ1dkR2cWZ3R0phNlF4Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTmR6NGFKbTBoTHUwdXdIL2o4OG93dTdsam5tbWFUeGhVV1FMcTJBMFVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5YnVpTXE0UmJUc2g1RTRMcEF3UnNWRDVXUmpKSnFzTlRYdFhTZGl6N1RzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktJc3NnWTZib2FXa010aVhuWW9jYXd3T0pQc3NnWlZVeW96RTAzYVNyRjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii8xR2lNVGtibEo0ZWtSayt2WEplSmRzK0Q1TU1jMnRUeXZ6UzcvOFk5Mkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1AwekxNOWE0UjVUZExxa3NtaXJUY0UzWUNJcFBVNDFOMDdpa3VaS1dXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmk2Tm9nZ1A1aFIxV1pLWkpFQWJyY2RsTGJ3Vkp0UTIrTWtGWERIbU1VST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRvOU5DYzhOTzZmc1E0aUVrYThMcjc4NEtsSW9LaGc1aGhlck5yaDFPN3F3NU9XQ0s5SGFJLzdXMDN2aWk4UUsrZEsyWVJsaVZKeDhxZkNRMWZ6M0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcyLCJhZHZTZWNyZXRLZXkiOiJJNDJTYXFMZlc5SDkrNXJKQzlabEJYbmFDbXFubWVoNCsrMDBBSDROZHBFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI5NTkwMTc5OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4MjIyRjY1MERBMDYxMEEyQkZBNzk0OTA4QzU5MzczNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2ODA1NDc0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyOTU5MDE3OTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjM3MjgwNDU0NjhGNTc3MDZFNzYxNURDNTAzNkJCN0QifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjgwNTQ3NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjk1OTAxNzk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkIyMjdBQThBOTcyQTYxRjE1MkI2QUZCQ0Y3ODRDNEU0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY4MDU0NzZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik1CNzVCQjRXIiwibWUiOnsiaWQiOiI5MjMyOTU5MDE3OTk6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJLSU5HIiwibGlkIjoiNDA0Njc4MzYyMzE4OTQ6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04rTXB5UVEzZkxheFFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVsM1lTL3RPMmc2bk5ua2JtNUIzUTVDOERxeEZ6UTkzYW5vQ3Z4TCtaVFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikt4K3NnUlFUQnEwQ3hDZW5BUDB5M0FaMm5LaWw3b1h1TWVjWVZNSEJaQ20wa1IvQ01DM3h3dERoRUNXUVBsb1lnMmdVU3JvNWY3dEpVZ252Q3U2TERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUc0NaZi9zclBXN3JNNVVCN3V4Yk5Ici9aMGxTZXkvNDBQTjVDMXJ4V1BmYUY3eUJOalo0Sk9WSTJEanBBNWdDa0NEYUVwN0h5WWlnYWFWTzBRSE9CZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI5NTkwMTc5OToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJwZDJFdjdUdG9PcHpaNUc1dVFkME9RdkE2c1JjMFBkMnA2QXI4Uy9tVTIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjgwNTQ3MywibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKZm0ifQ==",
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
