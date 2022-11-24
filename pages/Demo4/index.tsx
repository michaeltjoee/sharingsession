import { ChangeEvent, useState } from 'react';
import MemoizedChild from './MemoizedChild';

function Demo4() {
  // Save the object into state, never mutate
  const [personData, setPersonData] = useState({
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

  return (
    <div>
      <input value={inputValue} type='text' onChange={handleChangeInput} />
      <MemoizedChild person={personData} />
    </div>
  );
}

export default Demo4;
