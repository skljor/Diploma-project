type Employ = {
  [index: string]: string | Contacts | undefined;
  id: string;
  fullname: string;
  jobTitle: string;
  contacts: Contacts;
  secondname: string;
  structureCode: string;
  schedule?: string;
}

type Contacts = {
  phone: string;
  mail: string
}

export { Employ }