fx_version 'cerulean'
game 'gta5'

author 'Ster Roque'
version '1.0.0'

client_script 'client/dist/client.js'
server_script 'server/dist/server.js'

ui_page 'ui/dist/index.html'

files {
    'ui/dist/**'
  }

dependency 'oxmysql'