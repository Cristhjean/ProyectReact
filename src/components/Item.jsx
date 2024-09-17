import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Item = ({ product }) => {
return (
    <div className="col-md-4 mb-4">  
    <div className="card h-100 text-center">  
        <img src={product.image} className="card-img-top" alt={product.name} />  
        <div className="card-body">
        <h5 className="card-title">{product.name}</h5> 
        <p className="card-text">${product.price}</p>  
        <Link to={`/item/${product.id}`} className="btn btn-primary">
            Ver detalle
          </Link>  {/* Enlace al detalle */}
        </div>
    </div>
    </div>
);
};

export default Item;