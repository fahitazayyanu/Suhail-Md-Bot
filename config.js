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
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
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

  sessionName:process.env.SESSION_ID || "SUHAIL_13_44_10_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICA4OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3LFxuICAgICAgICA1OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzksXG4gICAgICAgIDU1LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE5LFxuICAgICAgICA4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDgwLFxuICAgICAgICA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDksXG4gICAgICAgIDk3LFxuICAgICAgICA4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk4LFxuICAgICAgICA1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjksXG4gICAgICAgIDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNTksXG4gICAgICAgIDU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMixcbiAgICAgICAgMjA4LFxuICAgICAgICA2NyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA2LFxuICAgICAgICA4MixcbiAgICAgICAgNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAwLFxuICAgICAgICA5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzLFxuICAgICAgICA3NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib3JOR2orYUFkOUpzcFA5L2pVcS94L1QvTU5VYXpramYrUnI4dUhEYkpOQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDMxMzAzMjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1OEU5QTUxMkY2MjZFOEE5Rjk1RUJBODg1MUU1QjU3Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc4NzY2NTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaGUwVHlRVVJRUC1YSGh5ak8zYzJrZ1wiLFxuICBcInBob25lSWRcIjogXCIyNWZlM2MxNy03OTZmLTQyODQtYmMzMi1hYjY0M2YxZWZkYjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgOTksXG4gICAgICAxMDksXG4gICAgICAxMTIsXG4gICAgICAyMzAsXG4gICAgICAxMDYsXG4gICAgICA3NSxcbiAgICAgIDE2NCxcbiAgICAgIDI0MSxcbiAgICAgIDE4MixcbiAgICAgIDIxNCxcbiAgICAgIDE0MixcbiAgICAgIDEwNyxcbiAgICAgIDE4MixcbiAgICAgIDUxLFxuICAgICAgNjgsXG4gICAgICAxNDgsXG4gICAgICAxODAsXG4gICAgICAyMzUsXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgMTc4LFxuICAgICAgMTc1LFxuICAgICAgMjI4LFxuICAgICAgMTI0LFxuICAgICAgODMsXG4gICAgICAxNTksXG4gICAgICA0OSxcbiAgICAgIDE3MixcbiAgICAgIDE0MCxcbiAgICAgIDMwLFxuICAgICAgNDEsXG4gICAgICAyMSxcbiAgICAgIDI1MyxcbiAgICAgIDE3OSxcbiAgICAgIDEzNSxcbiAgICAgIDE5MSxcbiAgICAgIDQxLFxuICAgICAgMTQ5LFxuICAgICAgMjQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxONUJGNTlTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDMxMzAzMjE1OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiZmFoaXRhemF5eWFudVwiLFxuICAgIFwibGlkXCI6IFwiMTg5MjE5MTQ2MzQyNjA4OjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01PNXI3NEdFS0djOWJjR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZFlZN2h0V0pCR3BOYnZNWVhqV1RZaWYvaUJBalJwTllSbGY3NWd4NXJ3VT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlSm9BVUxKNURVVU5HcFBhSVhBMVlOMXQrMzZ1TDJUakUrdWJDeVo0VXJPYS9YMEtIM093cGw4R2szbVlIczRIaVB0M3c4N0w1NjJOWGpWWDlmMk5CUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsVDRjNUJGZXZpNnRaYnFhYTExQlducWZrU0NndlAzUEppOG82YmdZTXhYcVh0R0tGUmpTWlhQUm0ySWNEU2VQRTVkYk1DOHdRWUJydjBWT0dNSURBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDMxMzAzMjE1OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3ODc2NjQ1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2ZQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDZlAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqTW9sTXJkQ2tEVnFwSEIvdy9WMUJLeDF5bmhUa1ZVWWh3L0NBNitiZFZjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NDE0MTM1NzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzI3MjI1MDU0MVwifSIKfQ==",  // PUT SESSION ID HERE 
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
 
