//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                            𝗩𝟰                                               //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//                                                                                                      //
//                                                                                                      //      
//               ██╗  ██╗██╗     ██╗ ██████╗ ██████╗ ███╗   ██╗      ██╗   ██╗██╗  ██╗                  //              
//                ██╗██╔╝██║     ██║██╔════╝██╔═══██╗████╗  ██║      ██║   ██║██║  ██║                  //
//                ╚███╔╝ ██║     ██║██║     ██║   ██║██╔██╗ ██║█████╗██║   ██║███████║                  // 
//                ██╔██╗ ██║     ██║██║     ██║   ██║██║╚██╗██║╚════╝╚██╗ ██╔╝╚════██║                  // 
//               ██╔╝ ██╗███████╗██║╚██████╗╚██████╔╝██║ ╚████║       ╚████╔╝      ██║                  //
//                ═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝        ╚═══╝       ╚═╝                  // 
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : V4
//  * @author : hamhandsme
//  * @youtube : https://www.youtube.com/@hamhandsme
//  * @description : V4 ,A Multi-functional whatsapp user bot.
//*
//*
//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//Instagram: hamhandsme
//Telegram: t.me/hamhandsmee
//GitHub: @butterflyinghigh
//WhatsApp: +6283148296743
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@hamhandsme
//   * Created By Github: butterflyinghigh.
//   * Credit To Butterfly
//   * © 2024 BUTTERFLY-V4.
// ⛥┌┤
// */

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: butterfly" //ur yt chanel name
global.socialm = "GitHub: butterflyinghigh" //ur github or insta name
global.location = "Indonesian, Lahore, Sabzazar" //ur location

//new
global.botname = 'Butterfly-V4' //ur bot name
global.ownernumber = ['6283148296743'] //ur owner number, dont add more than one
global.ownername = 'Hamhandsme' //ur owner name
global.websitex = "https://youtu.com/@hamhandsme"
global.wagc = "https://whatsapp.com/channel/..."
global.themeemoji = '⛩'
global.wm = "V4 Bot Inc."
global.botscript = 'https://github.com/salmanytofficial/XLICON-V4-MD' //script link
global.packname = "Butterfly"
global.author = "MΛDΣ BY Butterfly"
global.creator = "6283148296743@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6283148296753"] // Premium User

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.antidelete = false //set anti delete 


global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
