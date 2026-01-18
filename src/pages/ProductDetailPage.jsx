import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductDetailPage.css';

// Sample product data - in a real app, you would fetch this from an API
// This includes all variants from HomePage categories
const sampleProducts = [
  // Men's Fashion - Casual Shirts
  { id: 1, name: 'Casual Shirt - Classic Blue', category: 'Men\'s Fashion', image: '/photos/casual_shirt.jpeg', price: 899.00, originalPrice: 1299.00, description: 'Comfortable and stylish casual shirt for men.' },
  { id: 101, name: 'Casual Shirt - White Stripe', category: 'Men\'s Fashion', image: '/photos/casual_shirt.jpeg', price: 899.00, originalPrice: 1299.00, description: 'Comfortable and stylish casual shirt for men with white stripe pattern.' },
  { id: 102, name: 'Casual Shirt - Navy Blue', category: 'Men\'s Fashion', image: '/photos/casual_shirt.jpeg', price: 949.00, originalPrice: 1299.00, description: 'Comfortable and stylish casual shirt in navy blue.' },
  { id: 103, name: 'Casual Shirt - Checkered', category: 'Men\'s Fashion', image: '/photos/casual_shirt.jpeg', price: 879.00, originalPrice: 1299.00, description: 'Comfortable and stylish checkered casual shirt for men.' },
  
  // Men's Fashion - Jeans
  { id: 2, name: 'Straight Fit Jeans - Classic', category: 'Men\'s Fashion', image: '/photos/mens_jeans.jpeg', price: 1299.00, originalPrice: 1799.00, description: 'Classic denim jeans for a perfect fit.' },
  { id: 201, name: 'Straight Fit Jeans - Dark Wash', category: 'Men\'s Fashion', image: '/photos/mens_jeans.jpeg', price: 1299.00, originalPrice: 1799.00, description: 'Classic denim jeans in dark wash for a perfect fit.' },
  { id: 202, name: 'Straight Fit Jeans - Light Wash', category: 'Men\'s Fashion', image: '/photos/mens_jeans.jpeg', price: 1349.00, originalPrice: 1799.00, description: 'Classic denim jeans in light wash for a perfect fit.' },
  
  // Men's Footwear - Sports Shoes
  { id: 3, name: 'Sports Shoes - Running', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 2499.00, originalPrice: 3499.00, description: 'High-performance sports shoes for men.' },
  { id: 301, name: 'Sports Shoes - Training', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 2599.00, originalPrice: 3499.00, description: 'High-performance training shoes for men.' },
  { id: 302, name: 'Sports Shoes - Basketball', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 2699.00, originalPrice: 3499.00, description: 'High-performance basketball shoes for men.' },
  { id: 303, name: 'Sports Shoes - Walking', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 2399.00, originalPrice: 3499.00, description: 'Comfortable walking shoes for men.' },
  
  // Men's Fashion - Formal Shirts
  { id: 4, name: 'Formal Shirt - White', category: 'Men\'s Fashion', image: '/photos/formal_shirt.jpeg', price: 1099.00, originalPrice: 1499.00, description: 'Professional formal shirt for men.' },
  { id: 401, name: 'Formal Shirt - Light Blue', category: 'Men\'s Fashion', image: '/photos/formal_shirt.jpeg', price: 1099.00, originalPrice: 1499.00, description: 'Professional formal shirt in light blue for men.' },
  { id: 402, name: 'Formal Shirt - Classic Stripes', category: 'Men\'s Fashion', image: '/photos/formal_shirt.jpeg', price: 1149.00, originalPrice: 1499.00, description: 'Professional formal shirt with classic stripes.' },
  
  // Men's Fashion - Cargo Pants
  { id: 5, name: 'Cargo Pants - Olive', category: 'Men\'s Fashion', image: '/photos/mens_jeans.jpeg', price: 1399.00, originalPrice: 1899.00, description: 'Comfortable cargo pants in olive green.' },
  { id: 501, name: 'Cargo Pants - Khaki', category: 'Men\'s Fashion', image: '/photos/mens_jeans.jpeg', price: 1399.00, originalPrice: 1899.00, description: 'Comfortable cargo pants in khaki color.' },
  { id: 502, name: 'Cargo Pants - Black', category: 'Men\'s Fashion', image: '/photos/mens_jeans.jpeg', price: 1449.00, originalPrice: 1899.00, description: 'Comfortable cargo pants in black.' },
  
  // Men's Footwear - Running Shoes
  { id: 6, name: 'Running Shoes - Black', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 2299.00, originalPrice: 3299.00, description: 'High-performance running shoes in black.' },
  { id: 601, name: 'Running Shoes - White', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 2299.00, originalPrice: 3299.00, description: 'High-performance running shoes in white.' },
  { id: 602, name: 'Running Shoes - Grey', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 2399.00, originalPrice: 3299.00, description: 'High-performance running shoes in grey.' },
  
  // Women's Fashion - Summer Dresses
  { id: 7, name: 'Summer Dress - Floral', category: 'Women\'s Fashion', image: '/photos/Summer_Dress.jpeg', price: 1299.00, originalPrice: 1799.00, description: 'Light and comfortable summer dress with floral pattern.' },
  { id: 701, name: 'Summer Dress - Striped', category: 'Women\'s Fashion', image: '/photos/Summer_Dress.jpeg', price: 1299.00, originalPrice: 1799.00, description: 'Light and comfortable summer dress with stripes.' },
  { id: 702, name: 'Summer Dress - Solid', category: 'Women\'s Fashion', image: '/photos/Summer_Dress.jpeg', price: 1249.00, originalPrice: 1799.00, description: 'Light and comfortable solid color summer dress.' },
  { id: 703, name: 'Summer Dress - Printed', category: 'Women\'s Fashion', image: '/photos/Summer_Dress.jpeg', price: 1349.00, originalPrice: 1799.00, description: 'Light and comfortable printed summer dress.' },
  
  // Women's Accessories - Handbags
  { id: 8, name: 'Designer Handbag - Classic', category: 'Women\'s Accessories', image: '/photos/Designer_Handbag.jpeg', price: 1999.00, originalPrice: 2999.00, description: 'Elegant handbag for any occasion.' },
  { id: 801, name: 'Designer Handbag - Leather', category: 'Women\'s Accessories', image: '/photos/Designer_Handbag.jpeg', price: 2199.00, originalPrice: 2999.00, description: 'Premium leather handbag for any occasion.' },
  { id: 802, name: 'Designer Handbag - Tote', category: 'Women\'s Accessories', image: '/photos/Designer_Handbag.jpeg', price: 1899.00, originalPrice: 2999.00, description: 'Elegant tote handbag for any occasion.' },
  
  // Women's Footwear - Casual Sandals
  { id: 9, name: 'Casual Sandals - Beige', category: 'Women\'s Footwear', image: '/photos/Casual_Sandals.jpeg', price: 799.00, originalPrice: 1199.00, description: 'Stylish sandals for women in beige.' },
  { id: 901, name: 'Casual Sandals - Black', category: 'Women\'s Footwear', image: '/photos/Casual_Sandals.jpeg', price: 799.00, originalPrice: 1199.00, description: 'Stylish sandals for women in black.' },
  { id: 902, name: 'Casual Sandals - Brown', category: 'Women\'s Footwear', image: '/photos/Casual_Sandals.jpeg', price: 849.00, originalPrice: 1199.00, description: 'Stylish sandals for women in brown.' },
  
  // Women's Fashion - Evening Gowns
  { id: 10, name: 'Evening Gown - Navy', category: 'Women\'s Fashion', image: '/photos/Evening_Gown.jpeg', price: 2999.00, originalPrice: 3999.00, description: 'Elegant evening gown for special occasions in navy.' },
  { id: 1001, name: 'Evening Gown - Red', category: 'Women\'s Fashion', image: '/photos/Evening_Gown.jpeg', price: 3099.00, originalPrice: 3999.00, description: 'Elegant evening gown for special occasions in red.' },
  { id: 1002, name: 'Evening Gown - Black', category: 'Women\'s Fashion', image: '/photos/Evening_Gown.jpeg', price: 2999.00, originalPrice: 3999.00, description: 'Elegant evening gown for special occasions in black.' },
  
  // Women's Accessories - Clutch Purses
  { id: 11, name: 'Clutch Purse - Silver', category: 'Women\'s Accessories', image: '/photos/Clutch_Purse.jpeg', price: 599.00, originalPrice: 899.00, description: 'Stylish clutch purse for evening events in silver.' },
  { id: 1101, name: 'Clutch Purse - Gold', category: 'Women\'s Accessories', image: '/photos/Clutch_Purse.jpeg', price: 649.00, originalPrice: 899.00, description: 'Stylish clutch purse for evening events in gold.' },
  { id: 1102, name: 'Clutch Purse - Black', category: 'Women\'s Accessories', image: '/photos/Clutch_Purse.jpeg', price: 599.00, originalPrice: 899.00, description: 'Stylish clutch purse for evening events in black.' },
  
  // Women's Footwear - Heeled Sandals
  { id: 12, name: 'Heeled Sandals - Black', category: 'Women\'s Footwear', image: '/photos/Heeled_Sandals.jpeg', price: 1199.00, originalPrice: 1699.00, description: 'Comfortable heeled sandals for women in black.' },
  { id: 1201, name: 'Heeled Sandals - Nude', category: 'Women\'s Footwear', image: '/photos/Heeled_Sandals.jpeg', price: 1199.00, originalPrice: 1699.00, description: 'Comfortable heeled sandals for women in nude.' },
  { id: 1202, name: 'Heeled Sandals - Red', category: 'Women\'s Footwear', image: '/photos/Heeled_Sandals.jpeg', price: 1249.00, originalPrice: 1699.00, description: 'Comfortable heeled sandals for women in red.' },
  
  // Ethnic Wear - Rajasthani Lehengas
  { id: 13, name: 'Rajasthani Lehenga - Red', category: 'Ethnic Wear', image: '/photos/rajasthani_base.jpeg', price: 3499.00, originalPrice: 4999.00, description: 'Traditional Rajasthani dress for women in red.' },
  { id: 1301, name: 'Rajasthani Lehenga - Blue', category: 'Ethnic Wear', image: '/photos/rajasthani_base.jpeg', price: 3599.00, originalPrice: 4999.00, description: 'Traditional Rajasthani dress for women in blue.' },
  { id: 1302, name: 'Rajasthani Lehenga - Pink', category: 'Ethnic Wear', image: '/photos/rajasthani_base.jpeg', price: 3499.00, originalPrice: 4999.00, description: 'Traditional Rajasthani dress for women in pink.' },
  { id: 1303, name: 'Rajasthani Lehenga - Green', category: 'Ethnic Wear', image: '/photos/rajasthani_base.jpeg', price: 3699.00, originalPrice: 4999.00, description: 'Traditional Rajasthani dress for women in green.' },
  
  // Ethnic Wear - Men's Kurta Sets
  { id: 14, name: 'Men\'s Kurta Set - White', category: 'Ethnic Wear', image: '/photos/rajasthani_men_dress.jpeg', price: 1999.00, originalPrice: 2799.00, description: 'Traditional kurta set for men in white.' },
  { id: 1401, name: 'Men\'s Kurta Set - Beige', category: 'Ethnic Wear', image: '/photos/rajasthani_men_dress.jpeg', price: 1999.00, originalPrice: 2799.00, description: 'Traditional kurta set for men in beige.' },
  { id: 1402, name: 'Men\'s Kurta Set - Blue', category: 'Ethnic Wear', image: '/photos/rajasthani_men_dress.jpeg', price: 2099.00, originalPrice: 2799.00, description: 'Traditional kurta set for men in blue.' },
  
  // Footwear - Traditional Juttis
  { id: 15, name: 'Traditional Juttis - Red', category: 'Footwear', image: '/photos/rajasthani_juti.jpeg', price: 499.00, originalPrice: 799.00, description: 'Traditional Rajasthani juttis in red.' },
  { id: 1501, name: 'Traditional Juttis - Golden', category: 'Footwear', image: '/photos/rajasthani_juti.jpeg', price: 549.00, originalPrice: 799.00, description: 'Traditional Rajasthani juttis in golden.' },
  { id: 1502, name: 'Traditional Juttis - Black', category: 'Footwear', image: '/photos/rajasthani_juti.jpeg', price: 499.00, originalPrice: 799.00, description: 'Traditional Rajasthani juttis in black.' },
  
  // Jewelry - Rajasthani Jewelry
  { id: 16, name: 'Rajasthani Jewelry - Set 1', category: 'Jewelry', image: '/photos/Rajasthani_jewelry.jpeg', price: 2499.00, originalPrice: 3499.00, description: 'Traditional Rajasthani jewelry set.' },
  { id: 1601, name: 'Rajasthani Jewelry - Set 2', category: 'Jewelry', image: '/photos/Rajasthani_jewelry.jpeg', price: 2599.00, originalPrice: 3499.00, description: 'Traditional Rajasthani jewelry set - premium collection.' },
  { id: 1602, name: 'Rajasthani Jewelry - Set 3', category: 'Jewelry', image: '/photos/Rajasthani_jewelry.jpeg', price: 2499.00, originalPrice: 3499.00, description: 'Traditional Rajasthani jewelry set - deluxe.' },
  
  // Footwear - Embroidered Mojris
  { id: 18, name: 'Embroidered Mojris - Gold', category: 'Footwear', image: '/photos/Embroidered_Mojris.jpeg', price: 599.00, originalPrice: 899.00, description: 'Beautiful embroidered mojris with gold thread.' },
  { id: 1801, name: 'Embroidered Mojris - Silver', category: 'Footwear', image: '/photos/Embroidered_Mojris.jpeg', price: 599.00, originalPrice: 899.00, description: 'Beautiful embroidered mojris with silver thread.' },
  { id: 1802, name: 'Embroidered Mojris - Multi-color', category: 'Footwear', image: '/photos/Embroidered_Mojris.jpeg', price: 649.00, originalPrice: 899.00, description: 'Beautiful embroidered mojris with multi-color thread.' },
  
  // Accessories - Leather Watches
  { id: 19, name: 'Leather Watch - Brown', category: 'Accessories', image: '/photos/Leather_Watch.jpeg', price: 1799.00, originalPrice: 2499.00, description: 'Classic leather watch for men in brown.' },
  { id: 1901, name: 'Leather Watch - Black', category: 'Accessories', image: '/photos/Leather_Watch.jpeg', price: 1799.00, originalPrice: 2499.00, description: 'Classic leather watch for men in black.' },
  { id: 1902, name: 'Leather Watch - Tan', category: 'Accessories', image: '/photos/Leather_Watch.jpeg', price: 1849.00, originalPrice: 2499.00, description: 'Classic leather watch for men in tan.' },
  
  // Jewelry - Silver Necklaces
  { id: 20, name: 'Silver Necklace - Classic', category: 'Jewelry', image: '/photos/silver-deer-heart-necklace.jpg', price: 2999.00, originalPrice: 3999.00, description: 'Elegant silver deer heart necklace.' },
  { id: 2001, name: 'Silver Necklace - Pendant', category: 'Jewelry', image: '/photos/silver-deer-heart-necklace.jpg', price: 3099.00, originalPrice: 3999.00, description: 'Elegant silver necklace with pendant.' },
  { id: 2002, name: 'Silver Necklace - Chain', category: 'Jewelry', image: '/photos/silver-deer-heart-necklace.jpg', price: 2999.00, originalPrice: 3999.00, description: 'Elegant silver chain necklace.' },
  
  // Fragrance - Premium Perfumes
  { id: 21, name: 'Premium Perfume - 50ml', category: 'Fragrance', image: '/photos/Premium_Perfume.jpeg', price: 899.00, originalPrice: 1299.00, description: 'Premium fragrance for all occasions - 50ml.' },
  { id: 2101, name: 'Premium Perfume - 100ml', category: 'Fragrance', image: '/photos/Premium_Perfume.jpeg', price: 1599.00, originalPrice: 2299.00, description: 'Premium fragrance for all occasions - 100ml.' },
  { id: 2102, name: 'Premium Perfume - Gift Set', category: 'Fragrance', image: '/photos/Premium_Perfume.jpeg', price: 2199.00, originalPrice: 3299.00, description: 'Premium fragrance gift set for all occasions.' },
  
  // Accessories - Sunglasses
  { id: 22, name: 'Sunglasses - Aviator', category: 'Accessories', image: '/photos/Sunglasses.jpeg', price: 599.00, originalPrice: 899.00, description: 'Stylish aviator sunglasses for protection and style.' },
  { id: 2201, name: 'Sunglasses - Wayfarer', category: 'Accessories', image: '/photos/Sunglasses.jpeg', price: 649.00, originalPrice: 899.00, description: 'Stylish wayfarer sunglasses for protection and style.' },
  { id: 2202, name: 'Sunglasses - Round', category: 'Accessories', image: '/photos/Sunglasses.jpeg', price: 599.00, originalPrice: 899.00, description: 'Stylish round sunglasses for protection and style.' },
  
  // Jewelry - Rings
  { id: 23, name: 'Ring - Silver', category: 'Jewelry', image: '/photos/Ring.jpeg', price: 1299.00, originalPrice: 1799.00, description: 'Beautiful silver ring for special occasions.' },
  { id: 2301, name: 'Ring - Gold Plated', category: 'Jewelry', image: '/photos/Ring.jpeg', price: 1399.00, originalPrice: 1799.00, description: 'Beautiful gold plated ring for special occasions.' },
  { id: 2302, name: 'Ring - Diamond', category: 'Jewelry', image: '/photos/Ring.jpeg', price: 1899.00, originalPrice: 2499.00, description: 'Beautiful diamond ring for special occasions.' },
  
  // Fragrance - Body Mist Sets
  { id: 24, name: 'Body Mist Set - 3 pcs', category: 'Fragrance', image: '/photos/perfume.jpg', price: 799.00, originalPrice: 1199.00, description: 'Body mist set with 3 fragrances.' },
  { id: 2401, name: 'Body Mist Set - 5 pcs', category: 'Fragrance', image: '/photos/perfume.jpg', price: 1199.00, originalPrice: 1799.00, description: 'Body mist set with 5 fragrances.' },
  { id: 2402, name: 'Body Mist Set - Gift Pack', category: 'Fragrance', image: '/photos/perfume.jpg', price: 1499.00, originalPrice: 2199.00, description: 'Body mist gift pack with premium fragrances.' },
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const product = sampleProducts.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/" className="back-to-home">Back to Home</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-category">{product.category}</p>
          {product.price && (
            <div className="product-price-section">
              <span className="product-price">₹{product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="product-original-price">₹{product.originalPrice.toFixed(2)}</span>
              )}
              {product.originalPrice && (
                <span className="product-discount">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>
          )}
          <p className="product-description">{product.description}</p>
          
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="quantity-input"
            />
          </div>

          <button 
            className={`add-to-cart-btn ${addedToCart ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
          </button>
          
          <div className="product-actions">
            <Link to="/cart" className="view-cart-link">View Cart</Link>
          <Link to="/" className="back-to-shop">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
