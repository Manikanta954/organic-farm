import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress
import './Home.css';

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');
      const snapshot = await getDocs(productsCollection);
      const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsData);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    // Trigger animation or feedback (e.g., toast notification)
  };

  return (
    <div className="home">
      {isLoading ? (
        <div className="loading">
          <CircularProgress /> {/* Replace loading text with CircularProgress */}
        </div>
      ) : (
        products.map((product, index) => (
          <div key={product.id} className={`product-card ${index % 2 === 0 ? 'stagger-left' : 'stagger-right'}`}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="quantity">
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" defaultValue="6" />
              </div>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
