import Products from './products.json'
import './styleData.css'

export function Games() {
/*   function AddShoppingList(id){
    console.log(`passei por aqui pelo id${id}`)
  } */
  return (
    <div className="styleComponentGames">
      { Products.map(post => { 
        return(
          <div className="cards">
              <h1>{ post.name}</h1>
              <img alt={post.image} src={require(`../../assets/img-games/${post.image}`).default} />
              <div className="priceAndButton">
                <h2>{ post.price } $</h2>
                <button>+</button>
              </div>
          </div>
        )
      })}
    </div>
  )
};
