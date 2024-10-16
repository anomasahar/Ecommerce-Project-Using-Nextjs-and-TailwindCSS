// src/sanity/schemaTypes/order.ts
import { defineType, defineField } from 'sanity';
import { cartItem } from './cartItem'; // Import cartItem schema

export const order = defineType({
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Order Title',
      validation: Rule => Rule.required(),  // Ensure the title is always present
    }),
    defineField({
      name: 'firstName',
      type: 'string',
      title: 'First Name',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: Rule => Rule.required().email(), // Ensure valid email format
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'city',
      type: 'string',
      title: 'City',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'state',
      type: 'string',
      title: 'State',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'zipCode',
      type: 'string',
      title: 'ZIP Code',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone',
      validation: Rule => Rule.required().regex(/^\d+$/, 'Phone number should be digits only'),
    }),
    defineField({
      name: 'paymentMethod',
      type: 'string',
      title: 'Payment Method',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: 'Cash On Delivery', value: 'Cash On Delivery' }, // Only allow Cash On Delivery
        ],
      },
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{ type: 'cartItem' }], // Reference the cartItem schema
      validation: Rule => Rule.required(), // Ensure at least one item is added
    }),
    defineField({
      name: 'totalPrice',
      type: 'number',
      title: 'Total Price',
      validation: Rule => Rule.required().min(0), // Ensure total price is non-negative
    }),
  ],
});
