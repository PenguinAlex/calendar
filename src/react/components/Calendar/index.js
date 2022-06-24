import DateSlider from "../DateSlider";
import EventsTable from "../EventsTable";

const Calendar = ({currentDate, setCurrentDate}) => {
	return(
		<div className="App-Calendar">
			<div className="mainContent">
				<DateSlider currentDate = {currentDate}
							setCurrentDate = {setCurrentDate}
				/>
				<EventsTable currentDate = {currentDate}
						     setCurrentDate = {setCurrentDate}
				/>
			</div>
		</div>
	)
}

export default Calendar;