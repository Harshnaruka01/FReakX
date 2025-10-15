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
          image: '/photos/ghagra.jpeg'
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
      thumb: '/photos/tamilnadu.png',
      image: '/photos/tamilnadu.png',
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
      thumb: '/photos/kerala.jpeg',
      image: '/photos/kerala.jpeg',
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
      thumb: '/photos/karnataka.png',
      image: '/photos/karnataka.png',
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
      thumb: '/photos/GUJRAT.png',
      image: '/photos/GUJRAT.png',
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
      thumb: '/photos/assam.jpg',
      image: 'photos/assam.jpg',
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
      thumb: '/photos/Himachal_pardesh.jpg',
      image: '/photos/Himachal_pardesh.jpg',
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
      thumb: '/photos/jammu_&_kasmir.png',
      image: '/photos/jammu_&_kasmir.png',
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
    },
    {
      name: 'Andhra Pradesh',
      code: 'AP',
      thumb: '/photos/andhra_pradesh.png',
      image: '/photos/andhra_pradesh.png',
      clothes: [
        {
          name: 'Kalamkari Saree',
          description: 'Traditional Andhra sarees with hand-painted designs and vibrant colors.',
          image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop'
        },
        {
          name: 'Pancha & Kurta',
          description: 'Traditional Andhra men\'s attire, elegant and comfortable.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Telangana',
      code: 'TG',
      thumb: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Hyderabad Saree',
          description: 'Elegant sarees with intricate embroidery, famous for their royal heritage.',
          image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop'
        },
        {
          name: 'Sherwani & Dhoti',
          description: 'Traditional Telangana men\'s formal wear, reflecting Nizami culture.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Uttar Pradesh',
      code: 'UP',
      thumb: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Banarasi Saree',
          description: 'Luxurious silk sarees with intricate zari work from Varanasi.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
          name: 'Kurta Pajama',
          description: 'Traditional UP men\'s attire, comfortable and elegant.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Madhya Pradesh',
      code: 'MP',
      thumb: '/photos/MP.png',
      image: '/photos/MP.png',
      clothes: [
        {
          name: 'Chanderi Saree',
          description: 'Lightweight sarees with traditional motifs from Chanderi.',
          image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhoti & Kurta',
          description: 'Traditional MP men\'s attire, simple and functional.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Bihar',
      code: 'BR',
      thumb: '/photos/bihar.jpg',
      image: '/photos/bihar.jpg',
      clothes: [
        {
          name: 'Bhagalpuri Silk Saree',
          description: 'Traditional Bihar sarees known for their silk quality and patterns.',
          image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhoti & Kurta',
          description: 'Traditional Bihari men\'s attire, comfortable for daily wear.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Jharkhand',
      code: 'JH',
      thumb: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Tussar Silk Saree',
          description: 'Traditional Jharkhand sarees made from wild silk.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhoti & Kurta',
          description: 'Traditional tribal and rural attire for men.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Chhattisgarh',
      code: 'CG',
      thumb: '/photos/chhattisgarh.jpg',
      image: '/photos/chhattisgarh.jpg',
      clothes: [
        {
          name: 'Kosa Silk Saree',
          description: 'Traditional Chhattisgarh sarees with tribal motifs.',
          image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhoti & Kurta',
          description: 'Traditional Chhattisgarh men\'s attire with tribal influences.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Haryana',
      code: 'HR',
      thumb: '/photos/haryana.jpg',
      image: '/photos/haryana.jpg',
      clothes: [
        {
          name: 'Phulkari Dupatta',
          description: 'Colorful embroidered dupattas with intricate floral patterns.',
          image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop'
        },
        {
          name: 'Kurta Pajama',
          description: 'Traditional Haryana men\'s attire, simple and comfortable.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Uttarakhand',
      code: 'UK',
      thumb: '/photos/uttrakhand.jpg',
      image: '/photos/uttrakhand.jpg',
      clothes: [
        {
          name: 'Uttarakhand Saree',
          description: 'Traditional hill region sarees with simple yet elegant designs.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhoti & Kurta',
          description: 'Traditional Uttarakhand men\'s attire, warm for mountain climate.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Delhi',
      code: 'DL',
      thumb: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Delhi Saree',
          description: 'Modern and traditional sarees representing the capital\'s diverse culture.',
          image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop'
        },
        {
          name: 'Sherwani & Kurta',
          description: 'Elegant formal wear representing Delhi\'s royal heritage.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Goa',
      code: 'GA',
      thumb: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Goan Saree',
          description: 'Traditional Goan sarees with Portuguese and Indian influences.',
          image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhoti & Kurta',
          description: 'Traditional Goan men\'s attire with coastal influences.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Manipur',
      code: 'MN',
      thumb: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Phanek',
          description: 'Traditional Manipuri wrap-around skirt with unique patterns.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhoti & Kurta',
          description: 'Traditional Manipuri men\'s attire with distinctive style.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Meghalaya',
      code: 'ML',
      thumb: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Jainsem',
          description: 'Traditional Meghalaya women\'s attire with tribal designs.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhoti & Kurta',
          description: 'Traditional Meghalaya men\'s attire with hill tribe influences.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Mizoram',
      code: 'MZ',
      thumb: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Puan',
          description: 'Traditional Mizo women\'s attire with vibrant colors and patterns.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhoti & Kurta',
          description: 'Traditional Mizo men\'s attire with tribal influences.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Nagaland',
      code: 'NL',
      thumb: '/photos/nagaland.jpg',
      image: '/photos/nagaland.jpg',
      clothes: [
        {
          name: 'Naga Skirt',
          description: 'Traditional Naga women\'s attire with distinctive tribal patterns.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhoti & Kurta',
          description: 'Traditional Naga men\'s attire with warrior tribe influences.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Tripura',
      code: 'TR',
      thumb: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      clothes: [
        {
          name: 'Risa & Rignai',
          description: 'Traditional Tripura women\'s attire with unique draping style.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhoti & Kurta',
          description: 'Traditional Tripura men\'s attire with tribal influences.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Sikkim',
      code: 'SK',
      thumb: '/photos/sikkim.jpg',
      image: '/photos/sikkim.jpg',
      clothes: [
        {
          name: 'Bakhu',
          description: 'Traditional Sikkim women\'s attire with Tibetan influences.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhoti & Kurta',
          description: 'Traditional Sikkim men\'s attire with Himalayan influences.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Arunachal Pradesh',
      code: 'AR',
      thumb: '/photos/arunachal_pradesh.jpg',
      image: '/photos/arunachal_pradesh.jpg',
      clothes: [
        {
          name: 'Gale',
          description: 'Traditional Arunachal Pradesh women\'s attire with tribal designs.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
          name: 'Dhoti & Kurta',
          description: 'Traditional Arunachal Pradesh men\'s attire with tribal influences.',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        }
      ]
    }
  ];
  
  export default statesData;