import React from 'react'
import { render } from 'react-dom'
import { ActivityCount } from './components/ActivityCount'

window.React = React

render(
	<ActivityCount total={50}
		rainy={20}
		sunny={10}
		goal={100} />,
	document.getElementById('react-container')
)