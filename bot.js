// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const {tuetue, fanswers, audio_response} = require('./constants.js')
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {

  if (!message.guild) return;
  
  if (message.content in fanswers) {
    key = message.content;
    message.channel.send(fanswers[key].msg, {files: fanswers[key].files});
  }

  if (message.content in audio_response) {
    key = message.content;
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play(audio_response[key].audio);
      if ('files' in audio_response[key]){
        message.channel.send(audio_response[key].msg, {files: audio_response[key].files})
      }
    } else {
      message.reply('Ponte vío y entra a un canal de audio');
      message.channel.send(audio_response[key].msg, {files: [audio_response[key].audio]});
    }
  }

  if (message.content === '!tuetue') {
    if (tuetue.count != 2) {
      tuetue.count += 1
      message.channel.send(tuetue.icon.repeat(tuetue.count), {files: [tuetue.file]});
    } else{
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play(tuetue.audio);
      }
      message.channel.send(tuetue.icon.repeat(3), {files: [tuetue.file]});
      tuetue.count = 0;
    }
  }

  if (message.content === '!help') {
    help_text = "\nMensaje de Ayuda\n\nGifs\n----------\n"
    Object.keys(fanswers).forEach(i => {
      help_text += i + '\n'
    });

    help_text += "\nAudios\n----------\n"
    Object.keys(audio_response).forEach(i => {
      help_text += i + '\n'
    });
    message.reply(help_text)


    
  }
});

client.login(process.env.DISCORD_TOKEN);
