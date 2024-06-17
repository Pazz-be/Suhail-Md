const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Bondo,kenya."


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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g"254717758006";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_48_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgyLFxuICAgICAgICA1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgOTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxODksXG4gICAgICAgIDIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUxLFxuICAgICAgICA4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNyxcbiAgICAgICAgNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MSxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxLFxuICAgICAgICA1OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxLFxuICAgICAgICA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk0LFxuICAgICAgICA5LFxuICAgICAgICAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDksXG4gICAgICAgIDIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODQsXG4gICAgICAgIDMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NixcbiAgICAgICAgMjMzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkl0WEw3SXpGdE1iYjVaUWliemRMcmNkSC9ORjJlZS9hTzh2b2M1bEk0MkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzE3NzU4MDA2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0QkU3RTk3OEVBNTc4NzA3MjNFRDc2QjhDRkEzMzJFQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg2Mjg0NzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MTc3NTgwMDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg4OUNBMTlFOTdFODRENkMzREFGNjc3QkZFMjY3RDdFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODYyODQ4MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzSmpqSEEwblFaZVBTQmZQN2tRbkJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAxOTFmYmZiLTY3M2YtNDNmNy04ZWMxLWNlMzQ3Yjk5NDQ5YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDE1OCxcbiAgICAgIDE2LFxuICAgICAgMjQwLFxuICAgICAgOTYsXG4gICAgICAxNTYsXG4gICAgICA2NixcbiAgICAgIDE3NyxcbiAgICAgIDM4LFxuICAgICAgMjIzLFxuICAgICAgMjUzLFxuICAgICAgMjI4LFxuICAgICAgMTM5LFxuICAgICAgMjI4LFxuICAgICAgMTAsXG4gICAgICAzMCxcbiAgICAgIDMsXG4gICAgICAxNjksXG4gICAgICAxNzMsXG4gICAgICA4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICAxNjYsXG4gICAgICAyMDIsXG4gICAgICAyMjIsXG4gICAgICAxNjksXG4gICAgICAxNjcsXG4gICAgICAxNTIsXG4gICAgICAxOTcsXG4gICAgICAxMTMsXG4gICAgICA2NixcbiAgICAgIDgyLFxuICAgICAgMzQsXG4gICAgICA0NSxcbiAgICAgIDEzNyxcbiAgICAgIDI4LFxuICAgICAgMTA4LFxuICAgICAgMjI4LFxuICAgICAgMTMxLFxuICAgICAgOTgsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRkE5SzQ3SERcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxNzc1ODAwNjoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQwMjY5Nzg5OTY2MzU4OjIwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIn7wnZSK8J2Ur/CdlKzwnZS38J2Ut/CdlKvwnZS2IPCdlJPwnZSe8J2Ut/CdlLd+4pyTXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTC9wMWJrREVQYmd3TE1HR0JVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxcGRwMlB6Q043ajFaM0EzNG80NXlHazBYcE5DTTVRdFhHTkR2NFhoMG1RPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZGNWpMQ2pucUZ2MkJEcGErZnZJMVUyRnZoeGREcnZmeDlsbnVRbk5BYTVVNkFqbGxueGZkRnFwUWpWTCtKSklHMjd4T1kyTWpVV3I0MndnL1UwT0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhKODZFK3J6ZGI1NjVXM3ZyQWJSMDhlQ3JCZ0pPeEVOUit2amMvS2wzaklFYis5b3FiaHYwMXlsUXNMZWY1TnRNazJtVmJSZGV3STF0Q1VWSlRHaEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcxNzc1ODAwNjoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg2Mjg0NzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPNkdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU82Ry5qc29uIjogIntcImtleURhdGFcIjpcImdnY2Q4K0M3S29wQkYrak40YnpXaU1oSlowdFdMak4ydTJaQ0U5bTVZVG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTI2MjUwMTc1LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDUsOF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
