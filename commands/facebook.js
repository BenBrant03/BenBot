module.exports = {
    name: 'Facebook',
    description: "Hands Out your Facebook Page Link",
    execute(message, args){
        message.channel.send('Like Us On Facebook https://facebook.com/lcfcben');
        console.log('Facebook Command Executed');
    }
}