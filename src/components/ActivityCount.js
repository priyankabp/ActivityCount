import '../stylesheets/ui.scss'
import { FaUmbrella, FaSun, FaCalendarAlt } from 'react-icons/fa'

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total / goal)
}

export const ActivityCount = ({ total, rainy, sunny, goal }) => (
    <div className="poker-day-count">
        <div className="total-days">
            <span>{total}</span>
            <FaCalendarAlt />
            <span>days</span>
        </div>
        <div className="rainy-days">
            <span>{rainy}</span>
            <FaUmbrella />
            <span>days</span>
        </div>
        <div className="sunny-days">
            <span>{sunny}</span>
            <FaSun />
            <span>days</span>
        </div>
        <div>
            <span>
                {calcGoalProgress(
                    total,
                    goal
                )}
            </span>
        </div>
    </div>
)