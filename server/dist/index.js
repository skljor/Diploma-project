"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const structures_1 = require("./data/structures");
const app = (0, express_1.default)();
const PORT = 5000;
app.get('/', (req, res) => {
    res.send('Api is working');
});
app.get('/structures', (req, res) => {
    res.send(structures_1.structures);
});
app.listen(PORT, () => {
    console.log('The backend is online on port' + PORT);
});
