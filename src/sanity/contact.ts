import { defineType, defineField } from "sanity";

export const message = defineType({
    name: 'message',
    type: 'document',
    title: 'Message',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'email',
            type: 'string',
            title: 'Email',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'message',
            type: 'text',
            title: 'Message',
            validation: Rule => Rule.required(),
        }),
    ]
});
