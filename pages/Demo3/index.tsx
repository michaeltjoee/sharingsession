import { ChangeEvent, useState } from 'react';
import { Person } from '../types';
import MemoizedChild from './MemoizedChild';

function Demo3() {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
      city: 'Jakarta',
      country: 'China',
    },
  } as Person;

  return (
    <div>
      <input value={inputValue} type='text' onChange={handleChangeInput} />
      <MemoizedChild person={person} />
    </div>
  );
}

export default Demo3;
