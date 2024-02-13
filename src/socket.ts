import { io } from "socket.io-client";

const SOCKET_IO_URL = "https://observer-server-dev.becknprotocol.io/socket";

const socket = io(SOCKET_IO_URL);

export default socket;
