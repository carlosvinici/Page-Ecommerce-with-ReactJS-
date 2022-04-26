import Products from './products.json'
import './styleData.css'




export function Games(props) {

  return (
    <div className="styleComponentGames">
      { Products.map(post => { 
        return(

          <div className="cards" key={ post.id }>
              <h1>{ post.name}</h1>
              <img alt={post.image} src={require(`../../assets/img-games/${post.image}`).default} />
              <div className="priceAndButton">
                <h2>{ post.price } $</h2>
                <button 
                  onClick={() => props.saveProduct(post)}
                >+</button>
              </div>
          </div>
           
        )
      })}
    </div>
  )
};

