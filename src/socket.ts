import { io } from "socket.io-client";
const socketUrl = process.env.REACT_APP_SOCKET_URL;

const SOCKET_IO_URL = socketUrl as string;

const socket = io(SOCKET_IO_URL);

export default socket;
