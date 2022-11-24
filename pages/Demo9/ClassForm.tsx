import { ChangeEvent, Dispatch, memo, SetStateAction } from 'react';
import { ClassRoomData, FieldParamData, Person } from '../types';

interface ClassRoomFormProps {
  name: string;
  subject: string;
  onChange: Dispatch<SetStateAction<ClassRoomData>>;
}

function StudentForm({ name, subject, onChange }: ClassRoomFormProps) {
  const handleChangeStudentData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target || {};
    onChange((prevClassRoomData) => {
      return { ...prevClassRoomData, [name]: value };
    });
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
