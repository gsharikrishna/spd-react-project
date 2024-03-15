import React,{useState} from 'react'
import { searchDropdown } from './NavItems';
import { Link } from 'react-router-dom';
import '../Navigation/Dropdown.css'
export const Dropdown = () => {
    const [dropdown,setDropdown] = useState(false);

  return (
    <div>
        <ul className={dropdown?"services-submenu-clicked":"services-submenu"}
        
         onClick={()=>setDropdown(!dropdown)}>
            {
                searchDropdown.map(item=>{
                    return(
                        <li key={item.id}>
                            <Link to={item.path} 
                            className={item.cName}
                            onClick={()=>setDropdown(false)}
                            >{item.title}</Link>
                        </li>
                    )
                })
            }
        </ul>

    </div>
  )
}
