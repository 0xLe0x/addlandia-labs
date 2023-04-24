import { SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      type: 'document',
      name: 'post',
      title: 'Post',
      fields: [
        {
          type: 'string',
          name: 'title',
          title: 'Title',
        },
      ],
    },
  ],
}
