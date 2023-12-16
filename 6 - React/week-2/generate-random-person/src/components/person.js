import React from 'react';

const Person = ({ person }) => {
  if (!person) {
    return null;
  }

  const { first, last } = person.name;
  const { email } = person;

  return (
    <div>
      <ul>
        <li>First Name: {first}</li>
        <li>Last Name: {last}</li>
        <li>Email: {email}</li>
      </ul>
    </div>
  );
};

export default Person;
