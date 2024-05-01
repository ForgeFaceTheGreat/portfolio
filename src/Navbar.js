import { useState } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import "./styles/Navbar.css"

export default function Navbar()
{
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }

        setIsMenuClicked(!isMenuClicked)
    }

    return <div>
            <nav className="nav">
            <Link to="https://github.com/ForgeFaceTheGreat/portfolio" target='_blank' className="site-title">Portfolio</Link>
           
            <ul>
                <CustomLink to="/portfolio/home">Home</CustomLink>
                <CustomLink to="/portfolio/about">About</CustomLink>
                <CustomLink to="/portfolio/projects">Projects</CustomLink>
            </ul>

            <div className='burger-menu' onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>            
            </div>
        </nav>

        {/* Drop Down Menu */}
        <div className={menu_class}>
            <nav className="nav-responsive">
                <ul>
                    <CustomLink to="/home">Home</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/projects">Projects</CustomLink>
                </ul>
            </nav>
        </div>
    </div>
}

function CustomLink({ to, children, ...props })
{
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}