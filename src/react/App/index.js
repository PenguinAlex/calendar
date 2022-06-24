import './styles.css'
import Header from "../components/Header";
import Calendar from "../components/Calendar";
import {useState} from "react";

function Index() {

    const [currentDate, setCurrentDate] = useState(Date.now())

    console.log( new Date(currentDate).toLocaleString())
  return (
    <div className="App">
        <Header currentDate = {currentDate}
                setCurrentDate = {setCurrentDate}
        />
        <Calendar currentDate = {currentDate}
                  setCurrentDate = {setCurrentDate}
        />
    </div>
  );
}

export default Index;
