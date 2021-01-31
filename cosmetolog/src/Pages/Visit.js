import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Visit.css';

export default class Visit extends React.Component {

  constructor(props){
    super(props);
  }

  send() {
    const API_URL = 'http://localhost:5000/visit';
    let lastName = document.getElementById("lastName").value;
    let firstName = document.getElementById("firstName").value;
    let mail = document.getElementById("mail").value;
    let phone = document.getElementById("phone").value;
    const info = {
      lastName,
      firstName,
      mail,
      phone
    };
    fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => alert(response.message));
  }

  render() {
    return(
      <div className="visit">
        <form id="visit">
          <div className="input-group mb-3">
            <span className="input-group-text" id="firstNameLabel">Имя</span>
            <input id="firstName" name="firstName" type="text" className="form-control" placeholder="Женя" aria-label="FirstName" aria-describedby="firstNameLabel"/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="lastNameLabel">Фамилия</span>
            <input id="lastName" name="lastName" type="text" className="form-control" placeholder="Лалка" aria-label="LastName" aria-describedby="lastNameLabel"/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="mailLabel">E-mail</span>
            <input id="mail" name="mail" type="text" className="form-control" placeholder="exemple@mail.ru" aria-label="Email" aria-describedby="mailLabel" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="phoneLabel">Телефон</span>
            <input id="phone" name="phone" type="text" className="form-control" placeholder="+375290071994" aria-label="Phone" aria-describedby="phoneLabel" />
          </div>
        </form>
        <div className="send-button-wrapper">
          <button type="submit" className="btn btn-primary" onClick={this.send.bind(this)}>Записаться</button>
        </div>
      </div>
    );
  }
}
