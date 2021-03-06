module.exports = {
    name: 'test',
    description: "Used to Test new features",
    execute(message, args){
        var name = 'Ben'
        message.channel.send('Hello ' + name);
        
    }
}