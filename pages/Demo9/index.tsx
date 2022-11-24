import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ClassRoomData } from '../types';
import ClassForm from './ClassForm';
import StudentForm from './StudentForm';

function Demo8() {
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

  const handleAddStudent = useCallback(() => {
    const newStudent = {
      firstName: '',
      lastName: '',
      address: { city: '', country: '' },
    };

    const students = [...classRoomData.students, newStudent];
    setClassRoomData({ ...classRoomData, students });
  }, [classRoomData]);

  return (
    <div>
      <ClassForm name={classRoomData.name} subject={classRoomData.subject} onChange={setClassRoomData} />
      {classRoomData.students.map((studentData, index) => {
        return <StudentForm key={studentData.id} studentData={studentData} onChange={setClassRoomData} index={index} />;
      })}

      <button style={{ marginTop: '24px' }} type='button' onClick={handleAddStudent}>
        Add Students
      </button>
    </div>
  );
}

export default Demo8;
