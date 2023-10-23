type SubOrg = {
    subOrgID: number,
    headName: string,
    lawAdress: string,
    realAdress: string,
    name: string,
    phone: string,
    stPhone: string,
    mail: string,
    [index: string]: string| number | undefined | null
};

export { SubOrg };