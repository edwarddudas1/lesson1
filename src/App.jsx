import './App.css'
// import './img'
function App() {

  const num1 = 21;
  const num2 = 7;
  const difference = num1 - num2;
  const movie = ['Втеча з Шоушенка','Хрещений батько','Темний лицар','Хрещений батько 2','Список Шиндлера']

  let name = "Edward";
  return (

    <div className='MyFavFilm'>
      <h3>The Shawshank Redemption</h3>
      <img src="/TSR.png" alt="" />
      <h1>Hello!</h1>
      <p>My name is Edward</p>
      <h2>This is my favourite vegetables</h2>
      <ul>
        <li>potato</li>
        <li>carrot</li>
        <li>tomato</li>
      </ul>
    
      <form action="">

        <input id='1' type="number"/>
        <input id='2' type="number" />
        <button>Click me!</button>
      </form>
      <select name="select">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
      <p>{difference}</p>
      <ul>
        {movie.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>

    </div>
  );
}

export default App
