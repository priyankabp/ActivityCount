import React from 'react'
import { render } from 'react-dom'
import { ActivityCount } from './components/ActivityCount'

window.React = React

render(
	<ActivityCount />,
	document.getElementById('react-container')
)