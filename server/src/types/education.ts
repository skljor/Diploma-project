type Education = {
    educationID: number,
    headName: string,
    lawAdress: string,
    realAdress: string,
    name: string,
    phone: string,
    stPhone: string,
    mail: string,
    [index: string]: string| number | undefined | null
};

export { Education };