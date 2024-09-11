import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/slices/authSlice';

const Logout = () => {

  const dispatch = useDispatch();
  dispatch(logout());
  return (
    <div />
  );
};

export default Logout;
