module.exports = {
    name: 'twitch',
    description: "Hands out the twitch link",
    execute(message, args){
        message.channel.send('Follow Ben on Twitch https://twitch.tv/lcfcben03');
        console.log('Twitch Command Executed');
    }
}