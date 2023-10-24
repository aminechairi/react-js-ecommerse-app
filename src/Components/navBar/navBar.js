import './navBar.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const auth = true;

const NavBar = () => {

  return (
    <div className='navBar'>
      <div className='container'>
        <div className='ab'>
          <div className='logo'>
            <img src={require('../../imgs/logo.png')} alt='' />
            <h1 className='title'>dianomi</h1>
          </div>
          <div className='search'>
            <form>
              <input
                className='input_search'
                type='text'
                placeholder='search' />
              <button className='button_input_search' type='submit'>
                <SearchIcon />
              </button> 
            </form>
          </div>
          {
            auth === true ?
            <div className='cart_profile'>
              <div className='buttons'>
                <button className='button'>
                  <ShoppingCartCheckoutIcon />
                </button>
                <button className='button'>
                  <PersonIcon />
                </button>
              </div>
              <div className='icon'>
                <MenuIcon />
              </div>
            </div>
            :
            <div className='logIn_signIn'>
              <div className='buttons'>
                <button className='button'>
                  log in
                </button>
                <button className='button'>
                  sign in
                </button>
              </div>
              <div className='icon'>
                <MenuIcon />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;