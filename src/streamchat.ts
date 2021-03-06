import axios from "axios";
import { StreamChat } from "stream-chat";

type UserType = {
  id: string;
  username: string;
};
let user: UserType = {
  id: "",
  username: ""
};
let token: string;
const API_KEY = process.env.VUE_APP_API_KEY;

// eslint-disable-next-line
const client = new StreamChat(API_KEY!);

async function initializeStream() {
  const { username } = user;

  const connectedUser = await client.setUser(
    { id: username, name: username },
    token
  );

  return connectedUser;
}
async function initializeChannel() {
  const channel = client.channel("messaging");
  const messages = (await channel.watch()).messages;
  return messages;
}
async function joinChat(username: string) {
  const { data } = await axios.post(
    `${process.env.VUE_APP_SERVER_API_ENDPOINT}/join`,
    {
      username: username
    }
  );

  user = data.user;
  token = data.token;
  await initializeStream();
  await initializeChannel();
  return user;
}

export default {
  joinChat,
  initializeStream,
  initializeChannel
};
