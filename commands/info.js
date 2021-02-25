module.exports = {
    name: 'info',
    description: "Gives New users info about the server",
    execute(message, args){
        message.channel.send('Like Us On Facebook https://facebook.com/lcfcben');
        console.log('Facebook Command Executed');
    }
}