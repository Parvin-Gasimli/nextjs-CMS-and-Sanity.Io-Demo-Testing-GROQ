export default {
  name: 'property',
  title: 'property',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'House',
            value: 'house',
          },
          {
            title: 'Flat',
            value: 'flat',
          },
          {
            title: 'Bed and Brakfast',
            value: 'bed-and-breakfast',
          },
          {
            title: 'Boutique Hotel ',
            value: 'boutique-hotel',
          },
        ],
        layout: 'radio',
      },
    },

    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'propertyImages'}],
    },
    {
      name: 'pricePerNight',
      title: 'Price Per Night',
      type: 'number',
    },
    {
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
    },
    {
      name: 'beds',
      title: 'Bed',
      type: 'number',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Descroption',
      type: 'string',
    },
    {
      name: 'host',
      title: 'host',
      type: 'host',
    },
    {
      name: 'reviews',
      title: 'Rewiews',
      type: 'array',
      of: [{type: 'rewiew'}],
    },
  ],
}
