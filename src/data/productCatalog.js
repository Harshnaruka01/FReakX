const imageKeywordsByCollection = {
  'Casual Shirt': 'mens casual shirt',
  'Straight Fit Jeans': 'mens denim jeans',
  'Sports Shoes': 'mens athletic shoes',
  'Formal Shirt': 'mens formal shirt',
  'Cargo Pants': 'mens cargo pants',
  'Running Shoes': 'mens running shoes',
  'Summer Dress': 'women summer dress',
  'Designer Handbag': 'designer handbag',
  'Casual Sandals': 'women casual sandals',
  'Evening Gown': 'evening gown',
  'Clutch Purse': 'women clutch purse',
  'Heeled Sandals': 'women heeled sandals',
  'Rajasthani Lehenga': 'indian lehenga',
  "Men's Kurta Set": 'indian mens kurta',
  'Traditional Juttis': 'traditional juttis',
  'Rajasthani Jewelry': 'rajasthani jewelry',
  'Embroidered Mojris': 'embroidered mojris',
  'Leather Watch': 'leather wrist watch',
  'Silver Necklace': 'silver necklace jewelry',
  'Premium Perfume': 'luxury perfume bottle',
  'Sunglasses': 'fashion sunglasses',
  'Ring': 'luxury ring jewelry',
  'Body Mist Set': 'fragrance mist set'
};

const imageOverrides = {
  1: '/photos/Casual Shirt - Classic Blue.jpg',
  101: '/photos/Casual Shirt - White Stripe.jpg',
  102: '/photos/CasualShirt-ClassicBlue.jpg',
  103: '/photos/Casual Shirt - Checkered.jpg',
  2: '/photos/mens_jeans.jpeg',
  201: '/photos/Straight Fit Jeans - Dark Wash.jpg',
  202: '/photos/Straight Fit Jeans - Light Wash.jpg',
  3: '/photos/mens_shoes.jpeg',
  301: '/photos/Sneakers - Classic.jpg',
  302: '/photos/boots.jpg',
  303: '/photos/sandals.jpg',
  4: '/photos/Formal Shirt - White.jpg',
  401: '/photos/Formal Shirt - Light Blue.jpg',
  402: '/photos/Formal Shirt - Classic Stripes.jpg',
  5: '/photos/mens_jeans.jpeg',
  501: '/photos/mens_jeans.jpeg',
  502: '/photos/mens_jeans.jpeg',
  6: '/photos/mens_shoes.jpeg',
  601: '/photos/mens_shoes.jpeg',
  602: '/photos/mens_shoes.jpeg',
  7: '/photos/Summer_Dress.jpeg',
  701: '/photos/Summer Dress - Floral.jpg',
  702: '/photos/Summer Dress - Solid.jpg',
  703: '/photos/Summer Dress - Printed.jpg',
  8: '/photos/Designer_Handbag.jpeg',
  801: '/photos/Designer Handbag - Leather.jpg',
  802: '/photos/Designer Handbag - Tote.jpg',
  9: '/photos/Casual Sandals - Beige.jpg',
  901: '/photos/Casual Sandals - Black.jpg',
  902: '/photos/Casual_Sandals.jpeg',
  10: '/photos/Evening Gown - Navy.jpg',
  1001: '/photos/Evening_Gown.jpeg',
  1002: '/photos/Evening Gown - Black.jpg',
  11: '/photos/Clutch_Purse.jpeg',
  1101: '/photos/Clutch_Purse.jpeg',
  1102: '/photos/Clutch_Purse.jpeg',
  12: '/photos/Heeled_Sandals.jpeg',
  1201: '/photos/Heeled_Sandals.jpeg',
  1202: '/photos/Heeled_Sandals.jpeg',
  13: '/photos/rajasthani_base.jpeg',
  1301: '/photos/Rajasthani Lehenga - Blue.jpg',
  1302: '/photos/Rajasthani Lehenga - Pink.jpg',
  1303: '/photos/Rajasthani Lehenga - Green.jpg',
  14: '/photos/rajasthani_men_dress.jpeg',
  1401: '/photos/rajasthani_men_dress.jpeg',
  1402: '/photos/rajasthani_men_dress.jpeg',
  15: '/photos/Traditional Juttis - Red.jpg',
  1501: '/photos/Traditional Juttis - Golden.jpg',
  1502: '/photos/rajasthani_juti.jpeg',
  16: '/photos/Rajasthani Jewelry.jpg',
  1601: '/photos/Rajasthani Jewelry2.jpg',
  1602: '/photos/Rajasthani_jewelry.jpeg',
  18: '/photos/Embroidered_Mojris.jpeg',
  1801: '/photos/Embroidered_Mojris.jpeg',
  1802: '/photos/Embroidered_Mojris.jpeg',
  19: '/photos/Leather_Watch.jpeg',
  1901: '/photos/Leather_Watch.jpeg',
  1902: '/photos/Leather_Watch.jpeg',
  20: '/photos/silver-deer-heart-necklace.jpg',
  2001: '/photos/silver-deer-heart-necklace.jpg',
  2002: '/photos/silver-deer-heart-necklace.jpg',
  21: '/photos/Premium_Perfume.jpeg',
  2101: '/photos/Premium_Perfume.jpeg',
  2102: '/photos/Premium_Perfume.jpeg',
  22: '/photos/Sunglasses.jpeg',
  2201: '/photos/Sunglasses.jpeg',
  2202: '/photos/Sunglasses.jpeg',
  23: '/photos/Ring.jpeg',
  2301: '/photos/Ring.jpeg',
  2302: '/photos/Ring.jpeg',
  24: '/photos/perfume.jpg',
  2401: '/photos/perfume.jpg',
  2402: '/photos/perfume.jpg'
};

const keywordForCollection = (collection) =>
  imageKeywordsByCollection[collection] || 'fashion product';

const buildImage = (collection, seed) =>
  `https://source.unsplash.com/featured/?${encodeURIComponent(keywordForCollection(collection))}&sig=${seed}`;

const rawProducts = [
  // Men's Fashion - Casual Shirts
  {
    id: 1,
    name: 'Casual Shirt - Classic Blue',
    category: 'Men\'s Fashion',
    collection: 'Casual Shirt',
    price: 899.0,
    originalPrice: 1299.0,
    description: 'Comfortable and stylish casual shirt for men.'
  },
  {
    id: 101,
    name: 'Casual Shirt - White Stripe',
    category: 'Men\'s Fashion',
    collection: 'Casual Shirt',
    price: 899.0,
    originalPrice: 1299.0,
    description: 'Comfortable and stylish casual shirt for men with white stripe pattern.'
  },
  {
    id: 102,
    name: 'Casual Shirt - Navy Blue',
    category: 'Men\'s Fashion',
    collection: 'Casual Shirt',
    price: 949.0,
    originalPrice: 1299.0,
    description: 'Comfortable and stylish casual shirt in navy blue.'
  },
  {
    id: 103,
    name: 'Casual Shirt - Checkered',
    category: 'Men\'s Fashion',
    collection: 'Casual Shirt',
    price: 879.0,
    originalPrice: 1299.0,
    description: 'Comfortable and stylish checkered casual shirt for men.'
  },

  // Men's Fashion - Jeans
  {
    id: 2,
    name: 'Straight Fit Jeans - Classic',
    category: 'Men\'s Fashion',
    collection: 'Straight Fit Jeans',
    price: 1299.0,
    originalPrice: 1799.0,
    description: 'Classic denim jeans for a perfect fit.'
  },
  {
    id: 201,
    name: 'Straight Fit Jeans - Dark Wash',
    category: 'Men\'s Fashion',
    collection: 'Straight Fit Jeans',
    price: 1299.0,
    originalPrice: 1799.0,
    description: 'Classic denim jeans in dark wash for a perfect fit.'
  },
  {
    id: 202,
    name: 'Straight Fit Jeans - Light Wash',
    category: 'Men\'s Fashion',
    collection: 'Straight Fit Jeans',
    price: 1349.0,
    originalPrice: 1799.0,
    description: 'Classic denim jeans in light wash for a perfect fit.'
  },

  // Men's Footwear - Sports Shoes
  {
    id: 3,
    name: 'Sports Shoes - Running',
    category: 'Men\'s Footwear',
    collection: 'Sports Shoes',
    price: 2499.0,
    originalPrice: 3499.0,
    description: 'High-performance sports shoes for men.'
  },
  {
    id: 301,
    name: 'Sneakers - Classic',
    category: 'Men\'s Footwear',
    collection: 'Sports Shoes',
    price: 2599.0,
    originalPrice: 3499.0,
    description: 'High-performance training shoes for men.'
  },
  {
    id: 302,
    name: 'boots',
    category: 'Men\'s Footwear',
    collection: 'Sports Shoes',
    price: 2699.0,
    originalPrice: 3499.0,
    description: 'High-performance basketball shoes for men.'
  },
  {
    id: 303,
    name: 'sandals',
    category: 'Men\'s Footwear',
    collection: 'Sports Shoes',
    price: 2399.0,
    originalPrice: 3499.0,
    description: 'Comfortable walking shoes for men.'
  },

  // Men's Fashion - Formal Shirts
  {
    id: 4,
    name: 'Formal Shirt - White',
    category: 'Men\'s Fashion',
    collection: 'Formal Shirt',
    price: 1099.0,
    originalPrice: 1499.0,
    description: 'Professional formal shirt for men.'
  },
  {
    id: 401,
    name: 'Formal Shirt - Light Blue',
    category: 'Men\'s Fashion',
    collection: 'Formal Shirt',
    price: 1099.0,
    originalPrice: 1499.0,
    description: 'Professional formal shirt in light blue for men.'
  },
  {
    id: 402,
    name: 'Formal Shirt - Classic Stripes',
    category: 'Men\'s Fashion',
    collection: 'Formal Shirt',
    price: 1149.0,
    originalPrice: 1499.0,
    description: 'Professional formal shirt with classic stripes.'
  },

  // Men's Fashion - Cargo Pants
  {
    id: 5,
    name: 'Cargo Pants - Olive',
    category: 'Men\'s Fashion',
    collection: 'Cargo Pants',
    price: 1399.0,
    originalPrice: 1899.0,
    description: 'Comfortable cargo pants in olive green.'
  },
  {
    id: 501,
    name: 'Cargo Pants - Khaki',
    category: 'Men\'s Fashion',
    collection: 'Cargo Pants',
    price: 1399.0,
    originalPrice: 1899.0,
    description: 'Comfortable cargo pants in khaki color.'
  },
  {
    id: 502,
    name: 'Cargo Pants - Black',
    category: 'Men\'s Fashion',
    collection: 'Cargo Pants',
    price: 1449.0,
    originalPrice: 1899.0,
    description: 'Comfortable cargo pants in black.'
  },

  // Men's Footwear - Running Shoes
  {
    id: 6,
    name: 'Running Shoes - Black',
    category: 'Men\'s Footwear',
    collection: 'Running Shoes',
    price: 2299.0,
    originalPrice: 3299.0,
    description: 'High-performance running shoes in black.'
  },
  {
    id: 601,
    name: 'Running Shoes - White',
    category: 'Men\'s Footwear',
    collection: 'Running Shoes',
    price: 2299.0,
    originalPrice: 3299.0,
    description: 'High-performance running shoes in white.'
  },
  {
    id: 602,
    name: 'Running Shoes - Grey',
    category: 'Men\'s Footwear',
    collection: 'Running Shoes',
    price: 2399.0,
    originalPrice: 3299.0,
    description: 'High-performance running shoes in grey.'
  },

  // Women's Fashion - Summer Dresses
  {
    id: 7,
    name: 'Summer Dress - Floral',
    category: 'Women\'s Fashion',
    collection: 'Summer Dress',
    price: 1299.0,
    originalPrice: 1799.0,
    description: 'Light and comfortable summer dress with floral pattern.'
  },
  {
    id: 701,
    name: 'Summer Dress',
    category: 'Women\'s Fashion',
    collection: 'Summer Dress',
    price: 1299.0,
    originalPrice: 1799.0,
    description: 'Light and comfortable summer dress with stripes.'
  },
  {
    id: 702,
    name: 'Summer Dress - Solid',
    category: 'Women\'s Fashion',
    collection: 'Summer Dress',
    price: 1249.0,
    originalPrice: 1799.0,
    description: 'Light and comfortable solid color summer dress.'
  },
  {
    id: 703,
    name: 'Summer Dress - Printed',
    category: 'Women\'s Fashion',
    collection: 'Summer Dress',
    price: 1349.0,
    originalPrice: 1799.0,
    description: 'Light and comfortable printed summer dress.'
  },

  // Women's Accessories - Handbags
  {
    id: 8,
    name: 'Designer Handbag - Classic',
    category: 'Women\'s Accessories',
    collection: 'Designer Handbag',
    price: 1999.0,
    originalPrice: 2999.0,
    description: 'Elegant handbag for any occasion.'
  },
  {
    id: 801,
    name: 'Designer Handbag - Leather',
    category: 'Women\'s Accessories',
    collection: 'Designer Handbag',
    price: 2199.0,
    originalPrice: 2999.0,
    description: 'Premium leather handbag for any occasion.'
  },
  {
    id: 802,
    name: 'Designer Handbag - Tote',
    category: 'Women\'s Accessories',
    collection: 'Designer Handbag',
    price: 1899.0,
    originalPrice: 2999.0,
    description: 'Elegant tote handbag for any occasion.'
  },

  // Women's Footwear - Casual Sandals
  {
    id: 9,
    name: 'Casual Sandals - Beige',
    category: 'Women\'s Footwear',
    collection: 'Casual Sandals',
    price: 799.0,
    originalPrice: 1199.0,
    description: 'Stylish sandals for women in beige.'
  },
  {
    id: 901,
    name: 'Casual Sandals - Black',
    category: 'Women\'s Footwear',
    collection: 'Casual Sandals',
    price: 799.0,
    originalPrice: 1199.0,
    description: 'Stylish sandals for women in black.'
  },
  {
    id: 902,
    name: 'Casual Sandals - Brown',
    category: 'Women\'s Footwear',
    collection: 'Casual Sandals',
    price: 849.0,
    originalPrice: 1199.0,
    description: 'Stylish sandals for women in brown.'
  },

  // Women's Fashion - Evening Gowns
  {
    id: 10,
    name: 'Evening Gown - Navy',
    category: 'Women\'s Fashion',
    collection: 'Evening Gown',
    price: 2999.0,
    originalPrice: 3999.0,
    description: 'Elegant evening gown for special occasions in navy.'
  },
  {
    id: 1001,
    name: 'Evening Gown - Red',
    category: 'Women\'s Fashion',
    collection: 'Evening Gown',
    price: 3099.0,
    originalPrice: 3999.0,
    description: 'Elegant evening gown for special occasions in red.'
  },
  {
    id: 1002,
    name: 'Evening Gown - Black',
    category: 'Women\'s Fashion',
    collection: 'Evening Gown',
    price: 2999.0,
    originalPrice: 3999.0,
    description: 'Elegant evening gown for special occasions in black.'
  },

  // Women's Accessories - Clutch Purses
  {
    id: 11,
    name: 'Clutch Purse - Silver',
    category: 'Women\'s Accessories',
    collection: 'Clutch Purse',
    price: 599.0,
    originalPrice: 899.0,
    description: 'Stylish clutch purse for evening events in silver.'
  },
  {
    id: 1101,
    name: 'Clutch Purse - Gold',
    category: 'Women\'s Accessories',
    collection: 'Clutch Purse',
    price: 649.0,
    originalPrice: 899.0,
    description: 'Stylish clutch purse for evening events in gold.'
  },
  {
    id: 1102,
    name: 'Clutch Purse - Black',
    category: 'Women\'s Accessories',
    collection: 'Clutch Purse',
    price: 599.0,
    originalPrice: 899.0,
    description: 'Stylish clutch purse for evening events in black.'
  },

  // Women's Footwear - Heeled Sandals
  {
    id: 12,
    name: 'Heeled Sandals - Black',
    category: 'Women\'s Footwear',
    collection: 'Heeled Sandals',
    price: 1199.0,
    originalPrice: 1699.0,
    description: 'Comfortable heeled sandals for women in black.'
  },
  {
    id: 1201,
    name: 'Heeled Sandals - Nude',
    category: 'Women\'s Footwear',
    collection: 'Heeled Sandals',
    price: 1199.0,
    originalPrice: 1699.0,
    description: 'Comfortable heeled sandals for women in nude.'
  },
  {
    id: 1202,
    name: 'Heeled Sandals - Red',
    category: 'Women\'s Footwear',
    collection: 'Heeled Sandals',
    price: 1249.0,
    originalPrice: 1699.0,
    description: 'Comfortable heeled sandals for women in red.'
  },

  // Ethnic Wear - Rajasthani Lehengas
  {
    id: 13,
    name: 'Rajasthani Lehenga',
    category: 'Ethnic Wear',
    collection: 'Rajasthani Lehenga',
    price: 3499.0,
    originalPrice: 4999.0,
    description: 'Traditional Rajasthani dress for women'
  },
  {
    id: 1301,
    name: 'Rajasthani Lehenga - Blue',
    category: 'Ethnic Wear',
    collection: 'Rajasthani Lehenga',
    price: 3599.0,
    originalPrice: 4999.0,
    description: 'Traditional Rajasthani dress for women in blue.'
  },
  {
    id: 1302,
    name: 'Rajasthani Lehenga - Pink',
    category: 'Ethnic Wear',
    collection: 'Rajasthani Lehenga',
    price: 3499.0,
    originalPrice: 4999.0,
    description: 'Traditional Rajasthani dress for women in pink.'
  },
  {
    id: 1303,
    name: 'Rajasthani Lehenga - Green',
    category: 'Ethnic Wear',
    collection: 'Rajasthani Lehenga',
    price: 3699.0,
    originalPrice: 4999.0,
    description: 'Traditional Rajasthani dress for women in green.'
  },

  // Ethnic Wear - Men's Kurta Sets
  {
    id: 14,
    name: 'Men\'s Kurta Set - White',
    category: 'Ethnic Wear',
    collection: 'Men\'s Kurta Set',
    price: 1999.0,
    originalPrice: 2799.0,
    description: 'Traditional kurta set for men in white.'
  },
  {
    id: 1401,
    name: 'Men\'s Kurta Set - Beige',
    category: 'Ethnic Wear',
    collection: 'Men\'s Kurta Set',
    price: 1999.0,
    originalPrice: 2799.0,
    description: 'Traditional kurta set for men in beige.'
  },
  {
    id: 1402,
    name: 'Men\'s Kurta Set - Blue',
    category: 'Ethnic Wear',
    collection: 'Men\'s Kurta Set',
    price: 2099.0,
    originalPrice: 2799.0,
    description: 'Traditional kurta set for men in blue.'
  },

  // Footwear - Traditional Juttis
  {
    id: 15,
    name: 'Traditional Juttis - Red',
    category: 'Footwear',
    collection: 'Traditional Juttis',
    price: 499.0,
    originalPrice: 799.0,
    description: 'Traditional Rajasthani juttis in red.'
  },
  {
    id: 1501,
    name: 'Traditional Juttis - Golden',
    category: 'Footwear',
    collection: 'Traditional Juttis',
    price: 549.0,
    originalPrice: 799.0,
    description: 'Traditional Rajasthani juttis in golden.'
  },
  {
    id: 1502,
    name: 'Traditional Juttis',
    category: 'Footwear',
    collection: 'Traditional Juttis',
    price: 499.0,
    originalPrice: 799.0,
    description: 'Traditional Rajasthani juttis.'
  },

  // Jewelry - Rajasthani Jewelry
  {
    id: 16,
    name: 'Rajasthani Jewelry - Set 1',
    category: 'Jewelry',
    collection: 'Rajasthani Jewelry',
    price: 2499.0,
    originalPrice: 3499.0,
    description: 'Traditional Rajasthani jewelry set.'
  },
  {
    id: 1601,
    name: 'Rajasthani Jewelry - Set 2',
    category: 'Jewelry',
    collection: 'Rajasthani Jewelry',
    price: 2599.0,
    originalPrice: 3499.0,
    description: 'Traditional Rajasthani jewelry set - premium collection.'
  },
  {
    id: 1602,
    name: 'Rajasthani Jewelry - Set 3',
    category: 'Jewelry',
    collection: 'Rajasthani Jewelry',
    price: 2499.0,
    originalPrice: 3499.0,
    description: 'Traditional Rajasthani jewelry set - deluxe.'
  },

  // Footwear - Embroidered Mojris
  {
    id: 18,
    name: 'Embroidered Mojris - Gold',
    category: 'Footwear',
    collection: 'Embroidered Mojris',
    price: 599.0,
    originalPrice: 899.0,
    description: 'Beautiful embroidered mojris with gold thread.'
  },
  {
    id: 1801,
    name: 'Embroidered Mojris - Silver',
    category: 'Footwear',
    collection: 'Embroidered Mojris',
    price: 599.0,
    originalPrice: 899.0,
    description: 'Beautiful embroidered mojris with silver thread.'
  },
  {
    id: 1802,
    name: 'Embroidered Mojris - Multi-color',
    category: 'Footwear',
    collection: 'Embroidered Mojris',
    price: 649.0,
    originalPrice: 899.0,
    description: 'Beautiful embroidered mojris with multi-color thread.'
  },

  // Accessories - Leather Watches
  {
    id: 19,
    name: 'Leather Watch - Brown',
    category: 'Accessories',
    collection: 'Leather Watch',
    price: 1799.0,
    originalPrice: 2499.0,
    description: 'Classic leather watch for men in brown.'
  },
  {
    id: 1901,
    name: 'Leather Watch - Black',
    category: 'Accessories',
    collection: 'Leather Watch',
    price: 1799.0,
    originalPrice: 2499.0,
    description: 'Classic leather watch for men in black.'
  },
  {
    id: 1902,
    name: 'Leather Watch - Tan',
    category: 'Accessories',
    collection: 'Leather Watch',
    price: 1849.0,
    originalPrice: 2499.0,
    description: 'Classic leather watch for men in tan.'
  },

  // Jewelry - Silver Necklaces
  {
    id: 20,
    name: 'Silver Necklace - Classic',
    category: 'Jewelry',
    collection: 'Silver Necklace',
    price: 2999.0,
    originalPrice: 3999.0,
    description: 'Elegant silver deer heart necklace.'
  },
  {
    id: 2001,
    name: 'Silver Necklace - Pendant',
    category: 'Jewelry',
    collection: 'Silver Necklace',
    price: 3099.0,
    originalPrice: 3999.0,
    description: 'Elegant silver necklace with pendant.'
  },
  {
    id: 2002,
    name: 'Silver Necklace - Chain',
    category: 'Jewelry',
    collection: 'Silver Necklace',
    price: 2999.0,
    originalPrice: 3999.0,
    description: 'Elegant silver chain necklace.'
  },

  // Fragrance - Premium Perfumes
  {
    id: 21,
    name: 'Premium Perfume - 50ml',
    category: 'Fragrance',
    collection: 'Premium Perfume',
    price: 899.0,
    originalPrice: 1299.0,
    description: 'Premium fragrance for all occasions - 50ml.'
  },
  {
    id: 2101,
    name: 'Premium Perfume - 100ml',
    category: 'Fragrance',
    collection: 'Premium Perfume',
    price: 1599.0,
    originalPrice: 2299.0,
    description: 'Premium fragrance for all occasions - 100ml.'
  },
  {
    id: 2102,
    name: 'Premium Perfume - Gift Set',
    category: 'Fragrance',
    collection: 'Premium Perfume',
    price: 2199.0,
    originalPrice: 3299.0,
    description: 'Premium fragrance gift set for all occasions.'
  },

  // Accessories - Sunglasses
  {
    id: 22,
    name: 'Sunglasses - Aviator',
    category: 'Accessories',
    collection: 'Sunglasses',
    price: 599.0,
    originalPrice: 899.0,
    description: 'Stylish aviator sunglasses for protection and style.'
  },
  {
    id: 2201,
    name: 'Sunglasses - Wayfarer',
    category: 'Accessories',
    collection: 'Sunglasses',
    price: 649.0,
    originalPrice: 899.0,
    description: 'Stylish wayfarer sunglasses for protection and style.'
  },
  {
    id: 2202,
    name: 'Sunglasses - Round',
    category: 'Accessories',
    collection: 'Sunglasses',
    price: 599.0,
    originalPrice: 899.0,
    description: 'Stylish round sunglasses for protection and style.'
  },

  // Jewelry - Rings
  {
    id: 23,
    name: 'Ring - Silver',
    category: 'Jewelry',
    collection: 'Ring',
    price: 1299.0,
    originalPrice: 1799.0,
    description: 'Beautiful silver ring for special occasions.'
  },
  {
    id: 2301,
    name: 'Ring - Gold Plated',
    category: 'Jewelry',
    collection: 'Ring',
    price: 1399.0,
    originalPrice: 1799.0,
    description: 'Beautiful gold plated ring for special occasions.'
  },
  {
    id: 2302,
    name: 'Ring - Diamond',
    category: 'Jewelry',
    collection: 'Ring',
    price: 1899.0,
    originalPrice: 2499.0,
    description: 'Beautiful diamond ring for special occasions.'
  },

  // Fragrance - Body Mist Sets
  {
    id: 24,
    name: 'Body Mist Set - 3 pcs',
    category: 'Fragrance',
    collection: 'Body Mist Set',
    price: 799.0,
    originalPrice: 1199.0,
    description: 'Body mist set with 3 fragrances.'
  },
  {
    id: 2401,
    name: 'Body Mist Set - 5 pcs',
    category: 'Fragrance',
    collection: 'Body Mist Set',
    price: 1199.0,
    originalPrice: 1799.0,
    description: 'Body mist set with 5 fragrances.'
  },
  {
    id: 2402,
    name: 'Body Mist Set - Gift Pack',
    category: 'Fragrance',
    collection: 'Body Mist Set',
    price: 1499.0,
    originalPrice: 2199.0,
    description: 'Body mist gift pack with premium fragrances.'
  }
];

const products = rawProducts.map((product) => ({
  ...product,
  image: imageOverrides[product.id] || buildImage(product.collection, product.id)
}));

const categoriesMap = new Map();

products.forEach((product) => {
  if (!categoriesMap.has(product.collection)) {
    categoriesMap.set(product.collection, {
      name: product.collection,
      category: product.category,
      items: []
    });
  }

  categoriesMap.get(product.collection).items.push(product);
});

const orderedCollectionNames = [
  'Casual Shirt',
  'Straight Fit Jeans',
  'Sports Shoes',
  'Formal Shirt',
  'Cargo Pants',
  'Running Shoes',
  'Summer Dress',
  'Designer Handbag',
  'Casual Sandals',
  'Evening Gown',
  'Clutch Purse',
  'Heeled Sandals',
  'Rajasthani Lehenga',
  "Men's Kurta Set",
  'Traditional Juttis',
  'Rajasthani Jewelry',
  'Embroidered Mojris',
  'Leather Watch',
  'Silver Necklace',
  'Premium Perfume',
  'Sunglasses',
  'Ring',
  'Body Mist Set'
];

const remainingCollections = Array.from(categoriesMap.keys()).filter(
  (name) => !orderedCollectionNames.includes(name)
);

const categories = [
  ...orderedCollectionNames
    .filter((name) => categoriesMap.has(name))
    .map((name) => categoriesMap.get(name)),
  ...remainingCollections.map((name) => categoriesMap.get(name))
];

const catalogProducts = [...products];

export const getAllCategories = () => categories;

export const getAllProducts = () => catalogProducts;

export const getProductById = (productId) =>
  catalogProducts.find((product) => product.id === Number(productId));
