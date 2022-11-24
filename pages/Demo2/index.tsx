import { ChangeEvent, useState } from 'react';
import MemoizedChild from './MemoizedChild';

function Demo2() {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const firstName = 'John';
  const lastName = 'Doe';

  return (
    <div>
      <input value={inputValue} type='text' onChange={handleChangeInput} />
      <MemoizedChild firstName={firstName} lastName={lastName} />
    </div>
  );
}

export default Demo2;
