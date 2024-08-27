import React from 'react';

const ItemListContainer = ({ mensaje }) => {
return (
    <div style={styles.contenedor}>
    <h2>{mensaje}</h2>
      {/* Aquí se agregarán los productos en el futuro */}
    </div>
);
};

const styles = {
    ItemListContainer: {
    borderRadius: '8px',
    textAlign: 'center',
}
};

export default ItemListContainer;