import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { LogoutBtn, LOGO  } from './index.js';
import { useDispatch } from 'react-redux';
import {toggleGptSearchView} from '../store/gptSlice';
import { supportedLanguages } from './constant.js';
import { changeLanguage } from '../store/configSlice';
const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const showGpt = useSelector((state) => state.gpt.showGptSearch)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  const handleGptClick = () => {
    // toggle gpt search view
    dispatch(toggleGptSearchView());
  }

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
    <img className="w-44" src={LOGO} alt='netflix-logo' />
  
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
              <>
              {showGpt && <select className="p-2 bg-slate-700 text-white" onChange={handleLanguageChange}>
                {supportedLanguages.map((lang) => (
                  <option key={lang.Identifier} value={lang.Identifier}>{lang.Name}</option>
                

                ))}
              </select>}
              <li>
              <button onClick={handleGptClick} className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">Gpt search</button>
              </li>
               
              <li>
                <LogoutBtn />
              </li>
              </>
             
            )}
          </ul>
        </nav>

    </div>
    
    </>
  )
}

export default Header