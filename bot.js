const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const rp = require('discord-rich-presence')('');

client.on("ready", () => {
    console.log(`Bot has started`); 
console.log("loaded")

});

           function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }

client.on('message', async (msg) => {

let ownerID = `${client.user.id}`

if (msg.content === `${config.prefix}` + 'prune') {
let ownerID = `${client.user.id}`
if (msg.author.id !== ownerID) {
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
console.log(`Error while deleting: ${e.message}`);
return;
}
}
});
  
client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let ownerID = `${client.user.id}`
   
  
    var fortunes = [
      "yes",
      "no",
      "maybe",
      ":thinking:"
    ]
    if(command === "connectionspeed") {
let ownerID = `${client.user.id}`
if (message.author.id !== ownerID) {
return;
}
        const m = await message.channel.send("pinging...");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
      }

if(command === "help") {
let ownerID = `${client.user.id}`
if (message.author.id !== ownerID) {
return;
}
embed = new Discord.RichEmbed()
          .setColor(0xed3434)
          .addField("!kick [user], !embed [color hex] [message], !ban [user], !8ball [question], !unban [user], !userinfo [user], !eval [js code], !gay [user], !setstatus [game]"),
message.channel.sendEmbed(embed);
} 

if(command === "kick") {
let ownerID = `${client.user.id}`
if (message.author.id !== ownerID) {
return;
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
let ownerID = `${client.user.id}`
if (message.author.id !== ownerID) {
return;
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
let ownerID = `${client.user.id}`
if (message.author.id !== ownerID) {
return;
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
let ownerID = `${client.user.id}`
if (message.author.id !== ownerID) {
return;
}
 const strx = args.join(" ");
 if(!strx) {
return message.channel.send("usage: !8ball [question]");
}
 message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
      }


     if(command === "unban") {
let ownerID = `${client.user.id}`
if (message.author.id !== ownerID) {
return;
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
let ownerID = `${client.user.id}`
if (message.author.id !== ownerID) {
return;
}
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member) {
          return message.reply("Please mention a valid member of this server");
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
let ownerID = `${client.user.id}`
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
let ownerID = `${client.user.id}`
if (message.author.id !== ownerID) {
return;
}
    let member = message.mentions.members.first();
      if(!member) { 
        return message.reply("Please mention a valid member of this server");
}

message.channel.send(`${member} is **${Math.floor(Math.random() * 100) + 1}%** gay`)

}


if(command === 'setstatus') {
let ownerID = `${client.user.id}`
if (message.author.id !== ownerID) {
return;
}
const strx = args.join(" ");
if(!strx) {
return message.channel.send("usage: !setstatus [game]");
}
let name = args.join(" ");


client.user.setPresence({game: {name: `${name}`}, status:"dnd"});
message.channel.send("successfully set status");
}

     if(command === "shutdown") {
let ownerID = `${client.user.id}`
if (message.author.id !== ownerID) {
return;
}
message.channel.send("shutting down...")

process.exit(3);
}


});

 client.login(config.token)