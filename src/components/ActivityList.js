import { FaUmbrella, FaSun, FaCalendarAlt } from 'react-icons/fa'
import { ActivityRow } from './ActivityRow'

export const ActivityList = ({ days }) => (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Rainy</th>
                <th>Sunny</th>
            </tr>
        </thead>
        <tbody>
            {days.map((day, i) =>
                <ActivityRow key={i}
                    resort={day.resort}
                    date={day.date}
                    rainy={day.rainy}
                    sunny={day.sunny}
                // or we can use this instead of line number 17,18,19,20 {...day}
                />
            )}
        </tbody>
    </table>
)