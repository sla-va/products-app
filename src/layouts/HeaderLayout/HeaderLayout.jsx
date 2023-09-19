import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import './HeaderLayout.less';
import { useAuth } from '../../context/AuthContext';
export default function HeaderLayout() {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const loggedIn = auth?.user?.username;
  const handleButtonPress = () => {
    if (loggedIn) {
      auth.logout();
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <header className='header'>
        {location.pathname.includes('/products/') && (
          <Link to='/products' className='header--link'>
            Home
          </Link>
        )}
        <button className='header--button' onClick={handleButtonPress}>
          {loggedIn ? `Logout` : 'Login'}
        </button>
      </header>
      <Outlet />
    </>
  );
}
