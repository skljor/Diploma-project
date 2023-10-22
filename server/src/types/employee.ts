type Employee = {
  employeeID: number;
  firstName: string;
  middleName: string;
  lastName: string;
  jobTitle: string;
  structureCode: string;
  schedule: string | null;
  phone: string;
  mail: string;
  [index: string]: string | number | undefined | null;
}


export { Employee }