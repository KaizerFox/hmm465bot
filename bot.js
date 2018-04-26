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

console.log(`the bots prefix is ${config.prefix}`)

});

client.on('message', async (msg) => {
if (msg.content === `${config.prefix}` + 'purge') {
try {
let args = msg.content.split(' ');

let count = parseInt(args[0]) || 1;

msg.delete();

const messages = await msg.channel.fetchMessages({ limit: Math.min(count, 100), before: msg.id});
const deletable = await messages.filter(m => m.author.id === client.user ? client.user.id : client.user.id).array().slice(0, count);

await Promise.all(
    deletable.map(m => m.delete())
);

const deleted = deletable.size;

(await msg.channel.send(`:white_check_mark: \`${deletable.size}\` message${deleted === 1 ? '' : 's'}.`)).delete(1000);
}catch (e){
msg.channel.send(`Error while deleting: ${e.message}`, { code: 'css' });
return;
}
}
});

client.on('message', message => {
if (!message.content.startsWith(config.prefix)) return; // if the message doesn't contain PREFIX (*), then ignore
	if (message.author.bot) return;
const prefix = `${config.prefix}`;
	if (message.content.toLowerCase().substring(0, prefix.length) !== prefix && message.content)
		return;


	let args = message.content.split(' ');
	let command = args[0];
	command = command.slice(prefix.length).toLowerCase();
	args = args.slice(1);

  function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
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
message.channel.send((sayMessage));
};

if (command === 'spam') {
	if (message.author.id !== config.ownerID) {
		message.channel.send("owner only command")
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
	
if (command === "ping") {
		function ping(){
	return Math.floor(client.ping)
		}
message.delete()
message.channel.send(`ping: `+ ping() + ' milliseconds');
}
	if (command === 'eval') {
	if (message.author.id !== config.ownerID) {
		message.channel.send("owner only command")
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
			message.channel.send(`Error while evaluating: ${e.message}`, { code: 'css' });
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
  message.delete();
message.channel.send(">> !say (message), !eval (javascript code), !cmds, !randomnumber, !ping, !nou, !spam (message), !purge");
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
  message.delete();
message.channel.send(getRndInteger(Math.random(), Math.random()))
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
