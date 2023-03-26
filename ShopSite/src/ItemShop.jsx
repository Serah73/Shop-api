import PropTypes from 'prop-types'
import './ItemShop.css'

export const ItemShop = ({ title, description, price, stock }) => {
  return (
        <div className='card'>
            <figure>
                <img src="" alt="t-shirt"/>
            </figure>
            <section className='details'>
                <div className='min-details'>
                    <h1>{ title }<span>{ description }</span></h1>
                    <h1 className='price'>{ price }€</h1>
                </div>

                <div className='details-extended'>
                    <h1>Stock<span>{ stock }</span></h1>
                </div>
                <a href="#" className='btn'>add to cart</a>
            </section>
        </div>
    )
}

ItemShop.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

ItemShop.defaultProps = {
    stock: "Not available",
}