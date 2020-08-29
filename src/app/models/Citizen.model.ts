export interface Citizen {
  id?: number;
  aadhaar: number;
  name: string;
  age: number;
  gender: 'M' | 'F';
  phone: number;
  email: string;
  profession: string;
  district: string;
  state: string;
  city: string;
  pincode: number;
  prevContracted: boolean;
  datePositive: string;
  dateNegative: string;
  hospitalName: string;
  currentlySuffering: boolean;
  disability: string;
}