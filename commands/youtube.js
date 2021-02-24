module.exports = {
    name: 'youtube',
    description: "Hands Out your youtube link",
    execute(message, args){
        message.channel.send('Subscribe to Ben on Youtube https://youtube.com/c/lcfcben');
        console.log('Youtube Command Executed');
    }
}