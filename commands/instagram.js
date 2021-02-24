module.exports = {
    name: 'Instagram',
    description: "Hands Out your Instagram link",
    execute(message, args){
        message.channel.send('Follow Ben on Instagram https://www.instagram.com/lcfcben03/');
        console.log('Instagram Command Executed');
    }
}