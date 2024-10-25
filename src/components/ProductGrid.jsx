import './ProductGrid.css'; // Ensure you import the CSS file

const ProductGrid = () => {
	const products = [
		{ id: 1, name: 'Fancy Product', price: '$80.00', sale: false, image: '/images/image1.jpg' },
		{
			id: 2,
			name: 'Special Item',
			price: '$18.00',
			salePrice: '$18.00',
			originalPrice: '$20.00',
			sale: true,
			image: '/images/image2.jpeg'
		},
		{
			id: 3,
			name: 'Sale Item',
			price: '$25.00',
			salePrice: '$25.00',
			originalPrice: '$50.00',
			sale: true,
			image: '/images/image3.jpeg'
		},
		{ id: 4, name: 'Popular Item', price: '$40.00', sale: false, image: '/images/image4.jpeg' }
	];

	return (
		<div className="product-grid">
			{products.map((product) => (
				<div key={product.id} className="product-card">
					<img
						src={product.image}
						alt={product.name}
						style={{ width: '450px', height: '399px' }} // Set the size if needed
					/>
					<div className="product-info">
						<h3>{product.name}</h3>
						<p>{product.price}</p>
						{product.sale && <p className="sale-price">On Sale: {product.salePrice}</p>}
						<button className="buy-button">Buy Now</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductGrid;
