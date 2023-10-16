type Organization = {
  id: string,
  contacts: Contacts,
  headName: string,
  lawAdress: string,
  realAdress: string,
  name: string,
  [index: string]: string | Contacts |undefined;
};

type Contacts = {
  phone: string,
  mail: string,
  stPhone?: string
}

type Organizations = Organization[];

export { Organization, Organizations };