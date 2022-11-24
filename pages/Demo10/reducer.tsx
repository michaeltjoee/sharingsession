import { ClassRoomData, Person } from '../types';

export type ClassRoomActionType = 'ADD' | 'EDIT_CLASSROOM' | 'EDIT_STUDENT_DATA';

export interface ClassRoomAction {
  type: ClassRoomActionType;
  payload: Record<string, unknown>;
}

export const EnumClassRoomAction: { [key in ClassRoomActionType]: ClassRoomActionType } = {
  ADD: 'ADD',
  EDIT_CLASSROOM: 'EDIT_CLASSROOM',
  EDIT_STUDENT_DATA: 'EDIT_STUDENT_DATA',
};

export function classRoomReducer(state: ClassRoomData, action: ClassRoomAction): ClassRoomData {
  switch (action.type) {
    case EnumClassRoomAction.ADD:
      const students = [...state.students, action.payload as Person];
      return { ...state, students };

    case EnumClassRoomAction.EDIT_CLASSROOM: {
      const { name, value } = action.payload as Record<string, string>;
      return { ...state, [name]: value };
    }

    case EnumClassRoomAction.EDIT_STUDENT_DATA: {
      const { index, name, value } = action.payload;
      const targetStudent = state.students.find((_, i) => i === index);

      if (targetStudent) {
        const newValue = { ...targetStudent, [name as string]: value };

        const result = [...state.students];
        result[index as number] = newValue;

        return { ...state, students: result };
      }
      return state;
    }

    default:
      return state;
  }
}
