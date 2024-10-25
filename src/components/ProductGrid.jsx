import './ProductGrid.css'; // Ensure you import the CSS file
import image6 from '../images/image6.webp';
import image5 from '../images/image5.webp';
import image10 from '../images/image10.webp';
import image9 from '../images/image9.webp';

const ProductGrid = () => {
	const products = [
		{ id: 1, name: 'SETUP GAMER R7 3700X-RTX 4060 + 275F + HPG200', price: '$800.00', sale: false, image: image6 },
		{
			id: 2,
			name: 'SETUP GAMER R7 3700X-RTX 4060Ti 16Go + G274QPF E2 + HPG100',
			price: '$1400.00',
			salePrice: '$1300.00',
			originalPrice: '$2000.00',
			sale: true,
			image: image5
		},
		{
			id: 3,
			name: 'SETUP GAMER R7 3700X-RTX 3050 + HP27IFL + HPG200',
			price: '$500.00',
			salePrice: '$250.00',
				originalPrice: '$500.00',
			sale: true,
			image: image10
		},
		{ id: 4, name: 'SETUP GAMER R7 3700X-RX 580 + CL27FF + HPG200', price: '$3000.00', sale: false, image: image9 }
	];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
			{products.map((product) => (
				<div key={product.id} className="product-card border rounded-lg shadow-lg overflow-hidden">
					<img
						src={product.image}
						alt={product.name}
						className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
					/>
					<div className="product-info p-4">
						<h3 className="text-lg font-semibold">{product.name}</h3>
						<p className="text-gray-700">{product.price}</p>
						{product.sale && <p className="sale-price text-red-500">On Sale: {product.salePrice}</p>}
						<button className="buy-button mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Buy Now</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductGrid;
