import React, { useState } from 'react'

const PersonCard = (props) => {
    const { person } = props;
    const [age, setAge] = useState(person.age);
    const updateAge = () => (
        setAge(age+1)
    )
    return ( 
      <>
      <h2> {person.lastName}, {person.firstName} </h2>
      <p>Age: {age}</p>
      <p>Hair Color: {person.hairColor}</p> <br/>
      <button onClick={updateAge}>Birthday button for {person.firstName} {person.lastName}</button>
      </>
    );
  };

export default PersonCard