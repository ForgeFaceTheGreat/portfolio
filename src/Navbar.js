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

    // Closes drop down so its not open if screen get bigger than smaller
    window.addEventListener("resize", function() {
        if (window.matchMedia("(min-width: 500px)").matches)
        {
          if (isMenuClicked) { updateMenu() }
        }
    })

    // Displayed content
    return <div>
            <nav className="nav">
            <Link to="https://github.com/ForgeFaceTheGreat/portfolio" target='_blank' className="site-title">Portfolio</Link>
           
           {/* Navbar links */}
            <ul>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/projects">Projects</CustomLink>
            </ul>

            {/* Burger menu lines */}
            <div className='burger-menu' onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>            
            </div>
        </nav>

        {/* Drop Down Menu */}
        <div className={menu_class}>
            <nav className="nav-responsive">
                <ul onClick={updateMenu}> {/* Close drop down when link is clicked */}
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