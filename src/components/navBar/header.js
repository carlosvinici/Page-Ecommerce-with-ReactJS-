import { useState } from 'react'
import ShoppingCart from './cart'
import './header.scss'


export default function Header(props) {
    const [modalCart, setModalCart] = useState(false);


    return(
        <>
            <section className="header-container">
                <img className="img-logo" alt="logo da loja" src={require('../../assets/img-icons/logo.svg').default} />
                <input type='search' placeholder="Qual jogo está procurando?"/>
                <div onClick={() => {setModalCart(!modalCart)}}>
                    <img className="img-cart" alt="carrinho de compras" src={require('../../assets/img-icons/cart-icon.svg').default}/>
                </div>
            </section>
            <ShoppingCart toggle={modalCart} products={props}/> 
        </>

    )
}

