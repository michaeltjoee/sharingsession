import { ChangeEvent, Dispatch, memo, SetStateAction } from 'react';
import { ClassRoomData, Person } from '../types';

interface StudentFormProps {
  index: number;
  studentData: Person;
  onChange: Dispatch<SetStateAction<ClassRoomData>>;
}

function StudentForm({ index, studentData, onChange }: StudentFormProps) {
  const handleChangeStudentData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target || {};

    onChange((prevClassRoomData) => {
      const targetStudent = prevClassRoomData.students.find((_, i) => i === index);
      if (targetStudent) {
        const newValue = { ...targetStudent, [name]: value };

        const result = [...prevClassRoomData.students];
        result[index] = newValue;

        return { ...prevClassRoomData, students: result };
      }
      return prevClassRoomData;
    });
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
