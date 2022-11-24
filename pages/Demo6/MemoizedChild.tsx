import { Dispatch, memo, SetStateAction } from 'react';
import { Person } from '../types';

interface MemoizedChildProps {
  person: Person;
  onChangePersonData: Dispatch<SetStateAction<Person>>;
}

function MemoizedChild({ person, onChangePersonData }: MemoizedChildProps) {
  const handleChangePersonData = () => {
    onChangePersonData({
      firstName: 'New name',
      lastName: 'New last name',
      address: {
        city: 'new city',
        country: 'new country',
      },
    });
  };

  return (
    <div>
      Memoized child data: {JSON.stringify(person)} <br />
      <button onClick={handleChangePersonData}>Click to change data</button>
    </div>
  );
}

export default memo(MemoizedChild);
