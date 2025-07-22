export interface User {
  id?: number;
  email: string;
  passwordHash?: string;
  firstName: string;
  lastName: string;
  role: string;
  enabled?: boolean;
  createdAt?: Date;
}