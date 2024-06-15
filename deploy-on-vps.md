## Deploy on VPS or PC.

- You need to Install git,ffmpeg,curl,nodejs,yarn with pm2

  1.  Install git ffmpeg curl
      ```
       sudo apt -y update &&  sudo apt -y upgrade
       sudo apt -y install git ffmpeg curl
      ```
  2.  Install nodejs

      ```
      sudo apt -y remove nodejs
      curl -fsSl https://deb.nodesource.com/setup_lts.x | sudo bash - && sudo apt -y install nodejs
      ```

  3.  Install yarn

      ```
      curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
      echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
      sudo apt -y update && sudo apt -y install yarn
      ```

  4.  Install pm2

      ```
      sudo yarn global add pm2
      ```

  5.  Clone Repo and install required packages

      ```
      yarn install --network-concurrency 1
      ```

  6.  Create an env file for ENV.

      ```
      touch config.env
      nano config.env
      ```

      copy paste lines below.

      ```
      OWNER_NUMBER="94775686166"
      MONGODB_URI="mongodb://u67wtnui9m87lq4yhmvv:tpelVygzO9NWafGwF0D@bmrkwjjqyq2xfesqxn7z-           mongodb.services.clever-cloud.com:2052/bmrkwjjqyq2xfesqxn7z"
      SESSION_ID = "IZUKU;;;                                     eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUg2TlBoWjhqNlZWdW55NXM2ZVFKRWVLa0ozdWpMR0dJbWRmd0FUQVgyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3l5UFcrQTF5TUxYblFQUlRxMERmMUM3RTJLSmxXd3JlRGFjRldLLzFUaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJT2ZHNHlRSTNmNmlxRzgwcS9zL2YvY3RGNVNUZWFOYnRabXN3elVNV1hNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpbVhmNU5sQVRQdVR5RXRGa1lkblgwbWdJUUVWLzEwZ2lkNlVoZ3FkRFNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFKTldsdU5JQkowTGlUYzQ3UzdjOExLVWk5MTVZYmJYYjlWQThrVWI5V1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcwdHprZ3RKWXZDaVh2L3dJRFNodlNDWVo2TmpNMTYrcGpmTjdseU9SQWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU41dDZKNUJySlZSSURIN1hnT2ZlWjZiUzUwMlovd0phVmdUV2xTU3lHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVFCbVF3UU1jQXI5bXFNcHo4a1VDWmVNb1VmZFdxalIwT0ZDUjgzSmpVZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNTc3l1Q0RhQ2VvNnllQVhFZnBRUVBmWUxTUlNVcWpSQ3NMcC8wUkE0dkNhZXNTczJLaGJQSzc0RlM2TTl5dzcwYlV1S3RYS3oxTUlUSVpXQnhCN2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6Ink2NVdoNVZoVExVU2h1Qnlwa242Qm1qSTgrYWZycU05NUhGd0NjTURCNFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBkOGcwb2RZU3hpTEp1Yl9PQi1WdUEiLCJwaG9uZUlkIjoiY2MwYTE2YzctOGU4Ni00ODUxLTg0YzUtZjYzODA1YWRlZjI5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFzWXp3V01VUzdyU1JaMjQ4OWFlR1VmbVVOVT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVRtcU9KcEE0cWNac3gyZmZmei9PY21rRjRFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkNsM09ZQkVKUDdtN01HR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVnIzK25FdEpMRSs2UklhZlF0VmN2Y3ZOUGNHU0ZRVGVyeEozMGJnMGF5UT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRFJJQmVyMG40ZndJd2N0VUdFNm1jUTJrc01FbllDMmZrR2NuRE1XZ2J5YTd1MTN4Y1NoYnB3dVNTcUtaSEhPWmYycE5OVldYMXVrNlNWWm9VQmdLQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkdUVVE0TFRidWxlaXBRc0hwUkFCc2IrL01WTDh3ajZQQm8zME5zbnd6b3Z4YmdSdUtZUmFjWTUwTk9sejFaS0dHQWhWamNxbmNlQjZWTXh3cHdsU2hBPT0ifSwibWUiOnsiaWQiOiI5NDc3NTY4NjE2Njo1MUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NTY4NjE2Njo1MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWYTkvcHhMU1N4UHVrU0duMExWWEwzTHpUM0JraFVFM3E4U2Q5RzROR3NrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4MDI1NjIyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUY5VyJ9"
THUMB_IMAGE = "https://telegra.ph/file/c8bdeb8c2c10f83532444.png"
port = 5000
email = "sam@secktor.live"
global_url = "instagram.com"
OWNER_NAME = "SamPandey001"
AUTO_REACTION = true
FAKE_COUNTRY_CODE = 92
READ_MESSAGE = false
PREFIX = .
WARN_COUNT = 3
DISABLE_PM = false
ANTI_BAD_WORD = "fuck"
LEVEL_UP_MESSAGE= true
WELCOME_MESSAGE =  "*Hi,* @user \n To Elite us\n*Welcome in* @gname \n*Member count* : @count th"
THEME= SECKTOR
WORKTYPE = public
PACK_INFO = "Sam;Pandey"
ANTILINK_VALUES = "chat.whatsapp.com"


      ```

      ctrl + o and ctrl + x, To save and exit

  7.  start and stop bot

      To start bot `npm start`,
      To stop bot `npm stop`
