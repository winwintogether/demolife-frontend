export enum Gender {
  male = 'M',
  female = 'F'
}

export enum Smoker {
  nonSmoker = 'N',
  smoker = 'S',
  exSmoker = 'E'
}

export enum Education {
  no = 'no_matric',
  matric = 'matric',
  certificate = 'matric_certificate',
  '3yrDip' = 'matric_3_yr_diploma',
  '4yrDip' = 'matric_4_yr_diploma',
  degree3yr = 'degree_3_yr',
  degree4yr = 'degree_4_yr',
  degreePostGrad = 'degree_post_grad',
}

export type CoverOptionItem = {
  cover_amount: number;
  monthly_premium: 19.21;
}

export type LeadFormData = {
  first_name: string;
  last_name: string;
  email: string;
  cell_no: string;
  amount: number;
}