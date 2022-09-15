import { CoverOptionItem, Education, Gender, Smoker } from './main';

export type Premium = {
  account_id: string;
  product_code: string;
  age: number;
  gender: Gender;
  smoker: Smoker;
  income_gross_monthly: number,
  education: Education,
  campaign_id: string;
  cover_amount: number;
  step: number;
}

export type PremiumResponse = {
  version: string;
  product_code: string;
  cover_amount: number;
  monthly_premium: number;
  cover_options: CoverOptionItem[];
}

export type Lead = {
  account_id: string;
  campaign_id: string;
  provider: {
    id: string;
  },
  first_name: string;
  last_name: string;
  email: string;
  cell_no: string;
  query: {
    age: number;
    cover_amount: number;
    education: string;
    gender: Gender,
    income_gross_monthly: number,
    product_code: string;
    smoker: Smoker;
  }
}