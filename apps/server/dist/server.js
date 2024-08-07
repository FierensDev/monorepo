"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
class Server {
    constructor(port) {
        this.port = port;
    }
    start() {
        const app = (0, express_1.default)();
        app.get("/", (req, res) => {
            res.send("foo");
        });
        app.listen(this.port, (req, res) => {
            console.log(`Server listen : http://127.0.0.1/${this.port}`);
        });
    }
}
exports.Server = Server;
