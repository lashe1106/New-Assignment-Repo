import './Product.css'
const Product = (props) => {
  return (
        <div className={`product ${props.theme}`}>
            <div className='product-image'>
                <img src={props.productUrl} alt="" />
            </div>
            <div className='product-content'>
                <h3>Name: <span>{props.productName}</span></h3>
                <h3>Description: <span>{props.productDescription}</span></h3>
                <h3>Price: <span>{props.productPrice}</span></h3>
            </div>
        </div>
    )
}

export default Product
