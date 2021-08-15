const embed = require('discord.js');



const execute = (client, msg, args) => {
  
  var texto = new embed.MessageEmbed()
    .setColor('#00000')
    .setTitle('Baú The Lost Mc')
    .setThumbnail('https://i.imgur.com/R04coZk.png')
    .setTimestamp();

  const result = client.inventory.get(args[0]);

  if (!result) return msg.channel.send("Não existe esse item no baú!");

  if (result && !args[1]) return msg.channel.send("Coloque uma quantidade");

  if (result && args[1]) {
    var quantidade = parseInt(args[1]);
    var text = `${msg.author} adicionou ** ${quantidade}x ${args[0]}** | Total no baú: ${result + quantidade}\n\n`;
    texto.setDescription(text);

    msg.channel.send(texto);
    client.inventory.set(args[0], result + quantidade);
  }

}

module.exports =
{
  name: "add",
  help: "Adiciona a itens já existentes no baú.\n\n Ex: $add (Nome Do Item) (Quantidade) \n\n --------------------------------------------------------------",
  execute,
}
