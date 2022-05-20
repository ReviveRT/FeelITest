import CartStyle from './personCart.module.css'

function personCart(props) {

   
    
  
return (
    <div className={CartStyle.container}>
            <div key={props.id} className={CartStyle.cart_block} >
                <img src={props.img} alt="" width="100%" height="85%" />
                <div className={CartStyle.subtitle}>
                    <h3>{props.name}</h3>
                    <p>{props.rolename}</p>
                </div>
            </div>
    </div>
  )
}

export default personCart


