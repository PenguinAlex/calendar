import './styles.css'
import {useState} from "react";
import WeekMonthDay from "./date";

const DateSlider = () =>{
	const [currentDate, setCurrentDate] = useState(Date.now());
	const week = [' ', 'M', 'T', 'W', 'T', 'F', 'S', 'S'];
	return(
		<div className="App-DateSlider">
			<div className="week">
				{
					week.map((el,i) =>
						<WeekMonthDay key ={i} index={i} WD ={el}
						setCurrentDate = {setCurrentDate}/>
					)
				}
			</div>
			<div className="slider">
				<button className="dateButton">
					 &lt;
				</button>
					<a> March 2022 </a>
				<button className="dateButton">
					 &gt;
				</button>
			</div>
		</div>
	)

}

export default DateSlider;