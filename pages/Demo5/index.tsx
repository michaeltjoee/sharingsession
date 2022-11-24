import { ChangeEvent, useState } from 'react';
import { Person } from '../types';
import MemoizedChild from './MemoizedChild';

function Demo5() {
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

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleChangePersonData = (data: Person) => {
    setPersonData(data);
  };

  return (
    <div>
      <input value={inputValue} type='text' onChange={handleChangeInput} /> <br />
      <MemoizedChild person={personData} onChangePersonData={handleChangePersonData} />
    </div>
  );
}

export default Demo5;
