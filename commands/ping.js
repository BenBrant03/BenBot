module.exports = {
    name: 'ping',
    description: "Replies Pong!",
    execute(message, args){
        message.channel.send('Pong');
    }
}