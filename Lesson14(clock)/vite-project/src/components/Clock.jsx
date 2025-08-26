
import {useEffect, useState} from 'react';

function OldClock() {
    const [time, setTime] = useState( () => new Date());
    const [intervalId, setIntervalId] = useState(null);
    useEffect(() => {
        const id = setInterval(() => {
            console.log('Це інтервал кожні 2000ms ' + Date.now());
            setTime(new Date())
        }, 1000) 
        setIntervalId(id)
    }, [])

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Це інтервал кожні 2000ms ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log('Цей метод викликається перед розмонтуванням компоненту');
//     this.stop();
//   }



  stop = () => {
    clearInterval(this.intervalId);
  };

    return (
      <div className={styles.container}>
        <p className={styles.clockface}>
          Текущее время: {time.toLocaleTimeString()}
        </p>
        <button type="button" onClick={stop}>
          Остановить
        </button>
      </div>
    );
}