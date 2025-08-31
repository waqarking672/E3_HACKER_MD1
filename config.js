const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEkyVk4wNU4zU25qRUZyeWlKUnZoOE9nZGlvc1FIRGxNV29lMndZQVFVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHg2Zlhsd2FtdmN1cFBnUXBIVWcvQ1hVWmR1NnR4bGlVSDNJR2ZzTWlnQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnT3RsTkRTNHo2V25DdzBwYVRzZEcwM3hrL0d5bUxiNnNHR2g2anNhbGtnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPc01TREx4dDFyOFE2d3gycXFSZUd6ZHZMallqbzJLcVplRisrRnMzdFVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndFcHJCUWZ0eVRTbG9HUTRvazlwRzN0ZzMwanRGS3pOVUEvMk4ra2FNSDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNDempvMWplTUxSMUxuVUp5WkpOb2JGQXQ5Wm9YQ2lHems0V0IyYkpDWDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZBZEtLMWtMcXRKOGF2NnZFOG94WjBHZFlCbHYzRDR5c2xZcFN1WlJtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUdsSzd4VDVEdmloTzFyczQrQk5xSmtsNGJVYms3WTAwNU5LNzZNWnpnbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVYeThPZXkzYmpLeFFTZGhwSkI5WDFocVZ4QTkvNG5oWXF1OUp0dkZuTGNWMFpXelk3RUJnYkdhVmk5M3BLMktzdlZ5WUd1NnlXQjNDVkFqblgrV0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJpeHdmVm04dFIvd0Z4VEdJV1NVUnZyMjFHR3l5b0F2T09JNXJ0ZkJSQ0xJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk2Mzk5NDY2NjM2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFRkE1QzcxODQ4NDBGRENGOTAxRUJFNEU4RTZDOTYwNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2NjcxNDQwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NjM5OTQ2NjYzNjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUEyRTJCMzdCN0U0NjE3NDY4NjExOTY1MTcwMUQ0RUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjY3MTQ0MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTYzOTk0NjY2MzY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjYyRjQ0NjRFOEU0N0FGQTJCRjRDRTUxNTJCQjk4Q0Q1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY2NzE0NDJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik1MQ0JSRFBHIiwibWUiOnsiaWQiOiI5NjM5OTQ2NjYzNjc6MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEyMjYxNzcwOTIwNzgwMzoxQGxpZCIsIm5hbWUiOiJlMyBoYWNrZXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05mQW1Md0VFTXZiMHNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikx2ZDA0M3ZxN0pzejRERU9YWUJITTQzTlpMSklCNllvWXVWRkpycTNFV1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjU1UnFzZkRCV0ZxajZYN2thUmVnYnIxK2tkRFlma1puWEhGTXZmUXpDS3ozcmUrV3V2bWtycUhkUWNZS3EwV2lmcTgxNzZaOVZ3TnphZDVxUUlsM0JRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzWGh1Z3pzc3ZOMUZzUlpVZjhSbkliMFgyWFZ4Z1hkelVDQ0t5MkxlL3c1dzgyRDdKQXl6UHpaZFpuSlk5eERFeXNwRklFSWRqNjFma1Q3K3NEanJBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk2Mzk5NDY2NjM2NzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlM3M2RPTjc2dXliTStBeERsMkFSek9OeldTeVNBZW1LR0xsUlNhNnR4Rm0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjY3MTQzOCwibGFzdFByb3BIYXNoIjoibm0zQmIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5DUiJ9",
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
