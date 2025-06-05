import Data from "../data.json";
import styled from 'styled-components';

const Title = styled.h2`
  color:rgb(104, 104, 104);
  text-align: center;
  font-weight: 800;
  margin-bottom: 20px;
`

const Container = styled.section`
  width: 400px;
  background-color: white;
`
const  Statlist = styled.ul`
display: flex;
flex-direction: row;
padding: 0;
margin: 0;
list-style: none
`
const  Statitem = styled.li`
flex: 1;
padding: 20px 0;
text-align: center;
font-weight: 600;
color: white
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

        <Statlist className="stat-list">
          {stats.map(({ id, label, percentage }) => (
            <Statitem
              key={id}
              className="item"
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </Statitem>
          ))}
        </Statlist>
      </Container>
    </>
  );
}