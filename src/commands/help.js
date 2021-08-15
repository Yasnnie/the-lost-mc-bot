const embed = require('discord.js');
const execute = (client,msg,args) =>
{


    var msghelp = new embed.MessageEmbed()
    .setColor('#0000')
    .setTitle('░░░░░░░░░░░░░  COMANDOS:  ░░░░░░░░░░░░░')

    client.commands.forEach((command) => {
        if(command.help)
        {
            msghelp.addFields({name :`Comando:  ${command.name} `, value:`Função:  ${command.help}`, inline:false});

            
        }
    });

    return msg.channel.send(msghelp);
};

module.exports = {
    name: "help",
    help: "Mostra todos os comandos \n\n --------------------------------------------------------------",
    execute,
}