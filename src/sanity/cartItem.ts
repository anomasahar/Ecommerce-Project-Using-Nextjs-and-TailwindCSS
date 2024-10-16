// src/sanity/schemaTypes/cartItem.ts
import { defineType, defineField } from 'sanity';

export const cartItem = defineType({
  name: 'cartItem',
  type: 'object',
  title: 'Cart Item',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Product Title',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: Rule => Rule.required().min(0), // Ensure price is non-negative
    }),
    defineField({
      name: 'quantity',
      type: 'number',
      title: 'Quantity',
      validation: Rule => Rule.required().min(1), // Minimum 1 item per product
    }),
  ],
});
