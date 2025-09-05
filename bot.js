const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", async (message) => {
  // Dice notation at start of line or after a label: "d6" or "Intelligence 3d6+1"
  const pattern = /^(?:.+ )?([0-9]*)d([0-9]+)([+-][0-9]+)?$/i;
  const match = message.content.match(pattern);
  if (!match) return;

  const roll = match[0].trim();
  const count = parseInt(match[1]) || 1;
  const size = parseInt(match[2]);
  const modifier = parseInt(match[3]) || 0;

  let total = modifier;
  for (let i = 0; i < count; i++) {
    total += Math.floor(Math.random() * size) + 1;
  }

  console.log(`${roll} => ${total}`);
  await message.reply(total.toString());
});

client.login(process.env.DISCORD_TOKEN);
