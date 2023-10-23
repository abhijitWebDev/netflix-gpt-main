import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { LogoutBtn  } from './index.js';
const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
    name: "Browse",
    slug: "/browse",
    active: authStatus,
  }
 
  ]
  return (
    <>
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
    <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='netflix-logo' />
  
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>

    </div>
    
    </>
  )
}

export default Header