import './styles.css'
const Header = () =>{
	return (
		<div className="App-header">
			<a className="header-text">Interview Calendar</a>
			<button
				className="header-button"
				onClick={
					()=>{
					let date = prompt('Введите дату в формате YYYY-MM-DD HH:mm:ss ');
					console.log(date);

				}
				}
			>
				+
			</button>
		</div>
	)
}

export default Header;