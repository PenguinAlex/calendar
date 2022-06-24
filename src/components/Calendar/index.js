import DateSlider from "../DateSlider";
import EventsTable from "../EventsTable";

const Calendar = () => {
	return(
		<div className="App-Calendar">
			<div className="mainContent">
				<DateSlider/>
				<EventsTable/>
			</div>
		</div>
	)
}

export default Calendar;