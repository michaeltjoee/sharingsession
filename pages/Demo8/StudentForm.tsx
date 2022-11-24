import { ChangeEvent, memo } from 'react';
import { FieldParamData, Person } from '../types';

interface StudentFormProps {
  index: number;
  studentData: Person;
  onChange: (value: FieldParamData) => void;
}

function StudentForm({ index, studentData, onChange }: StudentFormProps) {
  const handleChangeStudentData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target || {};
    onChange({ name, value, index });
  };

  return (
    <>
      <br />
      <input name='firstName' value={studentData.firstName} onChange={handleChangeStudentData} />
      <input name='lastName' value={studentData.lastName} onChange={handleChangeStudentData} />
      <br />
    </>
  );
}

export default memo(StudentForm);
