import * as yup from 'yup';
export const signInDefault = {
  email: '',
  password: '',
};

export const signInSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});
