import React from 'react'
import { ReactTyped } from 'react-typed';
import './Navbar.css'
import Toggle from '../Toggle/Toggle';
import{Link} from 'react-scroll';
const Navbar = () => {
    return(
        <div className ="n-wrapper">
            <div className = "n-left">
                <div className = "n-name">
                     <ReactTyped
          className="n-name"
          strings={[
            "Samuel",
            "Ezebuiro",
            "Chidubem",
          ]}
          typeSpeed={40}
          backSpeed={50}
          showCursor={false}
          loop
          />
                </div>
            </div>
            <div className="toggles">
          <Toggle/>
            </div>

                <div className = "n-right">
                    <div className = "n-list">
                        <ul style = {{listStyleType:'circle'}}>
                            <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li>Home</li>
                            </Link>
                            <Link spy={true} to='Services' smooth={true}>
                            <li>Services</li>
                            </Link>
                            <Link spy={true} to='Experience' smooth={true}>
                            <li>Experience</li>
                            </Link>
                            <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                            </Link>
                            <Link spy={true} to='Testimonials' smooth={true}>
                            <li>Testimonials</li>
                            </Link>
                        </ul>

                    </div>
                    <button className="button n-button">
                        Contact 
                    </button>
                    </div>
        </div>
    );
}
export default Navbar