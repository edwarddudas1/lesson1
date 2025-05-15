import Statistics from "./data.json"

export default function statics(title, stats) {

  return (

    <section class="statistics">
        <h2 class="title">Upload stats</h2>
        <ul class="stat-list">
        <li class="item">
            <span class="label">{Statistics.label}</span>
            <span class="percentage">{Statistics.percentage}</span>
        </li>
        <li class="item">
            <span class="label">{Statistics.label}</span>
            <span class="percentage">{Statistics.percentage}</span>
        </li>
        <li class="item">
            <span class="label">{Statistics.label}</span>
            <span class="percentage">{Statistics.percentage}</span>
        </li>
        <li class="item">
            <span class="label">{Statistics.label}</span>
            <span class="percentage">{Statistics.percentage}</span>
        </li>
        </ul>
    </section>
  )
}