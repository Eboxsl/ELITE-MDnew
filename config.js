const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables for elite]════════\\
global.owner = process.env.OWNER_NUMBER || '94775686166'
global.mongodb = process.env.MONGODB_URI || "mongodb://u67wtnui9m87lq4yhmvv:tpelVygzO9NWafGwF0D@bmrkwjjqyq2xfesqxn7z-mongodb.services.clever-cloud.com:2052/bmrkwjjqyq2xfesqxn7z"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/bit-x-tm/elite-md'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/ebox@nt' // add your username
global.sudo = process.env.SUDO || '2347039570336,2348050907760'
global.devs = '2347039570336,2348050907760';
global.website = 'http://www.ebox.free.nf/?i=1' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/c8bdeb8c2c10f83532444.png'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "IZUKU;;; eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0lxSS9DTWR2dVd5SjI0dFlOeHB4Qi9QSmxyeWdpN2h5T0dzMkJTaHJtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0pBNEc0NEdtVWcrc09vSDJHR0FvdG85d2c5YVVCUFYxRG55clp2YnlWZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TjdwOVUyYXRLK1hCMmdjVTNlMDREUlhLM1VwVTZnRmJQWG4zNVByWWxvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIazJaNUsyeWFvSlZyWFZhTzVTOTIxK0FxNkdjSmlDbHI2ejBrOEFIT0NjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBNEhJL0JuRHcrWVRpcXpwdExucjZMTkl0a0FtMXdjYnpOcFBHZVdvWHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRDdklBdVh3ZjRTVHlVcGxSTGZ0OHF5UG9CSGxMWmNxeVlGUXNJTlR2Qm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0JseHorQzdHQ0VaczRBajl5YTZkZlZnbzJIS0JMQmFQUUxEMG5zZlZGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmNCRnkvRWwvKzJmdEltam9JNWdlb0RWb0lQY1NQVC80Q2NWMmxQSEFYST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1nSmhIYkVBRWgyWVVyTUpNSkt2bzZ3YzZTUnJ5SVZqT0piSEZtdWlKaUdOSFRtdG4vMURNTm5nMnpuR3UxNmp6U09zRk5iZVRGRUtDcU9sTklWa0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6InNVeWF4d21CZlRjeWdraDZKUjVRUEdBUHRzbElZT1ZTTmpwY21EOHMrMlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzU2ODYxNjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjRGNkUyREJFMkUyRjk1NzBEOUJBMjNCRTY5QkI3RDIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTQ2NzQ3MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzU2ODYxNjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTRBNUYwNTRFOEU3NkVFN0NCODkxQTAzNDFEODI3QUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTQ2NzQ3MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzU2ODYxNjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDFDQ0M1NTNDREZGN0QwRkE4RDU5QUIyMUY0MzhFOTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTQ2NzUwMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSDhrMVFENkFRa0tRcF81ZFIwWVJ2USIsInBob25lSWQiOiJhYTJjYzM4Mi01ZGE4LTRlZjktOTY1MS1mNGJhNGE4NWM0NTkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWtpWElKK1g0RUxGcHlMQ3lZTjFrNDVsVk5rPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRHEyM3pVd2pPNE0xSklIVTdWeDNlcm9yc3c9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOR2wzT1lCRU1qNzg3TUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWcjMrbkV0SkxFKzZSSWFmUXRWY3Zjdk5QY0dTRlFUZXJ4SjMwYmcwYXlRPSIsImFjY291bnRTaWduYXR1cmUiOiJISTZWT0JsaGQyNkVTRkdUcHFEM2NORGdnV2xCUU1xenFJQkI2ajJGaDRZdHNwU3FwVzdHems5V09XR05hbStpbG5wM0Vjdkp4aGpHUnd3YWx6VlNCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSWxUWm5YR1pmL01CK0JHVTdSWjNyNDRLY0ZiczVFUFBHSFhRYlNjdTc1dEVrMmUrSlBBMjhLWUlBdkQ3TUs0cWxVMlloSDdMYXBwY0VieGd3dEFsQmc9PSJ9LCJtZSI6eyJpZCI6Ijk0Nzc1Njg2MTY2OjUzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdmbHwnZm48J2agyDwnZqhIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc1Njg2MTY2OjUzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZhOS9weExTU3hQdWtTR24wTFZYTDNMelQzQmtoVUUzcThTZDlHNE5Hc2sifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk0Njc4MDQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRjlXIn0=",
  botname:   process.env.BOT_NAME === undefined ? 'Elite BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Nethindu ' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'No name' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'ELITE-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
  autosendstatus:  process.env.STATUS_SENDER === undefined ? false : process.env.STATUS_SENDER,
anticall:  process.env.ANTI_CALL === undefined ? false : process.env.ANTI_CALL,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? '0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'ADAM',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
