const Discord = require ('discord.io');
const logger = require('winston');
const auth = require('./auth.json');
const https = require('https');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
	if (message.substring(0, 1) == '!') {     
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case '':
				oblique();			//posts one of Brian Eno's Oblique Strategies into the discord server.
				break;	
			case 'btc':
			case 'bitcoin':
				var url = "https://api.coinmarketcap.com/v1/ticker/bitcoin/"
				var usd = "0.0";
				https.get(url, function(res){
					var body = '';

					res.on('data', function(chunk){
						body += chunk;
					});

					res.on('end', function(){
						var capResponse = JSON.parse(body);

						console.log("Got a response: ", capResponse[0].price_usd);

						usd = String(capResponse[0].price_usd);
						bot.sendMessage({
							to: channelID,
							message: "$" + usd + " CoinMarketCap"
						});
					});
				});
			break;
			case 'eth':
			case 'ethereum':
				var url = "https://api.coinmarketcap.com/v1/ticker/ethereum/"
				var usd = "0.0";
				https.get(url, function(res){
					var body = '';

					res.on('data', function(chunk){
						body += chunk;
					});

					res.on('end', function(){
						var capResponse = JSON.parse(body);

						console.log("Got a response: ", capResponse[0].price_usd);

						usd = String(capResponse[0].price_usd);
						bot.sendMessage({
							to: channelID,
							message: "$" + usd + " CoinMarketCap"
						});
					});
				});
			break;
			case 'link':
			case 'chainlink':
				var url = "https://api.coinmarketcap.com/v1/ticker/chainlink/"
				var usd = "0.0";
				https.get(url, function(res){
					var body = '';

					res.on('data', function(chunk){
						body += chunk;
					});

					res.on('end', function(){
						var capResponse = JSON.parse(body);

						console.log("Got a response: ", capResponse[0].price_usd);

						usd = String(capResponse[0].price_usd);
						bot.sendMessage({
							to: channelID,
							message: "$" + usd + " CoinMarketCap"
						});
					});
				});
			break;		
		}		
	}
//The function oblique posts one of Brian Eno's Oblique Strategies into the discord server.	
function oblique() {
	var rand = getRandomInt(0,115);
	switch(rand) {          
		case 0:
			bot.sendMessage({
				to: channelID,
				message: 'Be less critical more often'
			});
		break;
		case 1:
			bot.sendMessage({
				to: channelID,
				message: 'Use "unqualified" people'
			});
		break;
		case 2:
			bot.sendMessage({
				to: channelID,
				message: 'Abandon normal instruments'
			});
		break;
		case 3:
			bot.sendMessage({
				to: channelID,
				message: 'Accept advice'
			});
		break;
		case 4:
			bot.sendMessage({
				to: channelID,
				message: 'Accretion'
			});
		break;
		case 5:
			bot.sendMessage({
				to: channelID,
				message: 'A line has two sides'
			});
		break;
		case 6:
			bot.sendMessage({
				to: channelID,
				message: 'Allow an easement (an easement is the abandonment of a stricture)'
			});
		break;
		case 7:
			bot.sendMessage({
				to: channelID,
				message: 'Are there sections? Consider transitions'
			});
		break;
		case 8:
			bot.sendMessage({
				to: channelID,
				message: 'Ask people to work against their better judgement'
			});
		break;
		case 9:
			bot.sendMessage({
				to: channelID,
				message: 'Ask your body'
			});
		break;
		case 10:
			bot.sendMessage({
				to: channelID,
				message: 'Assemble some of the instruments in a group and treat the group'
			});
		break;
		case 11:
			bot.sendMessage({
				to: channelID,
				message: 'Balance the consistency principle with the inconsistency principle'
			});
		break;
		case 12:
			bot.sendMessage({
				to: channelID,
				message: 'Be dirty'
			});
		break;
		case 13:
			bot.sendMessage({
				to: channelID,
				message: 'Breathe more deeply'
			});
		break;
		case 14:
			bot.sendMessage({
				to: channelID,
				message: 'Bridges -build -burn'
			});
		break;
		case 15:
			bot.sendMessage({
				to: channelID,
				message: 'Cascades'
			});
		break;
		case 16:
			bot.sendMessage({
				to: channelID,
				message: 'Change instrument roles'
			});
		break;
		case 17:
			bot.sendMessage({
				to: channelID,
				message: 'Change nothing and continue with immaculate consistency'
			});
		break;
		case 18:
			bot.sendMessage({
				to: channelID,
				message: "Children's voices -speaking -singing"
			});
		break;
		case 19:
			bot.sendMessage({
				to: channelID,
				message: 'Cluster analysis'
			});
		break;
		case 20:
			bot.sendMessage({
				to: channelID,
				message: 'Consider different fading systems'
			});
		break;
		case 21:
			bot.sendMessage({
				to: channelID,
				message: 'Consult other sources -promising -unpromising'
			});
		break;
		case 22:
			bot.sendMessage({
				to: channelID,
				message: 'Convert a melodic element into a rhythmic element'
			});
		break;
		case 23:
			bot.sendMessage({
				to: channelID,
				message: 'Courage!'
			});
		break;
		case 24:
			bot.sendMessage({
				to: channelID,
				message: 'Cut a vital connection'
			});
		break;
		case 25:
			bot.sendMessage({
				to: channelID,
				message: 'Decorate, decorate'
			});
		break;
		case 26:
			bot.sendMessage({
				to: channelID,
				message: 'Define an area as "safe" and use it as an anchor'
			});
		break;
		case 27:
			bot.sendMessage({
				to: channelID,
				message: 'Destroy -nothing -the most important thing'
			});
		break;
		case 28:
			bot.sendMessage({
				to: channelID,
				message: 'Discard an axiom'
			});
		break;
		case 29:
			bot.sendMessage({
				to: channelID,
				message: 'Disconnect from desire'
			});
		break;
		case 30:
			bot.sendMessage({
				to: channelID,
				message: 'Discover the recipes you are using and abandon them'
			});
		break;
		case 31:
			bot.sendMessage({
				to: channelID,
				message: 'Distorting time'
			});
		break;
		case 32:
			bot.sendMessage({
				to: channelID,
				message: 'Do nothing for as long as possible'
			});
		break;
		case 33:
			bot.sendMessage({
				to: channelID,
				message: "Don't be afraid of things because they're easy to do"  
			});																	  
		break;
		case 34:
			bot.sendMessage({
				to: channelID,
				message: "Don't be frightened of cliches"
			});
		break;
		case 35:
			bot.sendMessage({
				to: channelID,
				message: "Don't be frightened to display your talents"
			});
		break;
		case 36:
			bot.sendMessage({
				to: channelID,
				message: "Don't break the silence"
			});
		break;
		case 37:
			bot.sendMessage({
				to: channelID,
				message: "Don't stress one thing more than another"
			});
		break;
		case 38:
			bot.sendMessage({
				to: channelID,
				message: "Do something boring"
			});
		break;
		case 39:
			bot.sendMessage({
				to: channelID,
				message: "Do the washing up"
			});
		break;
		case 40:
			bot.sendMessage({
				to: channelID,
				message: "Do the words need changing?"
			});
		break;
		case 41:
			bot.sendMessage({
				to: channelID,
				message: "Do we need holes?"
			});
		break;
		case 42:
			bot.sendMessage({
				to: channelID,
				message: "Emphasize differences"
			});
		break;
		case 43:
			bot.sendMessage({
				to: channelID,
				message: "Emphasize repetitions"
			});
		break;
		case 44:
			bot.sendMessage({
				to: channelID,
				message: "Emphasize the flaws"
			});
		break;
		case 45:
			bot.sendMessage({
				to: channelID,
				message: "Faced with a choice, do both"
			});
		break;
		case 46:
			bot.sendMessage({
				to: channelID,
				message: "Feedback recordings into an acoustic situation"
			});
		break;
		case 47:
			bot.sendMessage({
				to: channelID,
				message: "Fill every beat with something"
			});
		break;
		case 48:
			bot.sendMessage({
				to: channelID,
				message: "Get your neck massaged"
			});
		break;
		case 49:
			bot.sendMessage({
				to: channelID,
				message: "Ghost echoes"
			});
		break;
		case 50:
			bot.sendMessage({
				to: channelID,
				message: "Give the game away"
			});
		break;
		case 51:
			bot.sendMessage({
				to: channelID,
				message: "Give way to your worst impulse"
			});
		break;
		case 52:
			bot.sendMessage({
				to: channelID,
				message: "Go slowly all the way round the outside"
			});
		break;
		case 53:
			bot.sendMessage({
				to: channelID,
				message: "Honor thy error as a hidden intention"
			});
		break;
		case 54:
			bot.sendMessage({
				to: channelID,
				message: "How would you have done it?"
			});
		break;
		case 55:
			bot.sendMessage({
				to: channelID,
				message: "Humanize something free of error"
			});
		break;
		case 56:
			bot.sendMessage({
				to: channelID,
				message: "Imagine the music as a moving chain or caterpillar"
			});
		break;
		case 57:
			bot.sendMessage({
				to: channelID,
				message: "Imagine the music as a set of disconnected events"
			});
		break;
		case 58:
			bot.sendMessage({
				to: channelID,
				message: "Infinitesimal gradations"
			});
		break;
		case 59:
			bot.sendMessage({
				to: channelID,
				message: "Intentions -credibility of -nobility of -humility of"
			});
		break;
		case 60:
			bot.sendMessage({
				to: channelID,
				message: "Into the impossible"
			});
		break;
		case 61:
			bot.sendMessage({
				to: channelID,
				message: "Is it finished?"
			});
		break;
		case 62:
			bot.sendMessage({
				to: channelID,
				message: "Is there something missing?"
			});
		break;
		case 63:
			bot.sendMessage({
				to: channelID,
				message: "Is the tuning appropriate?"
			});
		break;
		case 64:
			bot.sendMessage({
				to: channelID,
				message: "Just carry on"
			});
		break;
		case 65:
			bot.sendMessage({
				to: channelID,
				message: "Left channel, right channel, center channel"
			});
		break;
		case 66:
			bot.sendMessage({
				to: channelID,
				message: "Listen in total darkness, or in a very large room, very quietly"
			});
		break;
		case 67:
			bot.sendMessage({
				to: channelID,
				message: "Listen to the quiet voice"
			});
		break;
		case 68:
			bot.sendMessage({
				to: channelID,
				message: "Look at a very small object, look at its center"
			});
		break;
		case 69:
			bot.sendMessage({
				to: channelID,
				message: "Look at the order in which you do things"
			});
		break;
		case 70:
			bot.sendMessage({
				to: channelID,
				message: "Look closely at the most embarrassing details and amplify them"
			});
		break;
		case 71:
			bot.sendMessage({
				to: channelID,
				message: "Lowest common denominator check -single beat -single note -single riff"
			});
		break;
		case 72:
			bot.sendMessage({
				to: channelID,
				message: "Make a blank valuable by putting it in an exquisite frame"
			});
		break;
		case 73:
			bot.sendMessage({
				to: channelID,
				message: "Make an exhaustive list of everything you might do and do the last thing on the list"
			});
		break;
		case 74:
			bot.sendMessage({
				to: channelID,
				message: "Make a sudden, destructive unpredictable action; incorporate"
			});
		break;
		case 75:
			bot.sendMessage({
				to: channelID,
				message: "Mechanicalize something idiosyncratic"
			});
		break;
		case 76:
			bot.sendMessage({
				to: channelID,
				message: "Mute and continue"
			});
		break;
		case 77:
			bot.sendMessage({
				to: channelID,
				message: "Only one element of each kind"
			});
		break;
		case 78:
			bot.sendMessage({
				to: channelID,
				message: "(Organic) machinery"
			});
		break;
		case 79:
			bot.sendMessage({
				to: channelID,
				message: "Overtly resist change"
			});
		break;
		case 80:
			bot.sendMessage({
				to: channelID,
				message: "Put in earplugs"
			});
		break;
		case 81:
			bot.sendMessage({
				to: channelID,
				message: "Remember those quiet evenings"
			});
		break;
		case 82:
			bot.sendMessage({
				to: channelID,
				message: "Remove ambiguities and convert to specifics"
			});
		break;
		case 83:
			bot.sendMessage({
				to: channelID,
				message: "Remove specifics and convert to ambiguities"
			});
		break;
		case 84:
			bot.sendMessage({
				to: channelID,
				message: "Repetition is a form of change"
			});
		break;
		case 85:
			bot.sendMessage({
				to: channelID,
				message: "Reverse"
			});
		break;
		case 86:
			bot.sendMessage({
				to: channelID,
				message: "Short circuit (example: a man eating peas with the idea that they will improve his virility shovels them straight into his lap)"
			});
		break;
		case 87:
			bot.sendMessage({
				to: channelID,
				message: "Simple subtraction"
			});
		break;
		case 88:
			bot.sendMessage({
				to: channelID,
				message: "Spectrum analysis"
			});
		break;
		case 89:
			bot.sendMessage({
				to: channelID,
				message: "Take a break"
			});
		break;
		case 90:
			bot.sendMessage({
				to: channelID,
				message: "Take away the elements in order of apparent non-importance"
			});
		break;
		case 91:
			bot.sendMessage({
				to: channelID,
				message: "Tape your mouth"
			});
		break;
		case 92:
			bot.sendMessage({
				to: channelID,
				message: "The inconsistency principle"
			});
		break;
		case 93:
			bot.sendMessage({
				to: channelID,
				message: "The tape is now the music"
			});
		break;
		case 94:
			bot.sendMessage({
				to: channelID,
				message: "Think of the radio"
			});
		break;
		case 95:
			bot.sendMessage({
				to: channelID,
				message: "Tidy up"
			});
		break;
		case 96:
			bot.sendMessage({
				to: channelID,
				message: "Trust in the you of now"
			});
		break;
		case 97:
			bot.sendMessage({
				to: channelID,
				message: "Turn it upside down"
			});
		break;
		case 98:
			bot.sendMessage({
				to: channelID,
				message: "Twist the spine"
			});
		break;
		case 99:
			bot.sendMessage({
				to: channelID,
				message: "Use an old idea"
			});
		break;
		case 100:
			bot.sendMessage({
				to: channelID,
				message: "Use an unacceptable color"
			});
		break;
		case 101:
			bot.sendMessage({
				to: channelID,
				message: "Use fewer notes"
			});
		break;
		case 102:
			bot.sendMessage({
				to: channelID,
				message: "Use filters"
			});
		break;
		case 103:
			bot.sendMessage({
				to: channelID,
				message: "Use `unqualified' people"
			});
		break;
		case 104:
			bot.sendMessage({
				to: channelID,
				message: "Water"
			});
		break;
		case 105:
			bot.sendMessage({
				to: channelID,
				message: "What are you really thinking about just now? Incorporate"
			});
		break;
		case 106:
			bot.sendMessage({
				to: channelID,
				message: "What is the reality of the situation?"
			});
		break;
		case 107:
			bot.sendMessage({
				to: channelID,
				message: "What mistakes did you make last time?"
			});
		break;
		case 108:
			bot.sendMessage({
				to: channelID,
				message: "What would your closest friend do?"
			});
		break;
		case 109:
			bot.sendMessage({
				to: channelID,
				message: "What wouldn't you do?"
			});
		break;
		case 110:
			bot.sendMessage({
				to: channelID,
				message: "Work at a different speed"
			});
		break;
		case 111:
			bot.sendMessage({
				to: channelID,
				message: "You are an engineer"
			});
		break;
		case 112:
			bot.sendMessage({
				to: channelID,
				message: "You can only make one dot at a time"
			});
		break;
		case 113:
			bot.sendMessage({
				to: channelID,
				message: "You don't have to be ashamed of using your own ideas"
			});
		break;
		case 114:
			bot.sendMessage({
				to: channelID,
				message: " "
			});
		break;
	}
}
});
//The getRandomInt function is used to generate a psuedorandom integer between two values.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

