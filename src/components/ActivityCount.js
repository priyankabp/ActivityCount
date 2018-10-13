import React from 'react'
import '../stylesheets/ui.scss'

export const ActivityCount = React.createClass({
    render() {
        return (
            <div className="poker-day-count">
                <div className="total-days">
                    <span>5 days</span>
                </div>
                <div className="rain-days">
                    <span>2 days</span>
                </div>
                <div className="sunny-days">
                    <span>1 hiking days</span>
                </div>

            </div>
        )
    }
})