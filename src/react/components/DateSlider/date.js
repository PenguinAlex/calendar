import './styles.css';


const WeekMonthDay = ({index, WD, currentDate, setCurrentDate}) =>{
	if ( index === 0) return <div className="octo"/>
	const currentDay = new Date(currentDate).getDate();
	const weekDay = new Date(currentDate).getDay() ;
	const monthDayMS = weekDay !== 0 ? new Date().setDate(currentDay + index - weekDay) : new Date().setDate(currentDay + index - 7)
	const monthDay = new Date(monthDayMS).getDate()
	const style = (currentDay === monthDay? 'marked': null)
	return <div
	 className="octo"
	onClick={()=>{setCurrentDate(monthDayMS)
	}}
	>
		<div>
			{WD}
		</div>
		<div
		className={style}>
			{monthDay.toString()}
		</div>
	</div>
}

export default WeekMonthDay;