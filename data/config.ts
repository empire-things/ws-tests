import { players } from "./players";

export const config = {
    useDiscordBot: true,
    useTwilio: true,
    logAttacks: true,
    logChat: true,
    players,
};

if (config.useDiscordBot && (!process.env.DISCORD_CLIENT_ID || !process.env.DISCORD_CLIENT_TOKEN)) {
    console.error("Missing Discord client ID or token.\nDisabling Discord bot.");
    config.useDiscordBot = false;
}

if (config.useTwilio && (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN)) {
    console.error("Missing Twilio account SID or auth token.\nDisabling Twilio.");
    config.useTwilio = false;
}

if (config.logAttacks && !process.env.ATTACKS_URL) {
    console.error("Missing attacks URL.\nDisabling attack logging.");
    config.logAttacks = false;
}

if (config.logChat && !process.env.CHAT_URL) {
    console.error("Missing chat URL.\nDisabling chat logging.");
    config.logChat = false;
}
