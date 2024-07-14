import express, { Request, Response } from "express";

export class Server {
  port: number

  constructor(port: number){
    this.port = port;
  }

  start():void {
    const app = express();

    app.get("/", (req: Request, res: Response) => {
      res.send("foo");
    });

    app.listen(this.port, (req: Request,res: Response) => {
      console.log(`Server listen : http://127.0.0.1/${this.port}`);
      
    })
  }
}