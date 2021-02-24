module.exports = {
    name: 'Schedule',
    description: "Lets People Know you streaming schedule",
    execute(message, args){
        message.channel.send('Ben is Live Every Saturday and Sunday on Twitch at 7:30pm UK Time(type !twitch for the link');
        console.log('Facebook Command Executed');
    }
}