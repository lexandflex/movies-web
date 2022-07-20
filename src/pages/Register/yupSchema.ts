import * as yup from 'yup';

export const passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/;
const minUserNameLength = 4;
const maxUserNameLength = 24;
const passMinLength = 8;

export const getPasswordSchema = ({ length = passMinLength, passReg = passRegExp } = {}) =>
  yup
    .string()
    .min(length)
    .required('Password is required!')
    .matches(
      passReg,
      `Must Contain at least ${length} Characters, One Uppercase, One Lowercase, One Number`,
    );

export const registerSchema = yup.object().shape({
  userName: yup
    .string()
    .min(minUserNameLength, `Username must be at least ${minUserNameLength} characters`)
    .max(maxUserNameLength, `Username must not exceed ${maxUserNameLength} characters`)
    .required('User Name is required!'),
  email: yup.string().email('Please enter correct email address').required('Email is required!'),
  password: getPasswordSchema(),
});
