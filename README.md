# rollbot

A Discord bot that rolls dice.

Picks up on any message that looks like a dice roll, rolls it and replies with the result.

> d8+2

You can also prefix the roll with a description
to make it easier to see what's going on when there are lots of rolls.

> Strength: 3d6+1

## Deployment

1. Create a Discord app
1. Generate a bot token and put it in a .env file (using the template)
1. Install the app in your server (see Discord docs or ask a chatbot)
1. `npm install`
1. `./run`
