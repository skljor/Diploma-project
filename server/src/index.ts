import express from 'express';
import { structures } from './data/structures';
import { employes, employesSearchQs } from './data/employes';

type q = {
  //гоните его, надсмехайтесь над ним: он не может понять дебильной логики типизации queryString в Express
  [index: string]: string | undefined;
}

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Api is working');
})

app.get('/structures', (req, res) => {
  res.send(structures);
});

app.get('/employes', (req, res) => {
  //TODO: refactor
  const que = req.query as q;
  const queKeys = Object.keys(que);
  console.log(req.query)
  if (queKeys.length === 0) {
    res.send(employes);
    return
  }
  else if (queKeys.length > 0  && validateGetEmployes(que)) {
    res.send(employes.filter((employ) => {  //after valisdateGetEmployes we sure that all values gotta be string
      return queKeys.every((param) => 
      (que[param] as string).trim().toLowerCase() === (employ[param] as string).trim().toLowerCase()
      || (employ[param] as string).trim().toLowerCase().startsWith((que[param] as string).trim().toLowerCase())
      )
    }));
  } else {
    res.statusCode = 404;
    res.statusMessage = 'Query string is invalid';
    res.send('Invalid values in query string');
  }
});

app.listen(PORT, () => {
  console.log('The backend is online on port ' + PORT);
})

function validateGetEmployes(que: q): boolean {
  return Object.keys(que).every((str) => employesSearchQs.includes(str));
}