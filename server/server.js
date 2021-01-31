const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

function getError(info) {
  if(info.lastName === "") return "Введите фамилию";
  return "";
}

function isOKInfo(info) {
  return getError(info) === "";
}

app.post("/visit",(req,res) => {
  const info =  {
        lastName: req.body.lastName.toString(),
        firstName: req.body.firstName.toString(),
        mail: req.body.mail.toString(),
        phone: req.body.phone.toString(),
        created: new Date()
      };
  console.log(info);
  if(isOKInfo(info)) {
    res.status(422);
    res.json({
      message: "Мы вам перезвоним"
    });
  } else {
    res.status(500);
    res.json({
      message: getError(info)
    });
  }
});



app.listen(5000,() => {
  console.log("Yo!");
});
