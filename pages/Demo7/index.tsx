import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FieldParamData, Person } from '../types';
import ClassForm from './ClassForm';
import StudentForm from './StudentForm';

type ClassRoomData = {
  name: string;
  subject: string;
  students: Array<Person>;
};

function Demo7() {
  const [classRoomData, setClassRoomData] = useState<ClassRoomData>({
    name: 'Classroom Name',
    subject: 'Classroom subject',
    students: [
      {
        id: uuidv4(),
        firstName: 'John',
        lastName: 'Doe',
        address: {
          city: 'London',
          country: 'England',
        },
      },
    ],
  });

  const handleChangeClassRoomData = ({ name, value }: Omit<FieldParamData, 'index'>) => {
    setClassRoomData({ ...classRoomData, [name]: value });
  };

  const handleAddStudent = useCallback(() => {
    const newStudent = {
      firstName: '',
      lastName: '',
      address: { city: '', country: '' },
    };

    const students = [...classRoomData.students, newStudent];
    setClassRoomData({ ...classRoomData, students });
  }, [classRoomData]);

  const handleChangeStudentData = useCallback(
    ({ name, value, index }: FieldParamData) => {
      const targetStudent = classRoomData.students.find((_, i) => i === index);

      if (targetStudent) {
        const newValue = { ...targetStudent, [name]: value };

        const result = [...classRoomData.students];
        result[index] = newValue;

        setClassRoomData({ ...classRoomData, students: result });
      }
    },
    [classRoomData]
  );

  return (
    <div>
      <ClassForm name={classRoomData.name} subject={classRoomData.subject} onChange={handleChangeClassRoomData} />
      {classRoomData.students.map((studentData, index) => {
        return <StudentForm key={studentData.id} studentData={studentData} onChange={handleChangeStudentData} index={index} />;
      })}

      <button style={{ marginTop: '24px' }} type='button' onClick={handleAddStudent}>
        Add Students
      </button>
    </div>
  );
}

export default Demo7;
