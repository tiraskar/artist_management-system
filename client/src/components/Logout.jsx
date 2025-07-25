import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/slices/authSlice';

const Logout = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    console.log('logut');

    dispatch(logout());
  }, [])
  return (
    <div />
  );
};

export default Logout;
