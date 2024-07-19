const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252686139876";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_12_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyLFxuICAgICAgICAzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDc3LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTExLFxuICAgICAgICA5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDc5LFxuICAgICAgICA3NixcbiAgICAgICAgODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDM2LFxuICAgICAgICA5NixcbiAgICAgICAgMjAyLFxuICAgICAgICA3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMixcbiAgICAgICAgNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4LFxuICAgICAgICA1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI2LFxuICAgICAgICA2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwLFxuICAgICAgICAzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgODksXG4gICAgICAgIDExNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MixcbiAgICAgICAgOTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1dDgzSjhuN3FSSERIM3piODZyOTloN1RHcEs1RXVVdGxOK2U1Tmcvb28wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnRDJrRWl4U1RYeVpCVnltLTF0Ykd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjE1MTk4ZWYxLTJkNmYtNDI3YS1hMThhLTQzNGE0OGJmNTZmNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAxMjQsXG4gICAgICAxOTYsXG4gICAgICAyNDMsXG4gICAgICAxMDAsXG4gICAgICAxMzAsXG4gICAgICAxMDAsXG4gICAgICA0MSxcbiAgICAgIDEzNyxcbiAgICAgIDEzNSxcbiAgICAgIDQ2LFxuICAgICAgMTIsXG4gICAgICAyNixcbiAgICAgIDEyLFxuICAgICAgMTM5LFxuICAgICAgMjQsXG4gICAgICA0OSxcbiAgICAgIDIxLFxuICAgICAgMTMsXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDQsXG4gICAgICAyNDgsXG4gICAgICAxNTksXG4gICAgICAyMzMsXG4gICAgICAxNzAsXG4gICAgICAxMSxcbiAgICAgIDE3MyxcbiAgICAgIDE1LFxuICAgICAgMTc1LFxuICAgICAgMTUwLFxuICAgICAgNjMsXG4gICAgICAyNTIsXG4gICAgICAyMzksXG4gICAgICAyMzgsXG4gICAgICA1NSxcbiAgICAgIDI0OSxcbiAgICAgIDI1NCxcbiAgICAgIDE1MCxcbiAgICAgIDE3NixcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQ3Q0tHUlJNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI2ODYxMzk4NzY6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MDI3MTQwMjMzMjIzMjoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJL3R3cHNCRUpqMTZyUUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtxVU9IODVBTVJZLzBFRDZUY2ZscjZXZFVFWUZMNnJjaU0wSWx4RXBiUzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicnYzQk1pNDFqb2JuczFyallKOUo4NzZhYWd6ZlpCQnFUbnpKMWdrTlZLNHU1TmhHYy8vVkZnUTBNWmFTanZIa3VXMFVGT3hNelp5SWhYVGdMUGlIQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib2lnNUNwdTBIdFJsK2VWSXFyNUEzYlNnaWovR2dBT1ZacVRhb2NERDNJa1EzUnZZR1p5ak0yVmRjMTJTNWYrL2xudXZXMWppUDFwekxpMFVUYjRVQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjg2MTM5ODc2OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2ODYxMzk4NzY6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0MTYzNDhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "wareeriso",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
