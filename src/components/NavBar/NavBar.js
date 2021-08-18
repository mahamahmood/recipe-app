import React from 'react';
import '../NavBar/NavBar.css'

function NavBar() {
    return (
        <div>
            <ul className="navBar">
                <li className="navItem"><a href="/recipes">Recipes</a></li>
                <li className="navItem"><a href="/create-recipe">Create a Recipe</a></li>
                <li className="navItem"><a href="#">Dashboard</a></li>
                <li className="navItem"><a href="#">Log In</a></li>
                <li className="navItem"><a href="#">Sign Up</a></li>
            </ul>
        </div>
    );
};

export default NavBar;