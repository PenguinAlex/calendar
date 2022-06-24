import logo from '../logo.svg';
import './styles.css'
import Header from "../components/Header";
import DateSlider from "../components/DateSlider";
import Calendar from "../components/Calendar";

function Index() {
  return (
    <div className="App">
        <Header/>
        <Calendar/>
    </div>
  );
}

export default Index;
