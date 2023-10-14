type Organization = {
  id: string,
  contacts: {
    phone: string,
    mail: string,
    stPhone?: string
  },
  headName: string,
  lawAdress: string,
  realAdress: string,
  name: string 
};

type Organizations = Organization[];

export { Organization, Organizations };