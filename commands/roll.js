module.exports.run = async (bot, message, args) => {
if (message.content.indexOf(process.env.PREFIX) !== 0) return; 

let roll = [
"1",
"2",
"3",
"4",
"5",
"6",
]

let rAnswer = roll[Math.floor(Math.random() * roll.length)]

message.channel.send("You Rolled A", + rAnswer)
}

module.exports.help = {
name: "roll"
}
