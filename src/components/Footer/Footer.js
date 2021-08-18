import React from 'react';
import '../Footer/Footer.css'

function Footer() {
    return (
        <div>
            <ul className="footerNavBar">
                <li className="footerNavItem"><a href="/recipes">Recipes</a></li>
                <li className="footerNavItem"><a href="/create-recipe">Create a Recipe</a></li>
                <li className="footerNavItem"><a href="#">Dashboard</a></li>
                <li className="footerNavItem"><a href="/fruits">Log In</a></li>
                <li className="footerNavItem"><a href="#">Sign Up</a></li>
            </ul>
        </div>
    );
};

export default Footer;