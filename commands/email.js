module.exports = {
    name: 'email',
    description: "gives out my email to mods only",
    execute(message, args){
        if(message.member.roles.cache.has('793599248130113547')){
            message.channel.send('If you need to get in contact with Ben the email to use is lcfcbenpodcast@gmail.com')
            console.log('Email Activated by Mod')
        }else if(message.member.roles.cache.has('793599009600045057')){
            message.channel.send('If you need to get in contact with Ben the email to use is lcfcbenpodcast@gmail.com')
            console.log('Email Activated by Owner')
        }else if(message.member.roles.cache.has('793599122845466624')){
            message.channel.send('If you need to get in contact with Ben the email to use is lcfcbenpodcast@gmail.com')
            console.log('Email Activated by Admin')
        }else{
            message.channel.send("You dont have the permissions for that info ask a mod for help")
            console.log('Member Tried to Activate email but was rejected')
        }

    }
}