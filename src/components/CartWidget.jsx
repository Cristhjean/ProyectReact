import React from 'react';

const CartWidget = () => {
return (
    <div style={styles.cartWidget}>
    <a href="/cart">🛒 Cart (0)</a>
    </div>
);
};

const styles = {
cartWidget: {
    fontSize: '18px',
}
};

export default CartWidget;