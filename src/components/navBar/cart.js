import './header.scss';

export default function ShoppingCart(props) {
    
    if (props.toggle) {
        const elementos = () => {return(
            <div className='modal-cart-container'>
                <h1>Carrinho de compras</h1>
            </div>
        )}


        return elementos();
    }
    else{
        return (
            <div className='modal-cart-container'>
                <h1>Carrinho de compras</h1>
                <p>Não nada aqui :(</p>
            </div> 
        )
    }
    
}