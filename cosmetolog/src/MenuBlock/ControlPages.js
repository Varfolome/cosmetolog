import Main from '../Pages/Main';
import PriceList from '../Pages/PriceList';
import Services from '../Pages/Services';
import Visit from '../Pages/Visit';


export default function ControlPages(props) {

  let page = <Main />

  switch(props.page) {
    case "Главная": page = <Main />; break;
    case "Услуги": page = <Services />; break;
    case "Прайслист": page = <PriceList />; break;
    case "Записаться": page = <Visit />; break;
    default: page = <Main />
  }


  return(
    <div>
      {page}
    </div>
  );
}
