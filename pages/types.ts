export type Address = {
  city: string;
  country: string;
};

export type Person = {
  id?: string;
  firstName: string;
  lastName: string;
  address: Address;
};

export type ClassRoomData = {
  name: string;
  subject: string;
  students: Array<Person>;
};

export type FieldParamData = { name: string; value: string; index: number };
