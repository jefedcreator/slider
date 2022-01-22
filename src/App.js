import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data';


function App() {
  const[people, setPeople] = useState(data)
  const[value, setValue] = useState(0)

  const checkNum = (number) =>
  {
    if (number > people.length - 1 ) {
        return 0
  } else if(number == 0) {
    return people.length - 1
  }
  else{
    return number
  }
}
  const setRight = () => {
    setValue(prevValue => checkNum(prevValue + 1))
  }

  const setLeft = () => {
    setValue(prevValue => checkNum(prevValue - 1))
  }
  // const display = people.map(
  //  (person, personIndex)=>{
  //     return <article key={person.id}>
  //         <img src={person.image} alt={person.name} className='person-img'/>
  //         <h4>{person.name}</h4>
  //         <p className='title'>{person.title}</p>
  //         <p className='text'>{person.quote}</p>
  //         <FaQuoteRight className='icon'/>
  //     </article>
  //   }
  // )
   const {id, title, image, name, quote} = people[value]

  return(
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
      <article key={id}>
           <img src={image} alt={name} className='person-img'/>
           <h4>{name}</h4>
           <p className='title'>{title}</p>
           <p className='text'>{quote}</p>
           <FaQuoteRight className='icon'/>
      </article>
      <button className='next'>
        <FaChevronRight onClick={setRight}/>
      </button>
      <button className='prev'>
      <FiChevronLeft  onClick={setLeft}/>
      </button>
      </div>
    </section>
  );
}

export default App;
