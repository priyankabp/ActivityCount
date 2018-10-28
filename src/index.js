import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'
import { HashRouter, Router, Route, hashHistory } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

window.React = React

render(
	<BrowserRouter history={hashHistory}>
		<div>
			<Route path="/" component={App} />
			<Route path="list-days" component={App}>
				<Route path=":filter" component={App} />
			</Route>
			<Route path="add-day" component={App} />
			<Route path="*" component={Whoops404} />
		</div>
	</BrowserRouter>,
	document.getElementById('react-container')
)

