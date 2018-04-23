const Discord = require('./node_modules/discord');
const client = new Discord.Client();
const config = require("./config.json");
const util = require('util');

function output(error, token) {
	if (error)
		console.log(`hmm465 bot could not start up`);

	else
		console.log(`hmm465 bot has started up`);

}
client.login(config.token, output);

client.on('ready', () => {
        client.user.setActivity('say !cmds');
});

client.on('message', message => {
if (!message.content.startsWith(config.prefix)) return; // if the message doesn't contain PREFIX (*), then ignore
	if (message.author.bot) return;
const prefix = "!";
	if (message.content.toLowerCase().substring(0, prefix.length) !== prefix && message.content)
		return;


	let args = message.content.split(' ');
	let command = args[0];
	command = command.slice(prefix.length).toLowerCase();
	args = args.slice(1);

	if (command === 'spam') {
		if (message.author.id !== config.ownerID) {
					message.channel.send("sorry, only Hmm465 can do this command, cause this can kill his internet")
					return;
					}
		if (message.author.id === config.blacklist){
			message.channel.send("you are blacklisted from using any commands :^)")
			return;
		}
		if (message.author.id === config.blacklist2){
			message.channel.send("you are blacklisted from using any commands :^)")
			return;
		}
	const sayMessage = args.join(' ');
		try{
			message.delete();
			var i = 99;
			while (true)
			{
			  message.channel.send((sayMessage));
			    i -= 1;
			    if (i == 0)
			    {
			      return i= 99;
			    }
			}
		}catch (e){
		return;
		};

	};

	if (command === 'reportissue') {
		if (message.author.id === config.blacklist){
			message.channel.send("you are blacklisted from using any commands :^)")
			return;
		}
		if (message.author.id === config.blacklist2){
			message.channel.send("you are blacklisted from using any commands :^)")
			return;
		}
	message.channel.send(`check out issuse format here: https://github.com/Hmm465GamingYT/hmm465bot/issues/1`);
	message.channel.send(`when you are done report the issue here: https://github.com/Hmm465GamingYT/hmm465bot/issues/new`);
	}

if (command === 'say') {
	if (message.author.id === config.blacklist){
		message.channel.send("you are blacklisted from using any commands :^)")
		return;
	}
	if (message.author.id === config.blacklist2){
		message.channel.send("you are blacklisted from using any commands :^)")
		return;
	}
const sayMessage = args.join(' ');
	try{
		message.delete();
		message.channel.send((sayMessage));
	}catch (e){
		message.channel.send(`error: ${e.message}`);
	}
};
if (command === 'permissions') {
		if (message.author.id === config.blacklist){
			message.channel.send("you are blacklisted from using any commands :^)")
			return;
		}
		if (message.author.id === config.blacklist2){
			message.channel.send("you are blacklisted from using any commands :^)")
			return;
		}
	try {
	message.author.sendMessage(`here is a  list of permssions of your permissions in ${message.guild.name}`);
		message.author.sendMessage('```json\n' + util.inspect(message.channel.permissionsFor(message.member).serialize()) + '```')
	} catch (e) {
		message.channel.send(`error: ${e.message}`);
	}
	};
	if (command === "ping") {
		function ping(){
	return Math.floor(client.ping)
		}
message.channel.send(`ping: `+ ping() + ' Mbps');
}
	if (command === 'eval') {
if (message.author.id !== config.ownerID) {
					message.channel.send("sorry, a smart person could get my password/token\n with this command, so only hmm465 can use it")
					return;
					}

		if (message.author.id === config.blacklist){
			message.channel.send("you are blacklisted from using any commands :^)")
			return;
		}
		if (message.author.id === config.blacklist2){
			message.channel.send("you are blacklisted from using any commands :^)")
			return;
		}

		try {
message.channel.send(eval(args.join(' ')), { code: 'js' })
		} catch (e) {
			message.channel.send(`Error while evaluating: ${e.message}`);
		}
	}
if (command === 'cmds') {
	if (message.author.id === config.blacklist){
		message.channel.send("you are blacklisted from using any commands :^)")
		return;
	}
	if (message.author.id === config.blacklist2){
		message.channel.send("you are blacklisted from using any commands :^)")
		return;
	}
	message.channel.send("!say (message), !spam (message), !permissions, !eval (javascript code), !cmds, !randomnumber, !ping, !reportissue, !addbot, !die");
}


if (command === 'randomnumber') {
	if (message.author.id === config.blacklist){
		message.channel.send("you are blacklisted from using any commands :^)")
		return;
	}
	if (message.author.id === config.blacklist2){
		message.channel.send("you are blacklisted from using any commands :^)")
		return;
	}
	function getRndInteger(min, max) {
	    return Math.floor(Math.random() * (max - min + Math.random()) ) + min;
	}
message.channel.send(getRndInteger(Math.random(), Math.random()))
};

if (command === 'addbot') {
	if (message.author.id === config.blacklist){
		message.channel.send("you are blacklisted from using any commands :^)")
		return;
	}
	if (message.author.id === config.blacklist2){
		message.channel.send("you are blacklisted from using any commands :^)")
		return;
	}
message.channel.send(`keep all the permissions as is:\nhttps://discordapp.com/oauth2/authorize?client_id=428334127339798529&scope=bot&permissions=8`); // sends a message saying he was kicked
}

if (command === 'die') {
	if (message.author.id !== config.ownerID) {
				message.channel.send("no")
				return;
				}
	if (message.author.id === config.blacklist){
		message.channel.send("you are blacklisted from using any commands :^)")
		return;
	}
	if (message.author.id === config.blacklist2){
		message.channel.send("you are blacklisted from using any commands :^)")
		return;
	}
message.channel.send("k, shuting down bot")
	client.destroy((err) => {
	        console.log(err);
});
};

});

try {
process.on('unhandledRejection', err => console.log(`error code\n${err.stack}\n also heres a smiley thing: "o_O"\nprobably will fix error next week :^)`));
} catch (e) {
console.log(e);
};

try {
process.on('ERR_UNHANDLED_ERROR', err => console.log(`just magicly ignore that k thx bye`));
} catch (e) {
console.log(e);
};
