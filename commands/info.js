module.exports = {
    name: 'info',
    description: "Gives New users info about the server",
    execute(message, args){
        console.log('info message requested');
        //message.channel.send('This command is still being set up. Blame Ben')
        message.channel.send('Welcome to the LCFC Ben Discord Server. You should have now been setup with the member role. This means that you should now be able to see all of the channels. If this is not the case please @mod or @owner and we will do it mannually and look at what went wrong');
        message.channel.send("Firstly There are many channels on this server. The majority of them are pretty obvious what they are for. The first section that you see is the server stats. These chanels aren't for sending anything in they just looked good when I came up with this.");
        message.channel.send('The start line section is the section that you are currently in and features the welcome channel the rules channel and the Roles channel all of which are fairly self expalnitory');
        message.channel.send('After that you come to the text channels they are also pretty obvious what they are for');
        message.channel.send('Then You have the channel info channels and the Bens office section which i am currently trying to make really cool');
        message.channel.send('Any other questions feel free to message me or a mod');
        console.log('Message sent');

    }
}