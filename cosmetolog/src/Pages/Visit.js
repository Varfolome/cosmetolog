import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Visit.css';

export default class Visit extends React.Component {

  constructor(props){
    super(props);
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
          <div className="send-button-wrapper">
            <button type="submit" className="btn btn-primary">Записаться</button>
          </div>
        </form>
      </div>
    );
  }
}
