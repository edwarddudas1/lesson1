import Data from "../data.json";
import styled from 'styled-components';

const Title = styled.h2`
  color: grey;
`

const Container = styled.section`
  width: 400px;
  height: 300px;
  display: flex-wrap; 
`


const getRandomColor = () => {
  
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function statics({ title, stats = Data }) {
  return (
    <>
      <Container className="statistics">
        {title && <Title className="title">{title}</Title>}

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
      </Container>
    </>
  );
}