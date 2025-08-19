export default function Static(){
state = {
    good: 0,
    neutral: 0,
    bad: 0
}
    return (
        <>
            <h1>Please leave feedback</h1>
            <div>
                <button>Good</button>
                <button>Neutral</button>
                <button>Bad</button>
            </div>
            <h2>Statistics</h2>
            <p>Good: </p>
            <p>Neutral: </p>
            <p>Bad: </p>
        </>
    )
}