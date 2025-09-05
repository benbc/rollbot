const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", async (message) => {
  const dicePattern = /^(\d*)d(\d+)([+-]\d+)?$/i;
  const match = message.content.match(dicePattern);
  if (!match) return;

  const count = parseInt(match[1]) || 1;
  const size = parseInt(match[2]);
  const modifier = parseInt(match[3]) || 0;

  let total = modifier;
  for (let i = 0; i < count; i++) {
    total += Math.floor(Math.random() * size) + 1;
  }

  console.log(`${match[0]} => ${total}`);
  await message.reply(total.toString());
});

client.login(process.env.DISCORD_TOKEN);
