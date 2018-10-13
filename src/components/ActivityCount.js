import { Component } from 'react'
import '../stylesheets/ui.scss'

export class ActivityCount extends Component {
    percentToDecimal(decimal) {
        return ((decimal * 100) + '%')
    }

    calcGoalProgress(total, goal) {
        return this.percentToDecimal(total / goal)
    }

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
                    <span>
                        {this.calcGoalProgress(
                            this.props.total,
                            this.props.goal
                        )}
                    </span>
                </div>
            </div>
        )
    }
}