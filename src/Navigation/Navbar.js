import React,{useState} from 'react'
import '../Navigation/Navbar.css'
import { Link } from 'react-router-dom'
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import { navItems } from './NavItems';
import { Button } from './Button';
import { Dropdown } from './Dropdown';
export const Navbar = () => {
    const [dropdowns,showDropdown] = useState(false);
  return (
    <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                NATURE
                <ConnectWithoutContactRoundedIcon />
            </Link>
            <ul className='nav-items'>
                {
                    navItems.map((item)=>{
                            if(item.title==="Search")
                            {
                                
                                return(
                        <li key={item.id} className={item.cName} id="MYSERVICES"
                             onMouseEnter={()=>showDropdown(true)} 
                             onMouseLeave={()=>showDropdown(false)}>
                            <Link to={item.path}>{item.title}</Link>
                        { dropdowns&&  <Dropdown /> }
                        </li>
                        )
                            }

                        return(
                        <li key={item.id} className={item.cName}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                        )

                    })
                }
            </ul>
            <Button />
        </nav>
      
    </>
  )
}
