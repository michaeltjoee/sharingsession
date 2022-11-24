import { ChangeEvent, memo } from 'react';
import { FieldParamData, Person } from '../types';

interface ClassRoomFormProps {
  name: string;
  subject: string;
  onChange: (value: Omit<FieldParamData, 'index'>) => void;
}

function StudentForm({ name, subject, onChange }: ClassRoomFormProps) {
  const handleChangeStudentData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target || {};
    onChange({ name, value });
  };

  return (
    <>
      <label>
        Classroom Name:
        <br />
        <input name='name' value={name} type='text' onChange={handleChangeStudentData} />
      </label>
      <br /> <br />
      <label>
        Classroom Subject:
        <br />
        <input name='subject' value={subject} type='text' onChange={handleChangeStudentData} />
      </label>
      <br />
      <br />
    </>
  );
}

export default memo(StudentForm);
