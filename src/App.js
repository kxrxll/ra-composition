import React from 'react';
import Card from './Card';
import Example from './Example'
import './bootstrap.css';

function App() {
  return (
    <div>
      <Card>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/2560px-The_Simpsons_yellow_logo.svg.png' className="card-img-top" alt="..." />
      </Card>
      <Card />
      <Example />
    </div>
  )
}

export default App;
