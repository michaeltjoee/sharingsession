import { memo } from 'react';
import { Person } from '../types';

interface MemoizedChildProps {
  person: Person;
}

function MemoizedChild({ person }: MemoizedChildProps) {
  return <div>Memoized child data: {JSON.stringify(person)}</div>;
}

export default memo(MemoizedChild);
