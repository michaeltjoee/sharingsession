import { memo } from 'react';

interface MemoizedChildProps {
  firstName: string;
  lastName: string;
}

function MemoizedChild({ firstName, lastName }: MemoizedChildProps) {
  return (
    <div>
      firstName: {firstName}
      <br /> lastName: {lastName}
    </div>
  );
}

export default memo(MemoizedChild);
