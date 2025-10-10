export default {
    name: 'portfolioItem',
    title: 'Portfolio Item',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        initialValue: 'not defined',
      },
      {
        name: 'hashtags',
        title: 'Hashtags',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'hoverImage',
        title: 'Hover Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  