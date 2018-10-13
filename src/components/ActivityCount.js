import React from 'react'
import '../stylesheets/ui.scss'

export const ActivityCount = React.createClass({
    render() {
        return (
            <div className="poker-day-count">
                <div className="total-days">
                    <span>{this.props.total}</span>
                    <span>days</span>
                </div>
                <div className="rainy-days">
                    <span>{this.props.rainy}</span>
                    <span>days</span>
                </div>
                <div className="sunny-days">
                    <span>{this.props.sunny}</span>
                    <span>days</span>
                </div>
                <div>
                    <span>{this.props.goal}</span>
                </div>
            </div>
        )
    }
})