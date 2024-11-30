export interface ITour {
  name: string;
  description: string;
  tourOperator: string;
  price: string;
  img: string;
  id: string;
  type?: string;
  date?: string;
  createdAt?: string;
  avatar?: string;
  firstName?: string;
  lastName?: string;
  cardNumber?: string;
  birthDate?: string | null;
  age?: number | null;
  citizenship?: string | null;
}
