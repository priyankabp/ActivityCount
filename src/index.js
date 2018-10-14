import React from 'react'
import { render } from 'react-dom'
import { ActivityList } from './components/ActivityList'

window.React = React

render(
	<ActivityList days={
		[
			{
				resort: "Gouthami House",
				date: new Date("10/13/2018"),
				rainy: true,
				sunny: false,
			},
			{
				resort: "Amrutha House",
				date: new Date("11/15/2018"),
				rainy: false,
				sunny: false,
			},
			{
				resort: "Pallavi House",
				date: new Date("12/23/2018"),
				rainy: false,
				sunny: true,
			},

		]
	} />,
	document.getElementById('react-container')
)