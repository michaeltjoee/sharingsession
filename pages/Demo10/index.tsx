import { useCallback, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FieldParamData } from '../types';
import ClassForm from './ClassForm';
import { classRoomReducer, EnumClassRoomAction } from './reducer';
import StudentForm from './StudentForm';

function Demo10() {
  const [classRoomData, dispatchClassRoomData] = useReducer(classRoomReducer, {
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

  const handleChangeClassRoomData = useCallback((payload: Omit<FieldParamData, 'index'>) => {
    dispatchClassRoomData({ type: EnumClassRoomAction.EDIT_CLASSROOM, payload });
  }, []);

  const handleAddStudent = useCallback(() => {
    const newStudent = {
      firstName: '',
      lastName: '',
      address: { city: '', country: '' },
    };
    dispatchClassRoomData({ type: EnumClassRoomAction.ADD, payload: newStudent });
  }, []);

  const handleChangeStudentData = useCallback(
    (payload: FieldParamData) => {
      dispatchClassRoomData({ type: EnumClassRoomAction.EDIT_STUDENT_DATA, payload });
    },
    [dispatchClassRoomData]
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

export default Demo10;
