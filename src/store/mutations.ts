// import { Mutation, MutationTree } from "vuex";

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

export function setError({ state, error }: { state: state; error: string }) {
  state.error = error;
}
export function setLoading({
  state,
  loading
}: {
  state: {
    loading: boolean;
  };
  loading: boolean;
}) {
  state.loading = loading;
}
export function setUser(state: { user: [] }, user: []) {
  state.user = user;
}
export function setReconnect(
  state: { reconnect: boolean },
  reconnect: boolean
) {
  state.reconnect = reconnect;
}
export function setActiveRoom(state: { activeRoom: string }, roomId: string) {
  state.activeRoom = roomId;
}
export function setRooms(state: { rooms: [] }, rooms: []) {
  state.rooms = rooms;
}
export function setUsers(state: { users: [] }, users: []) {
  state.users = users;
}
export function clearChatRoom(state: { users: never[]; messages: never[] }) {
  state.users = [];
  state.messages = [];
}
export function setMessages(state: { messages: [] }, messages: []) {
  state.messages = messages;
}
export function addMessage(state: { messages: string[] }, message: string) {
  state.messages.push(message);
}
export function setSending(state: { sending: boolean }, status: boolean) {
  state.sending = status;
}
export function setUserTyping(state: { userTyping: string }, userId: string) {
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
