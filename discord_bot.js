const Discord = require('discord.js')
const { captureRejectionSymbol } = require('events')
const client = new Discord.Client()

client.on('ready', ()=> {
    console.log("Connected as" + client.user.tag)
    client.user.setActivity("Youtube", {type: "WATCHING"})

    client.guilds.cache.forEach((guild)=> {
        console.log(guild.name)
        guild.channels.cache.forEach((channel) => {
            console.log(` ${channel.name} ${channel.type} ${channel.id}`)
        })
        //general text 810255359230607422

    })
    let generalChannel = client.channels.cache.get("810255359230607422")
    generalChannel.send("Sam is a cuck")
})


client.login("ODYzOTE4MDc4Mjk0MzYwMDY0.YOt4aA.HOQcUl0SAiTxEonpDD_GaS3HDLc")