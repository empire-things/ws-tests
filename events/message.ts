import { sendMessageToChat } from "../lib/functions.js";
import { sanitize } from "../lib/string.js";
import { config } from "../data/config.js";
import { Events } from "discord.js";

export const execute = async (event) => {
    const channelId = process.env.CHAT_CHANNEL_ID;

    if (!config.useDiscordBot || !channelId) {
        return;
    }

    // Ignore messages from other channels and bots
    if (event.channel.id !== channelId || event.author.bot) return;

    const author = event.author;
    const content = event.content;

    // Get user's server nickname
    const nickname = event.member.nickname || author.username;
    sendMessageToChat(nickname, sanitize(content));
};

export const name = Events.MessageCreate;
export const once = false;
