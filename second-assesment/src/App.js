import React, {useState} from 'react';
import './App.css';
import { FaStar} from "react-icons/fa";
import Details from './details';

const colors =  {
  orange: "#FFBA5A",
  grey: '#a9a9a9',
}

function App() {
 
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = value =>{
    setCurrentValue(value);
  }

  const handleMouseOver = value =>{
    setHoverValue(value);
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  return (
    <div className="App">
      <h2>Hotel Feedback</h2>  
      <div className='star'>
        {stars.map((_, index) =>{
          return (
            <FaStar 
            key={index}
            size={24}
            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
            onClick={() =>handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            />
          )
        })}
        </div>  
        <textarea className='textarea'
        placeholder="What's your feedback">
         </textarea>
         <Details />
    </div>
  );
}

export default App;
