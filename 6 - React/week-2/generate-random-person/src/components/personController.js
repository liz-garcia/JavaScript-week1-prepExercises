import React, { useState, useEffect } from 'react';
import Person from './person.js';

const PersonController = () => {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    try {
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
      const formattedPerson = {
        name: {
          first: data.results[0].name.first,
          last: data.results[0].name.last,
        },
        email: data.results[0].email,
      };
      setPerson(formattedPerson);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  const handleButtonClick = () => {
    getPerson();
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Generate Random Person</button>
      <Person person={person} />
    </div>
  );
};

export default PersonController;
