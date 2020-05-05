// import { Mutation, MutationTree } from "vuex";
/* eslint-disable */

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

export function setError({ state, error }: { state: state; error: any }) {
  state.error = error;
}
export function setLoading({
  state,
  loading,
}: {
  state: {
    loading: boolean;
  };
  loading: boolean;
}) {
  state.loading = loading;
}
export function setUser(state: { user: any }, user: any) {
  state.user = user;
}
export function setReconnect(
  state: { reconnect: boolean },
  reconnect: boolean
) {
  state.reconnect = reconnect;
}
export function setActiveRoom(state: { activeRoom: any }, roomId: any) {
  state.activeRoom = roomId;
}
export function setRooms(state: { rooms: any }, rooms: any) {
  state.rooms = rooms;
}
export function setUsers(state: { users: any }, users: any) {
  state.users = users;
}
export function clearChatRoom(state: { users: never[]; messages: never[] }) {
  state.users = [];
  state.messages = [];
}
export function setMessages(state: { messages: any }, messages: any) {
  state.messages = messages;
}
export function addMessage(state: { messages: any[] }, message: any) {
  state.messages.push(message);
}
export function setSending(state: { sending: any }, status: any) {
  state.sending = status;
}
export function setUserTyping(state: { userTyping: any }, userId: any) {
  state.userTyping = userId;
}
export function reset(state: {
  error: null;
  users: never[];
  messages: never[];
  rooms: never[];
  user: null;
}) {
  state.error = null;
  state.users = [];
  state.messages = [];
  state.rooms = [];
  state.user = null;
}

export default () => {
  setError;
  setLoading;
  setMessages;
  setReconnect;
  setRooms;
  setSending;
  setUser;
  setUsers;
  setUserTyping;
  clearChatRoom;
  addMessage;
  setActiveRoom;
  reset;
};
