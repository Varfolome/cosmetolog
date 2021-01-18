const express = require('express');

const app = express();

app.use(express.json());

app.post("/visit",(req,res) => {
  const info = {
        firstName: req.body.firstName.toString(),
        lastName: req.body.lastName.toString(),
        mail: req.body.mail.toString(),
        phone: req.body.phone.toString(),
        created: new Date()
      };
  console.log(info);
});


app.listen(5000,() => {
  console.log("Yo!");
});
