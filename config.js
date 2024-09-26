const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347031303215";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_20_48_09_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQzLFxuICAgICAgICA2NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMxLFxuICAgICAgICA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE5LFxuICAgICAgICA4MSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjExLFxuICAgICAgICA0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM0LFxuICAgICAgICA3LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjExLFxuICAgICAgICA3MixcbiAgICAgICAgMzAsXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiLzJOTTVJeC85OWJrb3ppSFBXSHkzd3J0OGxpRDVJMXp3RDJyNEd3VjltZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDMxMzAzMjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFRTk2MzhBRENEMEM1ODA1NjU4MzU2NjVCOUI5MzdBN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjczODM3MDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaGFJWERhbEhUbUdYeFByYVRYRTdNZ1wiLFxuICBcInBob25lSWRcIjogXCIzYjZjZDMzNy0wMjYxLTRmODMtOWU0YS03NzI4OTVlMjgwMGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgOTAsXG4gICAgICAxODAsXG4gICAgICA3MyxcbiAgICAgIDE3MixcbiAgICAgIDE0OCxcbiAgICAgIDg5LFxuICAgICAgMTUzLFxuICAgICAgOTIsXG4gICAgICAyMyxcbiAgICAgIDIyMyxcbiAgICAgIDE3MSxcbiAgICAgIDk0LFxuICAgICAgMjI3LFxuICAgICAgMTIyLFxuICAgICAgNTksXG4gICAgICAxOTYsXG4gICAgICAyMCxcbiAgICAgIDE5MyxcbiAgICAgIDIzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICAxNjgsXG4gICAgICAyMjAsXG4gICAgICAyMTgsXG4gICAgICAxMCxcbiAgICAgIDExNyxcbiAgICAgIDIzMyxcbiAgICAgIDI1MyxcbiAgICAgIDU4LFxuICAgICAgMyxcbiAgICAgIDI0NixcbiAgICAgIDE4LFxuICAgICAgMTYzLFxuICAgICAgMjIzLFxuICAgICAgMjUyLFxuICAgICAgNjUsXG4gICAgICA3NyxcbiAgICAgIDY4LFxuICAgICAgMzcsXG4gICAgICAxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDNkNDUTlESFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAzMTMwMzIxNToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImZhaGl0YXpheXlhbnVcIixcbiAgICBcImxpZFwiOiBcIjE4OTIxOTE0NjM0MjYwODoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNTzVyNzRHRUltUjE3Y0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRZWTdodFdKQkdwTmJ2TVlYaldUWWlmL2lCQWpScE5ZUmxmNzVneDVyd1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTllSV3c4Wlc1TkFnV0taaXpyZnc3eW1zbWEyU2FFSThQZ2RkN2h1cFd6bXdmbWhpL0grQ3dqRTg1TUhHZk51Q3RMaFJvR0pLNEpWaEw5eU0ybFE0QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMTlWYU1WRms0aHVLUzdTdzVBM1lIamdJWTB3cEtwWllEdmlVSlVEL1E4bjlFNHpnb1pwcWIvazFLd1JMV3V2cmNYRE02UUtXY0JjTjE0anpNRHdDaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzMTMwMzIxNToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzM4MzY5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNmUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2ZQLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
