import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
return (
    <nav style={styles.nav}>
    <div style={styles.logo}>
        <h1>LianShop</h1>
    </div>
    <ul style={styles.navLinks}>
        <li><a href="/">Home</a></li>
        <li><a href="/Remeras">Remeras</a></li>
        <li><a href="/Tasas">Tasas</a></li>
        <li><a href="/Cintas">Cintas</a></li>
    </ul>
    <CartWidget />
    </nav>
);
};

const styles = {
nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
},
logo: {
    fontSize: '24px',
},
navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
}
};

export default NavBar;