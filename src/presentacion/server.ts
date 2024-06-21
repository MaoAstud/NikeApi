import express, { Router } from 'express';
import cors from 'cors';
import http from 'http';
import path from 'path';

export class Server {
  private app = express();
  private routes: Router;
  private server: http.Server;

  port = 8081;

  constructor(routes: Router) {
    this.routes = routes;
    this.server = http.createServer(this.app);
  }

  async start() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, '../../public')));
    this.app.use(this.routes);

    this.server.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
