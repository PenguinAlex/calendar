import './styles.css';
import data from '../../data/data.json'

const EventsTable = ({currentDate}) => {
	const times = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
	const event = [1,2,3,4,5,6,7]
	const line = (time) =>{
		return(
			<div className="timeLine">
				<div className="Time">{time}:00</div>
				{event.map(el =>
					<div className="event"
					key={el}
					>{el}</div>
				)}
			</div>
	)}
	return(
		<div className="App-EventsTable">
			{times.map(time =>
				<div
					key={time}
					className="timeLine">
				<div className="Time">{time}:00</div>
				{event.map(el =>
					<div className="event"
						 key={el}
					>
						<button
							className="event-button"
							key={el}
						>{data[0].text}</button>
					</div>
				)}
			</div>
			)}
		</div>
	)}

export default EventsTable;