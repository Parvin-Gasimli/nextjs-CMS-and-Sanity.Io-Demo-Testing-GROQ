export default {
  name: 'rewiew',
  title: 'Rewiews',
  type: 'object',
  fields: [
    {
      name: 'rewiewDescription',
      title: 'Rewiew Description',
      type: 'string',
    },
    {
      name: 'Traweller',
      title: 'Traweller',
      type: 'traweller',
    },
    {
      name: 'Rating',
      title: 'rating',
      type: 'string',
      options: {
        list: [
          {
            title: '5 Stars',
            value: '5-stars',
          },
          {
            title: '4 Stars',
            value: '4-stars',
          },
          {
            title: '3 Stars',
            value: '3-stars',
          },
          {
            title: '2 Stars',
            value: '2-stars',
          },
          {
            title: '1 Stars',
            value: '1-stars',
          },
        ],
        layout: 'radio',
      },
    },
  ],
}
