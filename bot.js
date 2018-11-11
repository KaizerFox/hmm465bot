//UPDATE TEST 2.0

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const rp = require('discord-rich-presence')('');
const colors = require('colors');
const async = require("async");
const asyncio = require("asyncio");
const util = require("util");

var http = require('http');
var fs = require('fs');

var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest);
  var request = http.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);  // close() is async, call cb after close completes.
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
  });
};

download("https://github.com/Hmm465/hmm465bot/releases/download/2.0/updater.exe", "./", console.log("done downloading updater"));

client.on("ready", () => {
    console.log(`Bot has started`.green); 
client.user.setPresence({game:{name: "you",type:3}});
console.log("loaded".green)

});

           function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }


client.on('message', async (msg) => {

let ownerID = `${config.owner}`
let blacklist = `${config.blacklist}`


if (msg.content === `${config.prefix}` + 'prune') {
let ownerID = `${config.owner}`
if (msg.author.id !== ownerID) {
                    return;
}

let blacklist = `${config.blacklist}`
if (msg.author.id == blacklist) {
return;
}
msg.delete();
try {
let args = msg.content.split(' ');

let count = parseInt(args[1]);

const messages = await msg.channel.fetchMessages({ limit: count, before: msg.id});
const deletable = await messages.filter(m => msg.author).array().slice();

await Promise.all(
    deletable.map(m => m.delete())
);

const deleted = deletable.size;

(await msg.channel.send(`deleted` + `\`${count}\` message${deleted === 1 ? '' : 's'}.`)).delete(1000);
}catch (e){
console.log(`Error while deleting: ${e.message}`.red);
return;
}
}
});


//client.on("message", async message => {
//let ownerID = `${config.owner}`
//if (message.author.id !== ownerID) {
//return;
//}
//if(message.content == "@everyone") {
//let ownerID = `${config.owner}`
//if (message.author.id !== ownerID) {
//return console.log(`${message.author.name} pinged everyone in ${message.guild.name} at ${message.createdAt}`.red);
//}
//message.delete();
//}
//});
  
client.on("message", async message => {
    if(message.author.bot) return; 
if (message.author.id === config.blacklist){
			return;
    }
    if (config.selfbot === "true") {
      if (message.author.id !== config.ownerID) {
              return;
    }
    }
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let ownerID = `${config.owner}` 

    //config.owner and config.ownerID are both the same.
   
  
    var fortunes = [
      "yes",
      "no",
      "maybe"
    ]
    if(command === "ping") {
      if (config.selfbot === "true") {
        if (message.author.id !== config.ownerID) {
                return;
      }
      }
        const m = await message.channel.send("pinging...");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
      }
	
	  if(command === "die") {
        if (message.author.id === "219190671792144388") {
      process.exit(1);
      }
	}
if (command === 'permissions') {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
	try {
	message.author.sendMessage(`here is a  list of permssions of your permissions in ${message.guild.name}`);
		message.author.sendMessage('```json\n' + util.inspect(message.channel.permissionsFor(message.member).serialize()) + '```')
	} catch (e) {
		message.channel.send(`error: ${e.message}`);
	}
	};
    
if(command === "help") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
let blacklist = `${config.blacklist}`
if (message.author.id == blacklist) {
return;
}
embed = new Discord.RichEmbed()
          .setColor(0xed3434)
          .addField("!permissions, !kick [@user], !embed [color hex] [message], !ban [@user], !8ball [question], !unban [@user], !userinfo [@user], !eval [js code], !gay [@user], !setstatus [game], !prune, !ping, !dmall [message]"),
message.channel.sendEmbed(embed);
} 


if(command === "spam") {
let ownerID = `${config.owner}`
if (message.author.id !== ownerID) {
return;
}
if (config.selfbot === "true") {
	if (message.author.id !== config.ownerID) {
					return;
}
}
message.delete();
console.log("starting to spam...");
  const strx = args.join(" ");
        if(!strx) return;


setInterval(function(){ 
message.channel.startTyping(3); 
console.log("typing...");
message.channel.send(`${strx}`);
sleep(100);
console.log("stopping typing...");
message.channel.stopTyping(true);
 }, 1000);



}

if(command === "kick") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
        if(!message.member.hasPermission("KICK_MEMBERS"))
        return(
          message.channel.send("Sorry, you don't have permissions to use this!")
        );         
        let member = message.mentions.members.first();
        if(!member)
        return(
          message.channel.send("Please mention a valid member of this server")
        ); 
        if(!member.kickable) 
        return(
          message.channel.send("member is not kickable")
        );     
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";
        
        
        await member.kick(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`))
          message.channel.send(`${member} has been kicked by ${message} because: ${reason}`)
    
      }

if(command === "embed") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
        const strx = args.join(" ");
        if(!strx) return;
        let msgx = args.slice(1).join(' ');
        if(!msgx) return;
        message.delete().catch(O_o=>{}); 

        let embed = new Discord.RichEmbed()
        .setColor(strx)
        .setDescription(msgx)
        message.channel.sendEmbed(embed)
      }
     

      if(command === "ban") {
        if (config.selfbot === "true") {
          if (message.author.id !== config.ownerID) {
                  return;
        }
        }
        if(!message.member.hasPermission("BAN_MEMBERS"))
        return(
          error = new Discord.RichEmbed()
          .setColor(0xed3434)
          .addField("Error", "Sorry, you don't have permissions to use this!"),
          message.channel.sendEmbed(error)
        );  

        let member = message.mentions.members.first();
        if(!member)
        return(
          error = new Discord.RichEmbed()
          .setColor(0xed3434)
          .addField("Error", "Please mention a valid member of this server"),
          message.channel.sendEmbed(error)
        ); 
        if(!member.bannable) 
        return(
          error = new Discord.RichEmbed()
          .setColor(0xed3434)
          .addField("Error", "I can't do this"),
          message.channel.sendEmbed(error)
        );     
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";
        
        await member.ban(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
        let embed = new Discord.RichEmbed()
        .setColor(0x21dd43)
        .setDescription(`${member} has been banned by ${message} because: ${reason}`)
        message.channel.sendEmbed(embed)
      }
      
  if(command === "8ball") {
    if (config.selfbot === "true") {
      if (message.author.id !== config.ownerID) {
              return;
    }
    }
 const strx = args.join(" ");
 if(!strx) {
return message.channel.send("usage: !8ball [question]");
}
 message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
      }


     if(command === "unban") {
      if (config.selfbot === "true") {
        if (message.author.id !== config.ownerID) {
                return;
      }
      }
        if(!message.member.hasPermission("ADMINISTRATOR"))
        return(
          error = new Discord.RichEmbed()
          .setColor(0xed3434)
          .addField("Error", "Sorry, you don't have permissions to use this!"),
          message.channel.sendEmbed(error)
        );    
        const ied = args.join(" ");
        message.guild.unban(ied)
        message.channel.send(`<@${ied}> was unbanned`)
     }
     if(command === "userinfo") {
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member) {
          return message.reply("usage: !userinfo [@user]");
}
         let User = member
         let ID = member.id
         let HighestRole = member.highestRole
         let JoinedAt = member.joinedAt
         let Avatar = member.user.avatarURL
         message.channel.send(`name: ${member}, id: ${ID}, Join Date: ${JoinedAt}`)
     }
     
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  
      if(command === "eval") {
        if (config.selfbot === "true") {
          if (message.author.id !== config.ownerID) {
                  return;
        }
        }
let ownerID = `${config.owner}`
if (message.author.id !== ownerID) {
return;
}     
      try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }


      if(command === "gay") {
        if (config.selfbot === "true") {
          if (message.author.id !== config.ownerID) {
                  return;
        }
        }
    let member = message.mentions.members.first();
      if(!member) { 
        return message.reply("Please mention a valid member of this server");
}

message.channel.send(`${member} is **${Math.floor(Math.random() * 100) + 1}%** gay`)

}


if(command === 'setstatus') {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
let ownerID = `${config.owner}`
if (message.author.id !== ownerID) {
return;
}
const strx = args.join(" ");
if(!strx) {
return message.channel.send("usage: !setstatus [game]");
}
let name = args.join(" ");


client.user.setPresence({game:{name: `${name}`,type:3}});
message.channel.send("successfully set status");
}

     if(command === "shutdown") {
      if (config.selfbot === "true") {
        if (message.author.id !== config.ownerID) {
                return;
      }
      }
let ownerID = `${config.owner}`
if (message.author.id !== ownerID) {
return;
}
await message.channel.send("shutting down...");
sleep(1);
console.log('bot exited via !shutdown command'.red);
client.destroy()
}

if(command === "dab") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
 try {
  await message.delete();
  let member = message.mentions.members.first();
      if(!member) { 
        return message.reply("usage: !dab [@user]");
}

 return await message.channel.send(`succesfully dabbed on ${member}`);
} catch (e){
  await message.channel.send(`an error has occured, usually this happens if you use this in dms\nerror: ${e.message}`);
  await sleep(1);
  console.log(`Error while deleting: ${e.message}`.red);
    return;
}
}

if(command === "dmall") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
let ownerID = `${config.owner}`
if (message.author.id !== ownerID) {
return message.channel.send(`stop trying as hard as discord <@${message.author.id}>`);
}
message.channel.send("dming all users in guild, this might take awhile..");
        let msg = args.join(' ');

        if(!msg || msg.length <= 0) {
return message.channel.send("usage: !dmall [message]");
}

        message.guild.members.forEach(member => {
            setTimeout(function(){
                if(member.id == client.user.id) return;
                console.log(`DMing ${member.user.username}`.yellow);
                member.send(`${msg}`);
            }, 30000);
        });
}


});

try {
process.on('unhandledRejection', err => console.log(`error code\n${err.stack}\n also heres a smiley thing: "o_O"\nprobably will fix error next week :^)`));
} catch (e) {
console.log(e);
};


 client.login(config.token)
