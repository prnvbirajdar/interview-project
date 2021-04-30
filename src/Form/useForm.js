import { useState } from 'react';

export default function useForm() {
  const [info, setInfo] = useState({
    name: '',
    password: '',
    email: ''
  });

  const [nameError, setNameError] = useState(undefined);
  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);

  const [successLogin, setSuccessLogin] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (info.name.trim().length < 4) {
      setNameError('Name should be atleast 3 characters long');
    } else setNameError('');

    if (
      !info.email.toLowerCase().includes('@') ||
      info.email.trim().length < 5
    ) {
      setEmailError('Enter valid email');
    } else setEmailError('');

    if (info.password.trim().length < 7) {
      setPasswordError('Password should be atleast 6 characters long');
    } else setPasswordError('');

    if (nameError === '' && emailError === '' && passwordError === '') {
      setSuccessLogin(true);
    } else {
      setSuccessLogin(false);
    }
  };

  return {
    handleChange,
    handleSubmit,
    info,
    nameError,
    emailError,
    passwordError,
    successLogin
  };
}
