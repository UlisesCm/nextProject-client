import React, {useState} from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function Auth(props) {
  const { onCloseModal, setTitleModal } = props;
  const [showLogin, setShowLogin] = useState(true);

  const showLoginForm = () => {
    setTitleModal("Iniciar Sesion");
    setShowLogin(true);
  };
  const showRegisterForm = () => {
    setTitleModal("Crear un nuevo Usuario");
    setShowLogin(false);
  };

  return showLogin ? (
    <LoginForm showRegisterForm={showRegisterForm} onCloseModal={onCloseModal} />
  ) : (
    <RegisterForm showRegisterForm={showLoginForm} />
  );
  
}
