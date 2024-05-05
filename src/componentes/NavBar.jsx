import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <>
      <Link to="/" className="navbar-brand">Olympian Tech Hub</Link>
      <div className='Categorias'>
        <Link to="/category/1">Dispositivos Móviles</Link>
        <Link to="/category/2">Electrodomésticos y Tecnología para el Hogar</Link>
        <Link to="/category/3">Computadoras y Accesorios</Link>
      </div>
      <CartWidget />
    </>
  );
}
