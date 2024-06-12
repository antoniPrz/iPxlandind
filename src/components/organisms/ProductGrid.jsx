
// import ProductCard from '../molecules/ProductCard';


// const ProductGrid = ({ products }) => (
//    <section className="products-section mt-8  mb-8">



//     <h2 className="text-2xl font-bold mb-4 text-primary-purple dark:text-dark-text">Nuestros Productos</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {products.map((product, index) => (
//         <ProductCard 
//           key={index} 
//           image={product.image} 
//           title={product.title} 
//           price={product.price} 
//           tag={product.tag} 
//         />
//       ))}
//     </div>
//   </section>
// );

// export default ProductGrid;


import PropTypes from 'prop-types';
import ProductCard from '../molecules/ProductCard';

const ProductGrid = ({ products }) => (
  <section className="products-section mt-8 mb-8 pt-20">
    <h2 className="text-3xl text-center font-bold mb-4 text-primary-purple dark:text-dark-text">Nuestros Productos</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard 
          key={index} 
          image={product.image} 
          title={product.title} 
          price={product.price} 
          tag={product.tag} 
        />
      ))}
    </div>
  </section>
);

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      tag: PropTypes.string
    })
  ).isRequired,
};

export default ProductGrid;
