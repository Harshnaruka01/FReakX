const statesData = [
    {
      name: 'Rajasthan',
      code: 'RJ',
      thumb: '/photos/rajasthan.png',
      image: '/photos/rajasthan.png',
      clothes: [
        {
          name: 'Ghagra Choli',
          description: 'A colorful traditional dress worn by Rajasthani women.',
          image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop'
        },
        {
          name: 'Angrakha & Dhoti',
          description: 'Traditional attire for men, representing the desert culture.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Punjab',
      code: 'PB',
      thumb: '/photos/panjab.jpeg',
      image: '/photos/panjab.jpeg',
      clothes: [
        {
          name: 'Phulkari Dupatta',
          description: 'An embroidered dupatta famous for its vibrant patterns.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
          name: 'Kurta Pajama',
          description: 'Traditional outfit for men, symbolizing Punjabi culture.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Tamil Nadu',
      code: 'TN',
      thumb: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Kanchipuram Saree',
          description: 'Beautiful silk sarees known for their craftsmanship.',
          image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop'
        },
        {
          name: 'Veshti',
          description: 'Traditional attire for Tamil men, usually worn with an angavastram.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Kerala',
      code: 'KL',
      thumb: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Kerala Saree',
          description: 'Traditional white saree with golden borders, representing Kerala culture.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
          name: 'Mundu',
          description: 'Traditional white dhoti worn by Keralan men, often with a shirt.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Karnataka',
      code: 'KA',
      thumb: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Mysore Silk Saree',
          description: 'Luxurious silk sarees from Karnataka, famous for their quality.',
          image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop'
        },
        {
          name: 'Panche',
          description: 'Traditional dhoti worn by Kannadiga men in formal occasions.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Gujarat',
      code: 'GJ',
      thumb: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Chaniya Choli',
          description: 'Colorful traditional dress worn by Gujarati women during festivals.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
          name: 'Kediyu & Dhoti',
          description: 'Traditional attire for Gujarati men, especially popular in rural areas.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'West Bengal',
      code: 'WB',
      thumb: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Bengali Saree',
          description: 'Traditional sarees with red borders, representing Bengali culture.',
          image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhoti & Kurta',
          description: 'Traditional Bengali men\'s attire, often worn with a gamcha.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Maharashtra',
      code: 'MH',
      thumb: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Nauvari Saree',
          description: 'Nine-yard saree draped in a unique style, traditional Maharashtrian wear.',
          image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhotar & Pheta',
          description: 'Traditional Maharashtrian men\'s attire with distinctive headgear.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Assam',
      code: 'AS',
      thumb: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Mekhela Chador',
          description: 'Traditional Assamese two-piece attire for women, elegant and comfortable.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhoti & Gamosa',
          description: 'Traditional Assamese men\'s attire with the symbolic gamosa towel.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Himachal Pradesh',
      code: 'HP',
      thumb: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Himachali Ghagra Choli',
          description: 'Traditional hill dress for women, adapted for mountain climate.',
          image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop'
        },
        {
          name: 'Chola & Pajama',
          description: 'Traditional Himachali men\'s attire, warm and comfortable for hills.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Jammu & Kashmir',
      code: 'JK',
      thumb: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Pheran',
          description: 'Traditional Kashmiri long gown worn by both men and women for warmth.',
          image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop'
        },
        {
          name: 'Salwar Kameez',
          description: 'Traditional Kashmiri attire, often adorned with intricate embroidery.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Odisha',
      code: 'OD',
      thumb: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Odia Saree',
          description: 'Traditional Odisha sarees known for their unique draping style.',
          image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhoti & Kurta',
          description: 'Traditional Odia men\'s attire, often worn during festivals.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    }
  ];
  
  export default statesData;