"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const structures_1 = require("./data/structures");
const employes_1 = require("./data/employes");
const suborgs_1 = require("./data/suborgs");
const sequelize_1 = require("sequelize");
const app = (0, express_1.default)();
const PORT = 5000;
const sequelize = new sequelize_1.Sequelize({
    host: './database/sqlite.db',
    dialect: 'sqlite'
});
const SubOrg = sequelize.define('SubOrganization', {
    ROWID: { type: sequelize_1.DataTypes.NUMBER },
    name: { type: sequelize_1.DataTypes.STRING },
    headName: { type: sequelize_1.DataTypes.STRING },
    lawAdress: { type: sequelize_1.DataTypes.STRING },
    realAdress: { type: sequelize_1.DataTypes.STRING },
    phone: { type: sequelize_1.DataTypes.STRING },
    stPhone: { type: sequelize_1.DataTypes.STRING },
    mail: { type: sequelize_1.DataTypes.STRING }
}, {
    timestamps: false,
    tableName: 'SubOrganizations',
});
app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('Api is working');
});
app.get('/structures', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const que = req.query;
    const queKeys = Object.keys(que);
    if (queKeys.length === 0) {
        res.send(structures_1.structures);
        return;
    }
    else if (queKeys.length === 1 && queKeys[0] === 'structureCode') {
        res.send(structures_1.structures.find((structure) => structure.code === que[queKeys[0]]));
    }
    else {
        handleInvalidQuery(res);
    }
}));
app.get('/employes', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const que = req.query;
    const queKeys = Object.keys(que);
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
        handleInvalidQuery(res);
    }
});
app.get('/suborgs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const suborgs = yield SubOrg.findAll({
        attributes: suborgs_1.subOrgsModelQuery
    });
    res.send(suborgs);
}));
app.listen(PORT, () => {
    console.log('The backend is online on port ' + PORT);
});
function validateGetEmployes(que) {
    return Object.keys(que).every((str) => employes_1.employesSearchQs.includes(str));
}
function handleInvalidQuery(res) {
    res.statusCode = 404;
    res.statusMessage = 'Query string is invalid';
    res.send('Invalid values in query string');
}
