"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const structures_1 = require("./data/structures");
const employes_1 = require("./data/employes");
const app = (0, express_1.default)();
const PORT = 5000;
app.get('/', (req, res) => {
    res.send('Api is working');
});
app.get('/structures', (req, res) => {
    res.send(structures_1.structures);
});
app.get('/employes', (req, res) => {
    //TODO: refactor
    const que = req.query;
    const queKeys = Object.keys(que);
    console.log(req.query);
    if (queKeys.length === 0) {
        res.send(employes_1.employes);
        return;
    }
    else if (queKeys.length > 0 && validateGetEmployes(que)) {
        res.send(employes_1.employes.filter((employ) => {
            return queKeys.every((param) => que[param].trim().toLowerCase() === employ[param].trim().toLowerCase()
                || employ[param].trim().toLowerCase().startsWith(que[param].trim().toLowerCase()));
        }));
    }
    else {
        res.statusCode = 404;
        res.statusMessage = 'Query string is invalid';
        res.send('Invalid values in query string');
    }
});
app.listen(PORT, () => {
    console.log('The backend is online on port ' + PORT);
});
function validateGetEmployes(que) {
    return Object.keys(que).every((str) => employes_1.employesSearchQs.includes(str));
}
