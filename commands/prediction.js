module.exports = {
    name: 'prediction',
    description: "Gives the user a score prediction",
    execute(message, args){
        var score1 = Math.floor((Math.random() * 5) + 0);
        var score2 = Math.floor((Math.random()* 5) + 0);
        if (score1 === score2){
            var outcome = 'Draw';
        }else{
            var outcome = 'Win';
        }
        message.channel.send('I sense a ' + score1 + '-' + score2 + ' ' + outcome);
        console.log('prediction command executed')
    }
}