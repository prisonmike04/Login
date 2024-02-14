const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const path = require('path');
const { log } = require('console');
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/NewModel');
}
const LoginSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
});
const Lmodel = new mongoose.model('Mmodel', LoginSchema);
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'Home')));

const port = 7325;

app.post('/submit', async (req, res) => {
  let user = new Lmodel({
    name: req.body.Name,
    password: req.body.Password,
    email: req.body.Email,
  });
  const doc = await user.save();
  res.json(doc);
});

app.get('/submit', async (req, res) => {
  const docs = await Lmodel.find({});

  res.json(docs);
});
app.delete('/submit', async (req, res) => {
  const del = await Lmodel.deleteMany({});
  res.json(del);
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
