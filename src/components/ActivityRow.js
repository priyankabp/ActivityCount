import { FaUmbrella, FaSun, FaCalendarAlt } from 'react-icons/fa'

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