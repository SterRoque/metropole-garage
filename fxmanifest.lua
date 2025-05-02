fx_version 'cerulean'
game 'gta5'

author 'Ster Roque'
version '1.0.0'

client_script 'client/client.js'
server_script 'server/dist/server.js'

ui_page 'client/dist/index.html'

files {
    'client/dist/**'
  }

dependency 'oxmysql'