import React from 'react';
import './Header.css';
import { NavLink,Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <Link to="/dashboard">
                            <img src="/imgs/assets/logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="menu-items">
                        <ul>
                            <li><NavLink to="/dashboard/foods" activeClassName="active">Foods</NavLink></li>
                            <li><NavLink to="/dashboard/people" activeClassName="active">People</NavLink></li>
                            <li><NavLink to="/dashboard/places" activeClassName="active">Places</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
