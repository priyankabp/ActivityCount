import { FaUmbrella, FaSun, FaCalendarAlt } from 'react-icons/fa'
import { PropTypes } from 'react'
export const ActivityRow = ({ resort, date,
    rainy, sunny }) => (
        <tr>
            <td>
                {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
            </td>
            <td>
                {resort}
            </td>
            <td>
                {(rainy) ? <FaUmbrella /> : null}
            </td>
            <td>
                {(sunny) ? <FaSun /> : null}
            </td>
        </tr>

    )

ActivityRow.prototypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    rainy: PropTypes.bool,
    sunny: PropTypes.sunny
}