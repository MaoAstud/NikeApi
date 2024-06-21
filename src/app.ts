import { AppRoutes } from "./presentacion/router";
import { Server } from "./presentacion/server";

(async() => {
    main();
})();

function main(){
    const server = new Server(AppRoutes.routes);

    server.start();
}