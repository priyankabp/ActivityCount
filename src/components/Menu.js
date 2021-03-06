import { Link } from 'react-router-dom'
//import { BrowserRouter, Route } from 'react-router-dom'
import { FaHome, FaCalendarPlus, FaTable } from 'react-icons/fa'

export const Menu = () =>
	<nav className="menu">
		<Link to="/" activeClassName="selected">
			<FaHome />
		</Link>
		<Link to="/add-day" activeClassName="selected">
			<FaCalendarPlus />
		</Link>
		<Link to="/list-days" activeClassName="selected">
			<FaTable />
		</Link>
	</nav>