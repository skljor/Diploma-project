type EmployQueryParams = {
  lastName?: string;
  jobTitle?: string;
  structureCode?: string;
  [index: string]: string | undefined;
}

export { EmployQueryParams };