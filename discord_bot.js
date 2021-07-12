const Discord = require('discord.js')
const { captureRejectionSymbol } = require('events')
const { receiveMessageOnPort } = require('worker_threads')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as" + client.user.tag)
    client.user.setActivity("Youtube", { type: "WATCHING" })

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name)
        guild.channels.cache.forEach((channel) => {
            console.log(` ${channel.name} ${channel.type} ${channel.id}`)
        })
        //general text 810255359230607422

    })
    let generalChannel = client.channels.cache.get("810255359230607422")
    const attachment = new Discord.MessageAttachment("https://scontent.fymq3-1.fna.fbcdn.net/v/t1.15752-9/214457446_723985014996899_7683586240465704636_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=s46wUa2kweEAX--IFVz&_nc_oc=AQmdYKfV8ZzHyRYOewvgyv3JS7CZMB-Qgh2gEdq6WuDDrbtpwyAUWiBCaJ4pY5Lt11c&_nc_ht=scontent.fymq3-1.fna&oh=e013b52e1179c115eeed7eea73cf4e6e&oe=60F22D76")
    generalChannel.send(attachment)
})

client.on("message", (receiveMessage) => {
    if (receiveMessage.author == client.user) {
        return
    }
//     receiveMessage.channel.send("Message received: " + receiveMessage.author.toString() + receiveMessage.content) 
//    if(receiveMessage.content == "Sam is a cuck"){
//     receiveMessage.react("😀")
//    }
    
    if(receiveMessage.content.startsWith("!")) {
        processCommand(receiveMessage)
    }

    function processCommand(receivedMessage) {
        let fullCommand = receiveMessage.content.substr(1)
        let splitCommand = fullCommand.split(" ")
        let primaryCommand = splitCommand[0]
        let arguments = splitCommand.slice(1)

        if(primaryCommand == "help") {
            helpCommand(arguments, receiveMessage)
        } 
    }

    function helpCommand(arguments, receivedMessage) {
        if (arguments.length == 0 ){
            receiveMessage.channel.send("I'm not sure what you need help with. Try `!help [topic]`")
        } else {
            receiveMessage.channel.send("It looks like you need help with " + arguments)
        }
    }
})


client.login("ODYzOTE4MDc4Mjk0MzYwMDY0.YOt4aA.HOQcUl0SAiTxEonpDD_GaS3HDLc")