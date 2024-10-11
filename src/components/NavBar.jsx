import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">LianShop</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/remeras" className="nav-link" activeClassName="active">Remeras</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/tasas" className="nav-link" activeClassName="active">Tasas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/cintas" className="nav-link" activeClassName="active">Cintas</NavLink>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;