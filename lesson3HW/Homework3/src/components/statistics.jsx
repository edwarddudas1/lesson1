import PropTypes from 'prop-types'
import Data from "../data.json"

export default function statics({title, stats}) {

  return (
    <>
    <section class="statistics">
      {title && <h2 className="title">{title}</h2>}

       <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className="item"
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
    </>
  )
}