import { ChangeEvent, useState } from 'react';
import { Person } from '../types';
import MemoizedChild from './MemoizedChild';

function Demo6() {
  // Save the object into state, never mutate
  const [personData, setPersonData] = useState<Person>({
    firstName: 'John',
    lastName: 'Doe',
    address: {
      city: 'Jakarta',
      country: 'China',
    },
  });

  // Input to demo memoized child component
  const [inputValue, setInputValue] = useState('');

  const handleChangePersonData = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input value={inputValue} type='text' onChange={handleChangePersonData} /> <br />
      <MemoizedChild person={personData} onChangePersonData={setPersonData} />
    </div>
  );
}

export default Demo6;
