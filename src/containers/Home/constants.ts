import { Education, Gender, Smoker } from 'types/main';

export const genders = [
  {
    value: Gender.male,
    label: 'Male'
  },
  {
    value: Gender.female,
    label: 'Female'
  },
];

export const smokeStatus = [
  {
    value: Smoker.nonSmoker,
    label: 'Non-Smoker'
  },
  {
    value: Smoker.smoker,
    label: 'Smoker'
  },
  {
    value: Smoker.exSmoker,
    label: 'Ex-smoker'
  },
];

export const educations = [
  {
    value: Education.no,
    label: 'No Matric'
  },
  {
    value: Education.matric,
    label: 'Matric'
  },
  {
    value: Education.certificate,
    label: 'Matric Certificate'
  },
  {
    value: Education['3yrDip'],
    label: 'Matric 3YR Diploma'
  },
  {
    value: Education['4yrDip'],
    label: 'Matric 4YR Diploma'
  },
  {
    value: Education.degree3yr,
    label: 'Degree 3YR'
  },
  {
    value: Education.degree4yr,
    label: 'Degree 4YR'
  },
  {
    value: Education.degreePostGrad,
    label: 'Degree Post Grad'
  }
];