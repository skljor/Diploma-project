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
const sequelize_1 = require("sequelize");
const app = (0, express_1.default)();
const PORT = 5000;
const sequelize = new sequelize_1.Sequelize({
    host: './database/sqlite.db',
    dialect: 'sqlite'
});
const SubOrg = sequelize.define('SubOrganization', {
    subOrgID: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
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
const Structure = sequelize.define('Structure', {
    ROWID: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
    code: { type: sequelize_1.DataTypes.STRING },
    title: { type: sequelize_1.DataTypes.STRING }
}, {
    timestamps: false,
    tableName: 'Structures'
});
const Employee = sequelize.define('Employee', {
    employeeID: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
    firstName: { type: sequelize_1.DataTypes.STRING },
    middleName: { type: sequelize_1.DataTypes.STRING },
    lastName: { type: sequelize_1.DataTypes.STRING },
    jobTitle: { type: sequelize_1.DataTypes.STRING },
    structureCode: { type: sequelize_1.DataTypes.STRING },
    schedule: { type: sequelize_1.DataTypes.STRING },
    phone: { type: sequelize_1.DataTypes.STRING },
    mail: { type: sequelize_1.DataTypes.STRING }
}, {
    timestamps: false,
    tableName: 'Employees'
});
const Education = sequelize.define('Education', {
    educationID: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
    firstName: { type: sequelize_1.DataTypes.STRING },
    middleName: { type: sequelize_1.DataTypes.STRING },
    lastName: { type: sequelize_1.DataTypes.STRING },
    jobTitle: { type: sequelize_1.DataTypes.STRING },
    structureCode: { type: sequelize_1.DataTypes.STRING },
    schedule: { type: sequelize_1.DataTypes.STRING },
    phone: { type: sequelize_1.DataTypes.STRING },
    mail: { type: sequelize_1.DataTypes.STRING }
}, {
    timestamps: false,
    tableName: 'Educations'
});
app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('Api is working');
});
app.get('/structures', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const structures = yield Structure.findAll();
    res.send(structures);
}));
app.get('/employees', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const employees = yield Employee.findAll();
    res.send(employees);
}));
app.get('/suborgs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const suborgs = yield SubOrg.findAll();
    res.send(suborgs);
}));
app.get('/educations', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const educations = yield Education.findAll();
    res.send(educations);
}));
app.listen(PORT, () => {
    console.log('The server is online on port ' + PORT);
});
