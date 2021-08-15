const embed = require('discord.js');


const execute = (client, msg, args) => 
{
    var text ="Itens que estão no baú: \n\n\n";
     
    client.inventory.forEach((value, key, map)=>{
        text = text.concat(`-> Item: **${key}** | Quantidade: **${value}** \n\n`);
    });

    var texto = new embed.MessageEmbed()
    .setColor('#00000')
    .setTitle(' Baú The Lost Mc ')
    .setThumbnail('https://i.imgur.com/R04coZk.png')
    .setDescription(text)
    .setTimestamp()

    msg.channel.send(texto);
}

module.exports=
{
 name: "bau",
 help: "Mostra o que tem no baú.\n\n Ex: $bau \n\n --------------------------------------------------------------",
 execute,
}

