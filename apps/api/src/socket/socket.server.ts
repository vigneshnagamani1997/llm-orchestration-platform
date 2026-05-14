import { Server } from "socket.io";

export let io: Server;

export function initializeSocket(server: any) {

    io = new Server(server, {
        cors: {
            origin: "*"
        }
    });

    io.on("connection", (socket) => {

        console.log(
            "Client connected",
            socket.id
        );
        socket.on("disconnect", () => {

            console.log(
                "Client disconnected"
            );

        });

    });

}