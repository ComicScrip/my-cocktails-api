import { Drink } from './types';

const cocktails: Drink[] = require('./cocktails.json');
const _ = require('lodash');

const express = require('express');

const app = express();

app.get('/cocktails', (req, res) => {
  const { sort = 'random', offset = 0, limit = 20, search = '' } = req.query;
  const ordered =
    sort === 'random' && search === ''
      ? _.shuffle([...cocktails])
      : [...cocktails];
  const toSend = search
    ? ordered.filter((cocktail) =>
        cocktail.name.toLowerCase().includes(search.toLowerCase())
      )
    : ordered;
  res.send({ items: toSend.slice(offset, limit), total: toSend.length });
});

app.listen(process.env.PORT || 5000, () => console.log('ready'));
