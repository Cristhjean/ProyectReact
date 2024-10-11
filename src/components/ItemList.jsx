import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <div className="card-container">
            {products.length > 0 ? (
                products.map((product) => (
                    <div className="col-md-4 col-sm-6 col-xs-12 mb-4" key={product.id}>
                        <Item product={product} />
                    </div>
                ))
            ) : (
                <div className="col-12">
                    <h4>No se encontraron productos.</h4>
                </div>
            )}
        </div>
    );
};

ItemList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            detail: PropTypes.string,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ItemList;