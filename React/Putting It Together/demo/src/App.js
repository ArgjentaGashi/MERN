import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const people = [
    {
      id: 0,
      firstName: "Jane",
      lastName: "Doe",
      age: 45,
      hairColor: "Black"
    },
    {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      age: 88,
      hairColor: "Brown"
    },
    {
      id: 2,
      firstName: "Millard",
      lastName: "Fillmore",
      age: 50,
      hairColor: "Brown"
    },
    {
      id: 3,
      firstName: "Maria",
      lastName: "Smith",
      age: 62,
      hairColor: "Brown"
    },
  ]
  return (
    <div className="App">
      {people.map( (person, index) => (
        <PersonCard person = {person} key={person.id}/>
      ))}
    </div>
  );
}

export default App;