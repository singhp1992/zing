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
        return (
            <h1 className='outer-paper'>
                <h1>Home Page</h1>
                {products.map((product, index) =>
                    <h2 className="product-card">
                        <h1>
                            <p variant="headline" component="h2">
                                Product #{product.productNumber}
                            </p>
                        </h1>
                        <h1>
                            <Link to={`/products/${product.productNumber}`} style={{ textDecoration: 'none' }}>
                                {/* <Button
                                    size="small"
                                    color="secondary"
                                    variant="raised"
                                > Select
                                </Button> */}
                            </Link>
                        </h1>
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