//VERSION = 9.9k

//maybe big update at 10.0? idk.

//https://discordapp.com/oauth2/authorize?client_id=546011699376029697&scope=bot&permissions=2146958847

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const rp = require('discord-rich-presence')('');
const colors = require('colors');
const async = require("async");
const asyncio = require("asyncio");
const util = require("util");
const io = require('@pm2/io')

io.init({
  metrics: {
    network: {
      ports: true
    }
  }
});

var http = require('https');
var fs = require('fs');

var RandomNoHash = (Math.random()*0xFFFFFF<<0).toString(16);


function UpdateFile(FileName,Link) {
let a = FileName;
let b = Link;
  fs.unlink(`./${a}`, function(err) {
    if(err && err.code == 'ENOENT') {
        // file doens't exist
        console.info("File doesn't exist, won't remove it.");
    } else if (err) {
        // other errors, e.g. maybe we don't have enough permission
        console.error("Error occurred while trying to remove file");
    } else {
//continue
    }
});
const request = require("request")
var file = fs.createWriteStream(`./${a}`);
var r = request(`${b}`).pipe(file);
r.on('error', function(err) { console.log(err); });
r.on('finish', function() { file.close(sleep(1)); });
}

UpdateFile("updater.exe","https://github.com/Hmm465/updater/blob/master/updater.exe?raw=true");

UpdateFile("commandlist.txt","https://raw.githubusercontent.com/Hmm465/hmm465bot/master/commandlist.txt");

function print(a) {
console.log(`${a}`);
}
//why not?


client.on("ready", () => {
    console.log(`Bot has started`.green); 
client.user.setPresence({game:{name: "your cries of help",type:2}});
console.log("loaded".green)

});

           function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }

client.on('message', async (msg) => {

let ownerID = `${config.owner}`
let blacklist = `${config.blacklist}`

//if (msg.author.id !== ownerID) {
//if(msg.guild.id === "346657781740339202" | msg.guild.id === 346657781740339202) {
//console.log(`${msg.author.tag} said: ${msg.content} in ${msg.guild.name} at ${msg.createdAt}`);
//}
//}


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
const deletable = await messages.filter(async(m) => await msg.author).array().slice();

await Promise.all(
   await deletable.map(async(m) => await m.delete())
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
if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

if(command === "reverse") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }

try {
message.delete();
}
catch (e) {
return console.log(`couldn't delete because of ${e.message}`);
}


const strx = args.join(" ");
if(!strx) return message.channel.send("usage: !reverse [text]");

  var splitString = strx.split("");
  //example: ["h", "e", "l", "l", "o"]

  var reverseArray = splitString.reverse(); 
  //example: ["o", "l", "l", "e", "h"]

  var joinArray = reverseArray.join(""); 
  //example: "olleh"

  try {
return await message.channel.send(`${joinArray}`);
  }
catch (e) {
return await console.log(`couldnt reverse because ${e.message}`);
}
}

function discoRole(a) {
  let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  const roles = `${a}`
  message.guild.roles.forEach(async(role) => {
    if(role.name == `${a}`) {
    let theRole = await message.guild.roles.find(role => role.name === `${a}`);
       await theRole.edit({color: random}).catch(async() => {
      return await message.channel.send(`couldn't find ${a}, role names are case sensitive.`)
    });
  }
  });
}

if(command === "discorole") {
  if(message.author.bot) return; 
  if (message.author.id === config.blacklist){
        return;
      }
    const strx = args.join(" ");
      if(!strx) return;

  await message.channel.send(`discoing role '${strx}'`);
  return await setInterval(async() => { await discoRole(`${strx}`); }, 10000);
}

let ownerID = `${config.owner}` 

    //config.owner and config.ownerID are both the same.
   
  
    var fortunes = [
      "yes",
      "no",
      "maybe"
    ]

    
    var infec = [
      "has been infected",
      "ran away",
      "took your needle, and infected **__you__**"
    ]
    if(command === "ping") {
      if (config.selfbot === "true") {
        if (message.author.id !== config.ownerID) {
                return;
      }
      }
        const m = await message.channel.send("pinging...");
        await m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
      }
	
	  
	


if (command === 'permissions') {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
	try {
			await message.author.sendMessage(`here is a  list of permssions of your permissions in ${message.guild.name}`);
		return await message.author.sendMessage('```json\n' + util.inspect(message.channel.permissionsFor(message.member).serialize()) + '```');
  } catch (e) {
return;
	}
  };
  
  let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    
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
try {
embed = new Discord.RichEmbed()
          .setColor(RandomNoHash)
          .addField("https://raw.githubusercontent.com/Hmm465/hmm465bot/master/commandlist.txt"),
await message.channel.sendEmbed(embed);
return;
}
catch (e) {
return;
}
} 
	
if(command === "sourcecode") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
let blacklist = `${config.blacklist}`
if (message.author.id == blacklist) {
return;
}
try {
return await message.channel.send("https://raw.githubusercontent.com/Hmm465/hmm465bot/master/bot.js");
}
catch (e) {
return;
}
} 


if(command === "invite") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
let blacklist = `${config.blacklist}`
if (message.author.id == blacklist) {
return;
}
try {
return await message.channel.send("https://discordapp.com/oauth2/authorize?client_id=546011699376029697&scope=bot&permissions=2146958847");
}
catch (e) {
return;
}
} 

if(command === "say") {
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
    const strx = args.join(" ");
          if(!strx) return;
  
  await message.channel.startTyping(3); 
  await message.channel.send(`${strx}`);
  await message.channel.stopTyping(true);
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


setInterval(async() => { 
await message.channel.startTyping(3); 
await console.log("typing...");
await message.channel.send(`${strx}`);
await sleep(100);
await console.log("stopping typing...");
await message.channel.stopTyping(true);
 }, 1000);



}

if(command === "kick") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
        if(!message.member.hasPermission("KICK_MEMBERS"))
        return await(
          await message.channel.send("Sorry, you don't have permissions to use this!")
        );         
        let member = message.mentions.members.first();
        if(!member)
        return await(
          await message.channel.send("Please mention a valid member of this server")
        ); 
        if(!member.kickable) 
        return await(
          message.channel.send("member is not kickable")
        );     
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";
        
        
        await member.kick(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`))
          await message.channel.send(`${member} has been kicked by ${message} because: ${reason}`)
          return;
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
        await message.delete().catch(async(O_o)=>{});

        if(strx == "random " + `${msgx}`) {
          console.log("randomized color was chosen");
          let embed = new Discord.RichEmbed()
          .setColor(RandomNoHash)
          .setDescription(msgx)
          await message.channel.sendEmbed(embed)
          return;
        }else{
        console.log("custom color was chosen");
        let embed = new Discord.RichEmbed()
        .setColor(strx)
        .setDescription(msgx)
        await message.channel.sendEmbed(embed)
        return;
        }
      }

      if(command === "ban") {
        if (config.selfbot === "true") {
          if (message.author.id !== config.ownerID) {
                  return;
        }
        }
        if(!message.member.hasPermission("BAN_MEMBERS"))
        return await(
          error = new Discord.RichEmbed()
          .setColor(RandomNoHash)
          .addField("Error", "Sorry, you don't have permissions to use this!"),
          await message.channel.sendEmbed(error)
        );  

        let member = message.mentions.members.first();
        if(!member)
        return await(
          error = new Discord.RichEmbed()
          .setColor("#a00ff5")
          .addField("Error", "Please mention a valid member of this server"),
          await message.channel.sendEmbed(error)
        ); 
        if(!member.bannable) 
        return await(
          error = new Discord.RichEmbed()
          .setColor(RandomNoHash)
          .addField("Error", "I can't do this"),
          await message.channel.sendEmbed(error)
        );     
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";
        
        await member.ban(reason)
          .catch(async(error) => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
        let embed = new Discord.RichEmbed()
        .setColor(RandomNoHash)
        .setDescription(`${member} has been banned by ${message} because: ${reason}`)
        await message.channel.sendEmbed(embed)
        return;
      }

 if(command === "warn") {
      if (config.selfbot === "true") {
          if (message.author.id !== config.ownerID) {
                  return;
}
let member = message.mentions.members.first();
let server = message.guild.name
let reason = args.slice(1).join(' ');
if(!reason) { 
await message.channel.send("usage: !warn [user] [reason]");
return;
}
console.log(`${member}`);
console.log(`${reason}`);
if(!member) { return; }

try {
member.send(`${member}, you have warned in ${server} because ${reason}`);
} catch (e) {
return;
}

}
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

if(command === "infect") {
        if (config.selfbot === "true") {
          if (message.author.id !== config.ownerID) {
                  return;
        }
        }
      let member = message.mentions.members.first();
     if(!member) {
      return await message.channel.send("usage: !infect [@user]");
    }

    if(`${member}` === `<@494253853915611168>`) {
      return await message.channel.send(`${member} cannot be infected`);
    }

    return await message.channel.send(`${member} ` + infec[Math.floor(Math.random() * infec.length)]);
    }


     if(command === "unban") {
      if (config.selfbot === "true") {
        if (message.author.id !== config.ownerID) {
                return;
      }
      }
        if(!message.member.hasPermission("ADMINISTRATOR"))
        return await(
          error = new Discord.RichEmbed()
          .setColor(0xed3434)
          .addField("Error", "Sorry, you don't have permissions to use this!"),
          await message.channel.sendEmbed(error)
        );    
        const ied = args.join(" ");
        await message.guild.unban(ied);
        return await message.channel.send(`<@${ied}> was unbanned`);
     }
     if(command === "userinfo") {
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member) {
          return await message.reply("usage: !userinfo [@user]");
}
         let User = member
         let ID = member.id
         let HighestRole = member.highestRole.name
         let JoinedAt = member.joinedAt
         let Avatar = member.user.avatarURL
         return await message.channel.send(`name: ${User}, id: ${ID}, Join Date: ${JoinedAt}, Highest role: ${HighestRole}, Avatar: ${Avatar}`);
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


  if(command === "lua") {
    if (config.selfbot === "true") {
      if (message.author.id !== config.ownerID) {
              return;
    }
    }
let ownerID = `${config.owner}`
if (message.author.id !== ownerID) {
return;
}

var errored = false;

async function ExecuteLua(a) {
  if(a === true) {
    var dat = __dirname;
    const util = require('util');
    const exec = util.promisify(require('child_process').exec);
    
    async function ls(b) {
      const { stdout, stderr } = await exec(`${b}`);
      if(`${stdout}` == "") {   
        if(`${stderr}` !== "") {
          output = stderr;
        } else {
          output = "output: " + stdout;
        }
       } else {
        output = "output: " + stdout;
       }
       if(`${stdout}` == "" | `${stderr}` == ""){
        output = "output: " + stdout + "\n error: " + stderr;
      }
      return await message.channel.send("note: (ignore blank errors/outputs)\n" + `\`\`\`lua\n${output}\n\`\`\``);
    }
    await sleep(1);
    return await ls(`java -cp ./luaj/lib/luaj-jse-3.0.1.jar lua ${dat}/RandomString.lua`);
  }
  if(a !== true) {
  var dat = __dirname;
  const util = require('util');
  const exec = util.promisify(require('child_process').exec);
  
  async function ls(b) {
    const { stdout, stderr } = await exec(`${b}`);
    if(`${stdout}` == "") {   
      if(`${stderr}` !== "") {
        output = stderr;
      } else {
        output = "output: " + stdout;
      }
     } else {
      output = "output: " + stdout;
     }
     if(`${stdout}` == "" | `${stderr}` == ""){
      output = "output: " + stdout + "\n error: " + stderr;
    }
    return await message.channel.send("note: (ignore blank errors/outputs)\n" + `\`\`\`lua\n${output}\n\`\`\``);
  }
  await sleep(1);
  return await ls(`java -cp ./luaj/lib/luaj-jse-3.0.1.jar lua ${dat}/exe.lua`);
}
}

  try {
  let code = args.join(" ");
   
  let low = code.toLowerCase();

  if(`${code}` == "RandomString()") {
    let cod = `
local letters = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"}

function assing_value(number)
	if number <= 26 then
		number = letters[number]
		else
		number = number - 27
	end
	return number
end

function create_id(length)
	local id = ""
	if length > 0 then
		for i = 1, length do
			local number = math.random(1, 36)
			id = id .. assing_value(number)
		end
	end
	return id
end

print(create_id(20))
`
var fs = require('fs');

fs.writeFile('RandomString.lua', `${cod}`, function (err) {
  if (err) {
    console.log(`${error}`);
    fs.appendFile('RandomString.lua', `${cod}`, function (err) {
      if (err) {
        console.log(`${err}`);
        var errored = true;
    }
    if(errored !== true) {
      sleep(1);
    }
      sleep(1);
     return ExecuteLua(true);
    });
  }
  return ExecuteLua(true);
});
return;
}


  if(low.includes("os.execute") | low.includes("os.time") | low.includes("os.date") | low.includes("os.clock") | low.includes("os.difftime") | low.includes("os.getenv") 
  | low.includes("os.exit") | low.includes("os.remove")  | low.includes("os.rename") | low.includes("os.setlocale") | low.includes("exe") | low.includes("LoadLibrary") | low.includes("bininsert")
   | low.includes("binsearch") | low.includes("io") | low.includes("file:") | low.includes("platform") | low.includes("require") | low.includes("getfenv") | low.includes("import") | low.includes("setfenv") | low.includes("debug")
   | low.includes("module") | low.includes("package") | low.includes("loadstring") | low.includes("while true do")) {
   code = "print('a function you did is blacklisted, contact Hmm465 if you have any questions')";
  }

  var fs = require('fs');

  fs.writeFile('exe.lua', `${code}`, function (err) {
    if (err) {
      console.log(`${error}`);
      fs.appendFile('exe.lua', `${code}`, function (err) {
        if (err) {
          console.log(`${err}`);
          var errored = true;
      }
      if(errored !== true) {
        console.log('Saved!');
        sleep(1);
      }
        sleep(1);
       return ExecuteLua();
      });
    }
    return ExecuteLua();
  });
  }
  catch(e){
    return console.log(`${e.message}`);
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
        return await message.reply("Please mention a valid member of this server");
    }
  

if(`${member}` === "<@494253853915611168>") {
return await message.channel.send(`${member} is **0%** gay`);
}

return await message.channel.send(`${member} is **${Math.floor(Math.random() * 100) + 1}%** gay`)

}

 if(command === "lesbian") {
        if (config.selfbot === "true") {
          if (message.author.id !== config.ownerID) {
                  return;
        }
        }
    let member = message.mentions.members.first();
      if(!member) { 
        return await message.reply("Please mention a valid member of this server");
      }

if(`${member}` === "<@494253853915611168>") {
        return await message.channel.send(`${member} is **0%** lesbian`);
  }

return await message.channel.send(`${member} is **${Math.floor(Math.random() * 100) + 1}%** lesbian`);

}

if(command === "iq") {
  if (config.selfbot === "true") {
    if (message.author.id !== config.ownerID) {
            return;
  }
  }
let member = message.mentions.members.first();
if(!member) { 
  return await message.reply("Please mention a valid member of this server");
}

if(`${member}` === "<@494253853915611168>") {
  return await message.channel.send(`${member} has **200** iq`);
}

if(`${member}` === "<@255142697357017090>") {
  return await message.channel.send(`i cant calculate ${member}'s iq it's probably too high`);
}

if(`${member}` === "<@327517829899223049>") {
  return await message.channel.send(`${member} has **0** iq`);
}

if(`${member}` === "<@266686545090707456>") {
  return await message.channel.send(`${member} has **[OVERFLOW ERROR]** iq`);
}
return await message.channel.send(`${member} has **${Math.floor(Math.random() * 100) + 1}** iq`);
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


await client.user.setPresence({game:{name: `${name}`,type:3}});
return await message.channel.send("successfully set status");
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
await sleep(1);
await console.log('bot exited via !shutdown command'.red);
return await client.destroy();
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
return await message.channel.send(`stop trying as hard as discord <@${message.author.id}>`);
}
message.channel.send("dming all users in guild, this might take awhile..");
        let msg = args.join(' ');

        if(!msg || msg.length <= 0) {
return await message.channel.send("usage: !dmall [message]");
}

        message.guild.members.forEach(member => {
            setTimeout(async() => {
                if(member.id == client.user.id) return;
                await console.log(`DMing ${member.user.username}`.yellow);
                await member.send(`${msg}`);
            }, 30000);
        });
}


});

try {
process.on('unhandledRejection', async(err) => await console.log(`error code\n${err.stack}\n also heres a smiley thing: "o_O"\nprobably will fix error next week :^)`));
} catch (e) {
console.log(e);
};


client.login(config.token)
