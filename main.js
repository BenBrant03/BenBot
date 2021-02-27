const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command =  require(`./commands/${file}`);

    client.commands.set(command.name , command);
};

client.once('ready', () => {
    console.log('BenBot Is Online!');
});
client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
    guildMember.roles.add(welcomeRole);
    console.log('New member given the member role');
    guildMember.guild.channels.cache.get(809550993506697226).send(`Welcome <@${guildMember.user.id}> to the LCFC Ben Server. Type !info to get all of the info on 
    on what goes on on this server. Enjoy and have a nice day`);
    console.log('Welcome message sent')
});
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }else if (command === 'youtube'){
        client.commands.get('youtube').execute(message, args);
    }else if (command === 'twitch'){
        client.commands.get('twitch').execute(message, args);
    }else if (command === 'facebook'){
        client.commands.get('facebook').execute(message, args);
    }else if (command === 'instagram'){
        client.commands.get('instagram').execute(message, args);
    }else if (command === 'schedule'){
        client.commands.get('schedule').execute(message, args);
    }else if(command ==='twitter'){
        client.commands.get('twitter').execute(message, args);
    }else if(command === 'email'){
        client.commands.get('email').execute(message, args)
    }
});

client.login('');//Add your own make sure this is blank before commmiting
