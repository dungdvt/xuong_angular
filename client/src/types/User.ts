export type User = {
  _id: string;
  email: string;
  role: string;
  username: string;
};

export type RegisterForm = {
  
  email: string;
  password: string;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type UserLogin = {
  token: string;
  user: {
    _id: string;
    email: string;
    role: string;
    username: string;
  };


};
export type UserRegister = {
  email: string;
  password: string;
}; 
