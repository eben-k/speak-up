import { Mutation } from "vuex";

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

export default (state: state) => {
  console.log(state);
};
