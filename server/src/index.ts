import express from 'express';
import { structures } from './data/structures';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Api is working');
})

app.get('/structures', (req, res) => {
  res.send(structures);
});

app.listen(PORT, () => {
  console.log('The backend is online on port' + PORT);
})