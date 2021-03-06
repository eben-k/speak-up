import streamchat from "../streamchat";
import { ActionTree } from "vuex";

type state = {
  loading: boolean;
  sending: boolean;
  error: null | string;
  user: never[];
  reconnect: boolean;
  activeRoom: null | string;
  rooms: never[];
  users: never[];
  messages: never[];
  userTyping: null | string;
};

// eslint-disable-next-line
function handleError(commit: any, error: { message: string }) {
  const message = error.message;
  commit("setError", message);
}

export const actions: ActionTree<state, state> = {
  async login({ commit }, username: string) {
    try {
      commit("setError", "");
      commit("setLoading", true);
      const currentUser = await streamchat.joinChat(username);
      console.log(currentUser, "got here????");
      commit("setUser", {
        username: currentUser.id,
        name: currentUser.username
      });
      commit("setReconnect", false);
    } catch (error) {
      handleError(commit, error);
    } finally {
      commit("setLoading", false);
    }
  }
};

export default actions;
