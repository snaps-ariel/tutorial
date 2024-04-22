const productMenu = [
  {
    label: '명함',
    productName: 'business-card',
    children: [{ category: 'business-card', subCategory: 'basic' }],
  },
  {
    label: '스티커',
    productName: 'sticker',
    children: [
      { label: '낱장', category: 'sticker', subCategory: 'free-size' },
      { label: 'DIY', category: 'sticker', subCategory: 'diy' },
      { label: '원형', category: 'sticker', subCategory: 'circle' },
      { label: '정사각형', category: 'sticker', subCategory: 'square ' },
      {
        label: '직사각형',
        category: 'sticker',
        subCategory: 'rectangle',
        children: [
          {
            label: '가로',
            category: 'sticker',
            subCategory: 'rectangleHorizontal',
            value: '0',
            children: [
              {
                label: '30 x 12',
                category: 'sticker',
                subCategory: 'rectangleHorizontal3012',
                value: '0',
              },
              {
                label: '40 x 26',
                category: 'sticker',
                subCategory: 'rectangleHorizontal4026',
                value: '1',
              },
              {
                label: '50 x 30',
                category: 'sticker',
                subCategory: 'rectangleHorizontal5030',
                value: '2',
              },
              {
                label: '65 x 42',
                category: 'sticker',
                subCategory: 'rectangleHorizontal6542',
                value: '3',
              },
              {
                label: '85 x 55',
                category: 'sticker',
                subCategory: 'rectangleHorizontal8555',
                value: '4',
              },
              {
                label: '105 x 70',
                category: 'sticker',
                subCategory: 'rectangleHorizontal10570',
                value: '5',
              },
              {
                label: '120 x 90',
                category: 'sticker',
                subCategory: 'rectangleHorizontal12090',
                value: '6',
              },
            ],
          },
          {
            label: '세로',
            category: 'sticker',
            subCategory: 'rectangleVertical',
            value: '1',
            children: [
              {
                label: '12 x 30',
                category: 'sticker',
                subCategory: 'rectangleVertical1230',
                value: '0',
              },
              {
                label: '26 x 40',
                category: 'sticker',
                subCategory: 'rectangleVertical2640',
                value: '1',
              },
              {
                label: '30 x 50',
                category: 'sticker',
                subCategory: 'rectangleVertical3050',
                value: '2',
              },
              {
                label: '42 x 65',
                category: 'sticker',
                subCategory: 'rectangleVertical4265',
                value: '3',
              },
              {
                label: '55 x 85',
                category: 'sticker',
                subCategory: 'rectangleVertical5585',
                value: '4',
              },
              {
                label: '70 x 105',
                category: 'sticker',
                subCategory: 'rectangleVertical70105',
                value: '5',
              },
              {
                label: '90 x 120',
                category: 'sticker',
                subCategory: 'rectangleVertical90120',
                value: '6',
              },
            ],
          },
        ],
      },
    ],
  },
];
