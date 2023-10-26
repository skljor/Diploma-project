import express from 'express';
import { Sequelize, DataTypes } from 'sequelize';


const app = express();
const PORT = 5000;
const sequelize = new Sequelize({
  host:'./database/sqlite.db',
  dialect: 'sqlite'
})

const SubOrg = sequelize.define('SubOrganization', {
    subOrgID: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING },
    headName: { type: DataTypes.STRING },
    lawAdress: { type: DataTypes.STRING },
    realAdress: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    stPhone: { type: DataTypes.STRING },
    mail: { type: DataTypes.STRING }
  },{ 
    timestamps: false,
    tableName: 'SubOrganizations',
  }
);

const Structure = sequelize.define('Structure', {
  ROWID: { type: DataTypes.INTEGER, primaryKey: true },
  code: { type: DataTypes.STRING },
  title: { type: DataTypes.STRING }
  }, {
    timestamps: false,
    tableName: 'Structures'
  }
);

const Employee = sequelize.define('Employee', {
  employeeID: { type: DataTypes.INTEGER, primaryKey: true },
  firstName: { type: DataTypes.STRING },
  middleName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  jobTitle: { type: DataTypes.STRING },
  structureCode: { type: DataTypes.STRING },
  schedule: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  mail: { type: DataTypes.STRING }
}, {
  timestamps: false,
  tableName: 'Employees'
});

const Education = sequelize.define('Education', {
  educationID: { type: DataTypes.INTEGER, primaryKey: true },
  name: { type: DataTypes.STRING },
  headName: { type: DataTypes.STRING },
  lawAdress: { type: DataTypes.STRING },
  realAdress: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  stPhone: { type: DataTypes.STRING },
  mail: { type: DataTypes.STRING }
}, {
  timestamps: false,
  tableName: 'Educations'
});


app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('Api is working');
})

app.get('/structures', async(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const structures = await Structure.findAll();
  res.send(structures);
});

app.get('/employees', async(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const employees = await Employee.findAll();
  res.send(employees);
});

app.get('/suborgs', async(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const suborgs = await SubOrg.findAll();
  res.send(suborgs);
});

app.get('/educations', async(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const educations = await Education.findAll();
  res.send(educations);
});

app.listen(PORT, () => {
  console.log('The server is online on port ' + PORT);
})

