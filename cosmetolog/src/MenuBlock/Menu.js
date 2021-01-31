import React from 'react';
import ReactDOM from 'react-dom';
import ControlPages from './ControlPages';
import './Styles/Menu.css';

export default class Menu extends React.Component {

  constructor(props){
    super(props);
    this.state = {currentPage : "Главная"};
  }

  showPage(pageToShow) {

    document.getElementById(pageToShow).style.background = "red";
    document.getElementById(this.state.currentPage).style.background = "white";

    this.setState((state) => ({
      currentPage : pageToShow
    }));

  }

  render() {

    let menuItems = this.props.menuElements.split(" ");
    let menuItemsJSX = menuItems.map((menuItem) => <li id = {menuItem} key={menuItem} className="menu-element" onClick={this.showPage.bind(this,menuItem)} style={{background : menuItem === "Главная" ? "red" : "white"}}>{menuItem}</li>);

    return(
      <div className="main">
        <div className="menu-wrapper">
          <ul className="menu">
            {menuItemsJSX}
          </ul>
        </div>
        <div>
          <ControlPages page={this.state.currentPage} />
        </div>
      </div>
    );
  }
}
