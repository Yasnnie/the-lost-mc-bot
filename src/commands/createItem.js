const embed = require('discord.js');



const execute = (client, msg, args) => {
    var texto = new embed.MessageEmbed()
        .setColor('#00000')
        .setTitle('Baú The Lost Mc')
        .setThumbnail('https://i.imgur.com/R04coZk.png')
        .setTimestamp();

    const result = client.inventory.get(args[0]);

    if (!result) {

        if (args[1]) {
            var quantidade = parseInt(args[1]);

            var text = `${msg.author} criou **${args[0]}** (Quatidade: ${quantidade}) \n\n`;
            texto.setDescription(text);

            msg.channel.send(texto);
            client.inventory.set(args[0], quantidade);

        }

        if (!args[1]) {
            var text = `${msg.author} criou **${args[0]}** (Quatidade: 1) \n\n`;
            texto.setDescription(text);

            msg.channel.send(texto);
            client.inventory.set(args[0], 1);
        }


    }

    if (result) return msg.channel.send("Já existe esse item");

}

module.exports =
{
    name: "criar",
    help: "Cria um novo item no baú. \n\n Ex: $criar (Nome Do Item) (Quantidade - Obs: Esse valor é opcional! Caso você não coloque nada ele adicionara automaticamente 1). \n\n --------------------------------------------------------------",
    execute,
}