const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

app.post("/visit",(req,res) => {
  const info = {
        lastName: req.body.lastName.toString(),
        created: new Date()
      };
  console.log(info);
});


app.listen(5000,() => {
  console.log("Yo!");
});
