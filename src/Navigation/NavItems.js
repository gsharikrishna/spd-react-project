// 1)Home
// 2)About
// 3)search
// 4)cart logo
// 5)TODO list
// 6)Register
// 7)Login
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export const navItems=[
    {
        id:1,
        title:'Home',
        path:'/',
        cName:'nav-item'
    },
    {
        id:2,
        title:'About',
        path:'/about',
        cName:'nav-item'
    },
    {
        id:3,
        title:'Search',
        path:'/search',
        cName:'nav-item'
    },
    {
        id:4,
        title:'Todo',
        path:'/todo',
        cName:'nav-item'
    },
    {
        id:5,
        title:<AddShoppingCartIcon />,
        path:'/cartlogo',
        cName:'nav-item'
    },
  
]
export const searchDropdown=[
    {
        id:1,
        title:'vegetables',
        path:'/vegetables',
        cName:'submenu-item'
    },
    {
        id:2,
        title:'Friuts',
        path:'/fruits',
        cName:'submenu-item'
    }
]