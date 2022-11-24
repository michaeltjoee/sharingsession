import { useState } from 'react';

function Demo01() {
  const [displayResult, setDisplayResult] = useState(false);

  const object1 = {
    firstName: 'John',
    lastName: 'Doe',

    address: {
      city: 'Jakarta',
      country: 'Japan',
    },
  };

  const cloneObject1 = { ...object1 };
  cloneObject1.address.city = 'Tokyo';

  const handleShowAnswer = () => {
    setDisplayResult(true);
  };

  return (
    <div>
      object1: {displayResult && JSON.stringify(object1)}
      <br />
      cloneObject1: {displayResult && JSON.stringify(cloneObject1)}
      <br />
      <br />
      <button onClick={handleShowAnswer}>Show answer</button>
    </div>
  );
}

export default Demo01;
