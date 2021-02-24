module.exports = {
    name: 'twitter',
    description: "Hands Out Yours and The Bots Twitter Link",
    execute(message, args){
        message.channel.send('Follow Ben on Twitter https://twitter.com/lcfc_podcast  And follow me on twitter for updates on this bot!');
        console.log('Twitter Command Executed');
    }
}