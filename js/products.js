const products = [
  {
    id: 1,
    category: 'coffee',
    name: 'Irish coffee',
    description: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
    img: 'img/catalog/coffee/irish.png',
    basePrice: 7.00,
    sizes: [
      { id: 's', label: 'S', volume: '200 ml', price: 0 },
      { id: 'm', label: 'M', volume: '300 ml', price: 0.50 },
      { id: 'l', label: 'L', volume: '400 ml', price: 1.00 }
    ],
    additives: [
      { id: 'sugar', label: 'Sugar', price: 0.50 },
      { id: 'cinnamon', label: 'Cinnamon', price: 0.50 },
      { id: 'syrup', label: 'Syrup', price: 0.50 }
    ]
  },

  {
    id: 2,
    category: 'coffee',
    name: 'Kahlua coffee',
    description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
    img: 'img/catalog/coffee/kahlua.png',
    basePrice: 7.00,
    sizes: [
      { id: 's', label: 'S', volume: '200 ml', price: 0 },
      { id: 'm', label: 'M', volume: '300 ml', price: 0.50 },
      { id: 'l', label: 'L', volume: '400 ml', price: 1.00 }
    ],
    additives: [
      { id: 'sugar', label: 'Sugar', price: 0.50 },
      { id: 'cinnamon', label: 'Cinnamon', price: 0.50 },
      { id: 'syrup', label: 'Syrup', price: 0.50 }
    ]
  },

  {
    id: 3,
    category: 'coffee',
    name: 'Honey raf',
    description: 'Espresso with frothed milk, cream and aromatic honey',
    img: 'img/catalog/coffee/honey.png',
    basePrice: 5.50,
    sizes: [
      { id: 's', label: 'S', volume: '200 ml', price: 0 },
      { id: 'm', label: 'M', volume: '300 ml', price: 0.50 },
      { id: 'l', label: 'L', volume: '400 ml', price: 1.00 }
    ],
    additives: [
      { id: 'sugar', label: 'Sugar', price: 0.50 },
      { id: 'cinnamon', label: 'Cinnamon', price: 0.50 },
      { id: 'syrup', label: 'Syrup', price: 0.50 }
    ]
  },

  {
    id: 4,
    category: 'coffee',
    name: 'Ice cappuccino',
    description: 'Cappuccino with soft thick foam in summer version with ice',
    img: 'img/catalog/coffee/ice-cappuccino.png',
    basePrice: 5.00,
    sizes: [
      { id: 's', label: 'S', volume: '200 ml', price: 0 },
      { id: 'm', label: 'M', volume: '300 ml', price: 0.50 },
      { id: 'l', label: 'L', volume: '400 ml', price: 1.00 }
    ],
    additives: [
      { id: 'sugar', label: 'Sugar', price: 0.50 },
      { id: 'cinnamon', label: 'Cinnamon', price: 0.50 },
      { id: 'syrup', label: 'Syrup', price: 0.50 }
    ]
  },

  {
    id: 5,
    category: 'coffee',
    name: 'Espresso',
    description: 'Classic black coffee',
    img: 'img/catalog/coffee/espresso.png',
    basePrice: 4.50,
    sizes: [
      { id: 's', label: 'S', volume: '200 ml', price: 0 },
      { id: 'm', label: 'M', volume: '300 ml', price: 0.50 },
      { id: 'l', label: 'L', volume: '400 ml', price: 1.00 }
    ],
    additives: [
      { id: 'sugar', label: 'Sugar', price: 0.50 },
      { id: 'cinnamon', label: 'Cinnamon', price: 0.50 },
      { id: 'syrup', label: 'Syrup', price: 0.50 }
    ]
  },

  {
    id: 6,
    category: 'coffee',
    name: 'Latte',
    description: 'Espresso coffee with the addition of steamed milk and dense milk foam',
    img: 'img/catalog/coffee/latte.png',
    basePrice: 5.50,
    sizes: [
      { id: 's', label: 'S', volume: '200 ml', price: 0 },
      { id: 'm', label: 'M', volume: '300 ml', price: 0.50 },
      { id: 'l', label: 'L', volume: '400 ml', price: 1.00 }
    ],
    additives: [
      { id: 'sugar', label: 'Sugar', price: 0.50 },
      { id: 'cinnamon', label: 'Cinnamon', price: 0.50 },
      { id: 'syrup', label: 'Syrup', price: 0.50 }
    ]
  },

  {
    id: 7,
    category: 'coffee',
    name: 'Latte macchiato',
    description: 'Espresso with frothed milk and chocolate',
    img: 'img/catalog/coffee/latte-macchiato.png',
    basePrice: 5.50,
    sizes: [
      { id: 's', label: 'S', volume: '200 ml', price: 0 },
      { id: 'm', label: 'M', volume: '300 ml', price: 0.50 },
      { id: 'l', label: 'L', volume: '400 ml', price: 1.00 }
    ],
    additives: [
      { id: 'sugar', label: 'Sugar', price: 0.50 },
      { id: 'cinnamon', label: 'Cinnamon', price: 0.50 },
      { id: 'syrup', label: 'Syrup', price: 0.50 }
    ]
  },

  {
    id: 8,
    category: 'coffee',
    name: 'Coffee with cognac',
    description: 'Fragrant black coffee with cognac and whipped cream',
    img: 'img/catalog/coffee/with-cognac.png',
    basePrice: 6.50,
    sizes: [
      { id: 's', label: 'S', volume: '200 ml', price: 0 },
      { id: 'm', label: 'M', volume: '300 ml', price: 0.50 },
      { id: 'l', label: 'L', volume: '400 ml', price: 1.00 }
    ],
    additives: [
      { id: 'sugar', label: 'Sugar', price: 0.50 },
      { id: 'cinnamon', label: 'Cinnamon', price: 0.50 },
      { id: 'syrup', label: 'Syrup', price: 0.50 }
    ]
  },
  {
    id: 9,
    category: 'tea',
    name: 'Moroccan',
    description: 'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
    img: 'img/catalog/tea/moroccan.png',
    basePrice: 4.50,
    sizes: [
      { id: 's', label: 'S', volume: '200 ml', price: 0 },
      { id: 'm', label: 'M', volume: '300 ml', price: 0.50 },
      { id: 'l', label: 'L', volume: '400 ml', price: 1.00 }
    ],
    additives: [
      { id: 'sugar', label: 'Sugar', price: 0.50 },
      { id: 'lemon', label: 'Lemon', price: 0.50 },
      { id: 'syrup', label: 'Syrup', price: 0.50 }
    ]
  },

  {
    id: 10,
    category: 'tea',
    name: 'Ginger',
    description: 'Original black tea with fresh ginger, lemon and honey',
    img: 'img/catalog/tea/ginger.png',
    basePrice: 5.00,
    sizes: [
      { id: 's', label: 'S', volume: '200 ml', price: 0 },
      { id: 'm', label: 'M', volume: '300 ml', price: 0.50 },
      { id: 'l', label: 'L', volume: '400 ml', price: 1.00 }
    ],
    additives: [
      { id: 'sugar', label: 'Sugar', price: 0.50 },
      { id: 'lemon', label: 'Lemon', price: 0.50 },
      { id: 'syrup', label: 'Syrup', price: 0.50 }
    ]
  },

  {
    id: 11,
    category: 'tea',
    name: 'Cranberry',
    description: 'Invigorating black tea with cranberry and honey',
    img: 'img/catalog/tea/cranberry.png',
    basePrice: 5.00,
    sizes: [
      { id: 's', label: 'S', volume: '200 ml', price: 0 },
      { id: 'm', label: 'M', volume: '300 ml', price: 0.50 },
      { id: 'l', label: 'L', volume: '400 ml', price: 1.00 }
    ],
    additives: [
      { id: 'sugar', label: 'Sugar', price: 0.50 },
      { id: 'lemon', label: 'Lemon', price: 0.50 },
      { id: 'syrup', label: 'Syrup', price: 0.50 }
    ]
  },

  {
    id: 12,
    category: 'tea',
    name: 'Sea buckthorn',
    description: 'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
    img: 'img/catalog/tea/sea-buckthorn.png',
    basePrice: 5.50,
    sizes: [
      { id: 's', label: 'S', volume: '200 ml', price: 0 },
      { id: 'm', label: 'M', volume: '300 ml', price: 0.50 },
      { id: 'l', label: 'L', volume: '400 ml', price: 1.00 }
    ],
    additives: [
      { id: 'sugar', label: 'Sugar', price: 0.50 },
      { id: 'lemon', label: 'Lemon', price: 0.50 },
      { id: 'syrup', label: 'Syrup', price: 0.50 }
    ]
  },
  {
    id: 13,
    category: 'dessert',
    name: 'Marble cheesecake',
    description: 'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
    img: 'img/catalog/dessert/marble-cheesecake.png',
    basePrice: 3.50,
    sizes: [
      { id: 's', label: 'S', volume: '50 g', price: 0 },
      { id: 'm', label: 'M', volume: '100 g', price: 0.50 },
      { id: 'l', label: 'L', volume: '200 g', price: 1.00 }
    ],
    additives: [
      { id: 'berries', label: 'Berries', price: 0.50 },
      { id: 'nuts', label: 'Nuts', price: 0.50 },
      { id: 'jam', label: 'Jam', price: 0.50 }
    ]
  },

  {
    id: 14,
    category: 'dessert',
    name: 'Red velvet',
    description: 'Layer cake with cream cheese frosting',
    img: 'img/catalog/dessert/red-velvet.png',
    basePrice: 4.00,
    sizes: [
      { id: 's', label: 'S', volume: '50 g', price: 0 },
      { id: 'm', label: 'M', volume: '100 g', price: 0.50 },
      { id: 'l', label: 'L', volume: '200 g', price: 1.00 }
    ],
    additives: [
      { id: 'berries', label: 'Berries', price: 0.50 },
      { id: 'nuts', label: 'Nuts', price: 0.50 },
      { id: 'jam', label: 'Jam', price: 0.50 }
    ]
  },

  {
    id: 15,
    category: 'dessert',
    name: 'Cheesecakes',
    description: 'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
    img: 'img/catalog/dessert/cheesecakes.png',
    basePrice: 4.50,
    sizes: [
      { id: 's', label: 'S', volume: '50 g', price: 0 },
      { id: 'm', label: 'M', volume: '100 g', price: 0.50 },
      { id: 'l', label: 'L', volume: '200 g', price: 1.00 }
    ],
    additives: [
      { id: 'berries', label: 'Berries', price: 0.50 },
      { id: 'nuts', label: 'Nuts', price: 0.50 },
      { id: 'jam', label: 'Jam', price: 0.50 }
    ]
  },

  {
    id: 16,
    category: 'dessert',
    name: 'Creme brulee',
    description: 'Delicate creamy dessert in a caramel basket with wild berries',
    img: 'img/catalog/dessert/creme-brulee.png',
    basePrice: 4.00,
    sizes: [
      { id: 's', label: 'S', volume: '50 g', price: 0 },
      { id: 'm', label: 'M', volume: '100 g', price: 0.50 },
      { id: 'l', label: 'L', volume: '200 g', price: 1.00 }
    ],
    additives: [
      { id: 'berries', label: 'Berries', price: 0.50 },
      { id: 'nuts', label: 'Nuts', price: 0.50 },
      { id: 'jam', label: 'Jam', price: 0.50 }
    ]
  },

  {
    id: 17,
    category: 'dessert',
    name: 'Pancakes',
    description: 'Tender pancakes with strawberry jam and fresh strawberries',
    img: 'img/catalog/dessert/pancakes.png',
    basePrice: 4.50,
    sizes: [
      { id: 's', label: 'S', volume: '50 g', price: 0 },
      { id: 'm', label: 'M', volume: '100 g', price: 0.50 },
      { id: 'l', label: 'L', volume: '200 g', price: 1.00 }
    ],
    additives: [
      { id: 'berries', label: 'Berries', price: 0.50 },
      { id: 'nuts', label: 'Nuts', price: 0.50 },
      { id: 'jam', label: 'Jam', price: 0.50 }
    ]
  },

  {
    id: 18,
    category: 'dessert',
    name: 'Honey cake',
    description: 'Classic honey cake with delicate custard',
    img: 'img/catalog/dessert/honey-cake.png',
    basePrice: 4.50,
    sizes: [
      { id: 's', label: 'S', volume: '50 g', price: 0 },
      { id: 'm', label: 'M', volume: '100 g', price: 0.50 },
      { id: 'l', label: 'L', volume: '200 g', price: 1.00 }
    ],
    additives: [
      { id: 'berries', label: 'Berries', price: 0.50 },
      { id: 'nuts', label: 'Nuts', price: 0.50 },
      { id: 'jam', label: 'Jam', price: 0.50 }
    ]
  },

  {
    id: 19,
    category: 'dessert',
    name: 'Chocolate cake',
    description: 'Cake with hot chocolate filling and nuts with dried apricots',
    img: 'img/catalog/dessert/chocolate-cake.png',
    basePrice: 5.50,
    sizes: [
      { id: 's', label: 'S', volume: '50 g', price: 0 },
      { id: 'm', label: 'M', volume: '100 g', price: 0.50 },
      { id: 'l', label: 'L', volume: '200 g', price: 1.00 }
    ],
    additives: [
      { id: 'berries', label: 'Berries', price: 0.50 },
      { id: 'nuts', label: 'Nuts', price: 0.50 },
      { id: 'jam', label: 'Jam', price: 0.50 }
    ]
  },

  {
    id: 20,
    category: 'dessert',
    name: 'Black forest',
    description: 'A combination of thin sponge cake with cherry jam and light chocolate mousse',
    img: 'img/catalog/dessert/black-forest.png',
    basePrice: 6.50,
    sizes: [
      { id: 's', label: 'S', volume: '50 g', price: 0 },
      { id: 'm', label: 'M', volume: '100 g', price: 0.50 },
      { id: 'l', label: 'L', volume: '200 g', price: 1.00 }
    ],
    additives: [
      { id: 'berries', label: 'Berries', price: 0.50 },
      { id: 'nuts', label: 'Nuts', price: 0.50 },
      { id: 'jam', label: 'Jam', price: 0.50 }
    ]
  }
];