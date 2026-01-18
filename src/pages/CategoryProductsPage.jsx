import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import './CategoryProductsPage.css';

// Import category data structure from HomePage
// This would ideally come from a shared data source or API
const getAllCategories = () => {
  const mensSection = [
    {
      name: 'Casual Shirt',
      category: 'Men\'s Fashion',
      items: [
        { id: 1, name: 'Casual Shirt - Classic Blue', category: 'Men\'s Fashion', image: '/photos/casual_shirt.jpeg', price: 899.00, originalPrice: 1299.00 },
        { id: 101, name: 'Casual Shirt - White Stripe', category: 'Men\'s Fashion', image: '/photos/casual_shirt.jpeg', price: 899.00, originalPrice: 1299.00 },
        { id: 102, name: 'Casual Shirt - Navy Blue', category: 'Men\'s Fashion', image: '/photos/casual_shirt.jpeg', price: 949.00, originalPrice: 1299.00 },
        { id: 103, name: 'Casual Shirt - Checkered', category: 'Men\'s Fashion', image: '/photos/casual_shirt.jpeg', price: 879.00, originalPrice: 1299.00 },
      ]
    },
    {
      name: 'Straight Fit Jeans',
      category: 'Men\'s Fashion',
      items: [
        { id: 2, name: 'Straight Fit Jeans - Classic', category: 'Men\'s Fashion', image: '/photos/mens_jeans.jpeg', price: 1299.00, originalPrice: 1799.00 },
        { id: 201, name: 'Straight Fit Jeans - Dark Wash', category: 'Men\'s Fashion', image: '/photos/mens_jeans.jpeg', price: 1299.00, originalPrice: 1799.00 },
        { id: 202, name: 'Straight Fit Jeans - Light Wash', category: 'Men\'s Fashion', image: '/photos/mens_jeans.jpeg', price: 1349.00, originalPrice: 1799.00 },
      ]
    },
    {
      name: 'Sports Shoes',
      category: 'Men\'s Footwear',
      items: [
        { id: 3, name: 'Sports Shoes - Running', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 2499.00, originalPrice: 3499.00 },
        { id: 301, name: 'Sports Shoes - Training', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 2599.00, originalPrice: 3499.00 },
        { id: 302, name: 'Sports Shoes - Basketball', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 2699.00, originalPrice: 3499.00 },
        { id: 303, name: 'Sports Shoes - Walking', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 2399.00, originalPrice: 3499.00 },
      ]
    },
    {
      name: 'Formal Shirt',
      category: 'Men\'s Fashion',
      items: [
        { id: 4, name: 'Formal Shirt - White', category: 'Men\'s Fashion', image: '/photos/formal_shirt.jpeg', price: 1099.00, originalPrice: 1499.00 },
        { id: 401, name: 'Formal Shirt - Light Blue', category: 'Men\'s Fashion', image: '/photos/formal_shirt.jpeg', price: 1099.00, originalPrice: 1499.00 },
        { id: 402, name: 'Formal Shirt - Classic Stripes', category: 'Men\'s Fashion', image: '/photos/formal_shirt.jpeg', price: 1149.00, originalPrice: 1499.00 },
      ]
    },
    {
      name: 'Cargo Pants',
      category: 'Men\'s Fashion',
      items: [
        { id: 5, name: 'Cargo Pants - Olive', category: 'Men\'s Fashion', image: '/photos/mens_jeans.jpeg', price: 1399.00, originalPrice: 1899.00 },
        { id: 501, name: 'Cargo Pants - Khaki', category: 'Men\'s Fashion', image: '/photos/mens_jeans.jpeg', price: 1399.00, originalPrice: 1899.00 },
        { id: 502, name: 'Cargo Pants - Black', category: 'Men\'s Fashion', image: '/photos/mens_jeans.jpeg', price: 1449.00, originalPrice: 1899.00 },
      ]
    },
    {
      name: 'Running Shoes',
      category: 'Men\'s Footwear',
      items: [
        { id: 6, name: 'Running Shoes - Black', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 2299.00, originalPrice: 3299.00 },
        { id: 601, name: 'Running Shoes - White', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 2299.00, originalPrice: 3299.00 },
        { id: 602, name: 'Running Shoes - Grey', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 2399.00, originalPrice: 3299.00 },
      ]
    },
  ];

  const womensSection = [
    {
      name: 'Summer Dress',
      category: 'Women\'s Fashion',
      items: [
        { id: 7, name: 'Summer Dress - Floral', category: 'Women\'s Fashion', image: '/photos/Summer_Dress.jpeg', price: 1299.00, originalPrice: 1799.00 },
        { id: 701, name: 'Summer Dress - Striped', category: 'Women\'s Fashion', image: '/photos/Summer_Dress.jpeg', price: 1299.00, originalPrice: 1799.00 },
        { id: 702, name: 'Summer Dress - Solid', category: 'Women\'s Fashion', image: '/photos/Summer_Dress.jpeg', price: 1249.00, originalPrice: 1799.00 },
        { id: 703, name: 'Summer Dress - Printed', category: 'Women\'s Fashion', image: '/photos/Summer_Dress.jpeg', price: 1349.00, originalPrice: 1799.00 },
      ]
    },
    {
      name: 'Designer Handbag',
      category: 'Women\'s Accessories',
      items: [
        { id: 8, name: 'Designer Handbag - Classic', category: 'Women\'s Accessories', image: '/photos/Designer_Handbag.jpeg', price: 1999.00, originalPrice: 2999.00 },
        { id: 801, name: 'Designer Handbag - Leather', category: 'Women\'s Accessories', image: '/photos/Designer_Handbag.jpeg', price: 2199.00, originalPrice: 2999.00 },
        { id: 802, name: 'Designer Handbag - Tote', category: 'Women\'s Accessories', image: '/photos/Designer_Handbag.jpeg', price: 1899.00, originalPrice: 2999.00 },
      ]
    },
    {
      name: 'Casual Sandals',
      category: 'Women\'s Footwear',
      items: [
        { id: 9, name: 'Casual Sandals - Beige', category: 'Women\'s Footwear', image: '/photos/Casual_Sandals.jpeg', price: 799.00, originalPrice: 1199.00 },
        { id: 901, name: 'Casual Sandals - Black', category: 'Women\'s Footwear', image: '/photos/Casual_Sandals.jpeg', price: 799.00, originalPrice: 1199.00 },
        { id: 902, name: 'Casual Sandals - Brown', category: 'Women\'s Footwear', image: '/photos/Casual_Sandals.jpeg', price: 849.00, originalPrice: 1199.00 },
      ]
    },
    {
      name: 'Evening Gown',
      category: 'Women\'s Fashion',
      items: [
        { id: 10, name: 'Evening Gown - Navy', category: 'Women\'s Fashion', image: '/photos/Evening_Gown.jpeg', price: 2999.00, originalPrice: 3999.00 },
        { id: 1001, name: 'Evening Gown - Red', category: 'Women\'s Fashion', image: '/photos/Evening_Gown.jpeg', price: 3099.00, originalPrice: 3999.00 },
        { id: 1002, name: 'Evening Gown - Black', category: 'Women\'s Fashion', image: '/photos/Evening_Gown.jpeg', price: 2999.00, originalPrice: 3999.00 },
      ]
    },
    {
      name: 'Clutch Purse',
      category: 'Women\'s Accessories',
      items: [
        { id: 11, name: 'Clutch Purse - Silver', category: 'Women\'s Accessories', image: '/photos/Clutch_Purse.jpeg', price: 599.00, originalPrice: 899.00 },
        { id: 1101, name: 'Clutch Purse - Gold', category: 'Women\'s Accessories', image: '/photos/Clutch_Purse.jpeg', price: 649.00, originalPrice: 899.00 },
        { id: 1102, name: 'Clutch Purse - Black', category: 'Women\'s Accessories', image: '/photos/Clutch_Purse.jpeg', price: 599.00, originalPrice: 899.00 },
      ]
    },
    {
      name: 'Heeled Sandals',
      category: 'Women\'s Footwear',
      items: [
        { id: 12, name: 'Heeled Sandals - Black', category: 'Women\'s Footwear', image: '/photos/Heeled_Sandals.jpeg', price: 1199.00, originalPrice: 1699.00 },
        { id: 1201, name: 'Heeled Sandals - Nude', category: 'Women\'s Footwear', image: '/photos/Heeled_Sandals.jpeg', price: 1199.00, originalPrice: 1699.00 },
        { id: 1202, name: 'Heeled Sandals - Red', category: 'Women\'s Footwear', image: '/photos/Heeled_Sandals.jpeg', price: 1249.00, originalPrice: 1699.00 },
      ]
    },
  ];

  const trending = [
    {
      name: 'Rajasthani Lehenga',
      category: 'Ethnic Wear',
      items: [
        { id: 13, name: 'Rajasthani Lehenga - Red', category: 'Ethnic Wear', image: '/photos/rajasthani_base.jpeg', price: 3499.00, originalPrice: 4999.00 },
        { id: 1301, name: 'Rajasthani Lehenga - Blue', category: 'Ethnic Wear', image: '/photos/rajasthani_base.jpeg', price: 3599.00, originalPrice: 4999.00 },
        { id: 1302, name: 'Rajasthani Lehenga - Pink', category: 'Ethnic Wear', image: '/photos/rajasthani_base.jpeg', price: 3499.00, originalPrice: 4999.00 },
        { id: 1303, name: 'Rajasthani Lehenga - Green', category: 'Ethnic Wear', image: '/photos/rajasthani_base.jpeg', price: 3699.00, originalPrice: 4999.00 },
      ]
    },
    {
      name: 'Men\'s Kurta Set',
      category: 'Ethnic Wear',
      items: [
        { id: 14, name: 'Men\'s Kurta Set - White', category: 'Ethnic Wear', image: '/photos/rajasthani_men_dress.jpeg', price: 1999.00, originalPrice: 2799.00 },
        { id: 1401, name: 'Men\'s Kurta Set - Beige', category: 'Ethnic Wear', image: '/photos/rajasthani_men_dress.jpeg', price: 1999.00, originalPrice: 2799.00 },
        { id: 1402, name: 'Men\'s Kurta Set - Blue', category: 'Ethnic Wear', image: '/photos/rajasthani_men_dress.jpeg', price: 2099.00, originalPrice: 2799.00 },
      ]
    },
    {
      name: 'Traditional Juttis',
      category: 'Footwear',
      items: [
        { id: 15, name: 'Traditional Juttis - Red', category: 'Footwear', image: '/photos/rajasthani_juti.jpeg', price: 499.00, originalPrice: 799.00 },
        { id: 1501, name: 'Traditional Juttis - Golden', category: 'Footwear', image: '/photos/rajasthani_juti.jpeg', price: 549.00, originalPrice: 799.00 },
        { id: 1502, name: 'Traditional Juttis - Black', category: 'Footwear', image: '/photos/rajasthani_juti.jpeg', price: 499.00, originalPrice: 799.00 },
      ]
    },
    {
      name: 'Rajasthani Jewelry',
      category: 'Ethnic Wear',
      items: [
        { id: 16, name: 'Rajasthani Jewelry - Set 1', category: 'Jewelry', image: '/photos/Rajasthani_jewelry.jpeg', price: 2499.00, originalPrice: 3499.00 },
        { id: 1601, name: 'Rajasthani Jewelry - Set 2', category: 'Jewelry', image: '/photos/Rajasthani_jewelry.jpeg', price: 2599.00, originalPrice: 3499.00 },
        { id: 1602, name: 'Rajasthani Jewelry - Set 3', category: 'Jewelry', image: '/photos/Rajasthani_jewelry.jpeg', price: 2499.00, originalPrice: 3499.00 },
      ]
    },
    {
      name: 'Embroidered Mojris',
      category: 'Footwear',
      items: [
        { id: 18, name: 'Embroidered Mojris - Gold', category: 'Footwear', image: '/photos/Embroidered_Mojris.jpeg', price: 599.00, originalPrice: 899.00 },
        { id: 1801, name: 'Embroidered Mojris - Silver', category: 'Footwear', image: '/photos/Embroidered_Mojris.jpeg', price: 599.00, originalPrice: 899.00 },
        { id: 1802, name: 'Embroidered Mojris - Multi-color', category: 'Footwear', image: '/photos/Embroidered_Mojris.jpeg', price: 649.00, originalPrice: 899.00 },
      ]
    },
  ];

  const topRated = [
    {
      name: 'Leather Watch',
      category: 'Accessories',
      items: [
        { id: 19, name: 'Leather Watch - Brown', category: 'Accessories', image: '/photos/Leather_Watch.jpeg', price: 1799.00, originalPrice: 2499.00 },
        { id: 1901, name: 'Leather Watch - Black', category: 'Accessories', image: '/photos/Leather_Watch.jpeg', price: 1799.00, originalPrice: 2499.00 },
        { id: 1902, name: 'Leather Watch - Tan', category: 'Accessories', image: '/photos/Leather_Watch.jpeg', price: 1849.00, originalPrice: 2499.00 },
      ]
    },
    {
      name: 'Silver Necklace',
      category: 'Jewelry',
      items: [
        { id: 20, name: 'Silver Necklace - Classic', category: 'Jewelry', image: '/photos/silver-deer-heart-necklace.jpg', price: 2999.00, originalPrice: 3999.00 },
        { id: 2001, name: 'Silver Necklace - Pendant', category: 'Jewelry', image: '/photos/silver-deer-heart-necklace.jpg', price: 3099.00, originalPrice: 3999.00 },
        { id: 2002, name: 'Silver Necklace - Chain', category: 'Jewelry', image: '/photos/silver-deer-heart-necklace.jpg', price: 2999.00, originalPrice: 3999.00 },
      ]
    },
    {
      name: 'Premium Perfume',
      category: 'Fragrance',
      items: [
        { id: 21, name: 'Premium Perfume - 50ml', category: 'Fragrance', image: '/photos/Premium_Perfume.jpeg', price: 899.00, originalPrice: 1299.00 },
        { id: 2101, name: 'Premium Perfume - 100ml', category: 'Fragrance', image: '/photos/Premium_Perfume.jpeg', price: 1599.00, originalPrice: 2299.00 },
        { id: 2102, name: 'Premium Perfume - Gift Set', category: 'Fragrance', image: '/photos/Premium_Perfume.jpeg', price: 2199.00, originalPrice: 3299.00 },
      ]
    },
    {
      name: 'Sunglasses',
      category: 'Accessories',
      items: [
        { id: 22, name: 'Sunglasses - Aviator', category: 'Accessories', image: '/photos/Sunglasses.jpeg', price: 599.00, originalPrice: 899.00 },
        { id: 2201, name: 'Sunglasses - Wayfarer', category: 'Accessories', image: '/photos/Sunglasses.jpeg', price: 649.00, originalPrice: 899.00 },
        { id: 2202, name: 'Sunglasses - Round', category: 'Accessories', image: '/photos/Sunglasses.jpeg', price: 599.00, originalPrice: 899.00 },
      ]
    },
    {
      name: 'Ring',
      category: 'Jewelry',
      items: [
        { id: 23, name: 'Ring - Silver', category: 'Jewelry', image: '/photos/Ring.jpeg', price: 1299.00, originalPrice: 1799.00 },
        { id: 2301, name: 'Ring - Gold Plated', category: 'Jewelry', image: '/photos/Ring.jpeg', price: 1399.00, originalPrice: 1799.00 },
        { id: 2302, name: 'Ring - Diamond', category: 'Jewelry', image: '/photos/Ring.jpeg', price: 1899.00, originalPrice: 2499.00 },
      ]
    },
    {
      name: 'Body Mist Set',
      category: 'Fragrance',
      items: [
        { id: 24, name: 'Body Mist Set - 3 pcs', category: 'Fragrance', image: '/photos/perfume.jpg', price: 799.00, originalPrice: 1199.00 },
        { id: 2401, name: 'Body Mist Set - 5 pcs', category: 'Fragrance', image: '/photos/perfume.jpg', price: 1199.00, originalPrice: 1799.00 },
        { id: 2402, name: 'Body Mist Set - Gift Pack', category: 'Fragrance', image: '/photos/perfume.jpg', price: 1499.00, originalPrice: 2199.00 },
      ]
    },
  ];

  return [...mensSection, ...womensSection, ...trending, ...topRated];
};

const CategoryProductsPage = () => {
  const { categoryName } = useParams();
  const allCategories = getAllCategories();
  
  // Decode category name from URL (replace hyphens with spaces)
  const decodedCategoryName = decodeURIComponent(categoryName).replace(/-/g, ' ');
  
  // Find the category by matching name
  const category = allCategories.find(cat => 
    cat.name.toLowerCase() === decodedCategoryName.toLowerCase()
  );

  if (!category) {
    return (
      <div className="app-root">
        <Navbar />
        <div className="category-not-found">
          <h2>Category not found</h2>
          <Link to="/" className="back-to-home">Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const products = category.items || [];

  return (
    <div className="app-root">
      <Navbar />
      <div className="category-products-page">
        <div className="page-header">
          <h1>{category.name}</h1>
          <p className="category-description">{category.category} - {products.length} products available</p>
        </div>
        
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="back-to-home-section">
          <Link to="/" className="back-to-home-btn">← Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryProductsPage;
