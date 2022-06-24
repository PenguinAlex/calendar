import './styles.css'
import {useState} from "react";


const WeekMonthDay = ({index, WD, setCurrentDate}) =>{
	const [marked, setMarked] = useState();
	if ( index === 0) return <div className="octo"/>
	const today = Date.now()
	const todayDate = new Date(today).getDate();
	console.log(todayDate)
	const weekDay = new Date(today).getDay();
	console.log(weekDay)

	const monthDayMS = new Date().setDate(todayDate + index - weekDay)
	const monthDay = new Date(monthDayMS).getDate()
	return <div
	 className="octo"
	onClick={()=>setMarked('marked')}
	>
		<div>
			{WD}
		</div>
		<div
		className={marked}>
			{monthDay.toString()}
		</div>
	</div>
}

export default WeekMonthDay;