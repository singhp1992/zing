import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../actions/products'
import { Link } from 'react-router-dom'


class HomePage extends PureComponent {

    componentWillMount() {
        this.props.getProducts(this.props.match.params.id)
    }


    render(product, index, i) {
        const { products } = this.props

        //console.log(products)

        // for ( i = 0; i < products.length; i++) {
        //     console.log(products[i])
        // }

        return (
            <h1 className='outer-paper'>
                <p>Home Page</p>
                {/* {products.map((product, index) =>
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
                )} */}
            </h1>
        )

    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps, { getProducts })(HomePage)