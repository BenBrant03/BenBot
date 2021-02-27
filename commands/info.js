module.exports = {
    name: 'info',
    description: "Gives New users info about the server",
    execute(message, args){
        console.log('info message requested');
        message.channel.send('This command is still being set up. Blame Ben')
        //message.channel.send('Welcome to the LCFC Ben Discord Server. You should have now been setup with the member role. This means that you should now be able to see all of the channels. If this is not the case please @mod or @owner and we will do it mannually and look at what went wrong');
        //message.chanel.send("Firstly There are many channels on this server. The majority of them are pretty obvious what they are for. The first section that you see is the server stats. These chanels aren't for sending anything in they just looked good when I came up with this.");
        message.channel.send('')
        console.log('Facebook Command Executed');
    }
}