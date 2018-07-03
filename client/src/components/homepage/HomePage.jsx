import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../actions/products'
import { Link } from 'react-router-dom'


class HomePage extends PureComponent {

    componentWillMount() {
        this.props.getProducts()
    }


    render(product, index) {
        const { products } = this.props

        console.log(products)

        return (
            <h1 className='outer-paper'>
                <p>Home Page</p>
                {products.map((products, index) =>
                    <h2 className="product-card">
                        <p>
                            <p variant="headline" component="h2">
                                Product #{product.productNumber}
                            </p>
                        </p>
                        <p>
                            <Link to={`/products/${product.productNumber}`} style={{ textDecoration: 'none' }}>
                                <button class="button">Select</button>
                            </Link>
                        </p>
                    </h2>
                )}
            </h1>
        )

    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps, { getProducts })(HomePage)