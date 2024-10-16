import { defineType,defineField } from "sanity"

export const product = defineType({
    name:'product',
    type:'document',
    title:'Product',
    fields:[
        defineField({
            name:'title',
            type:'string',
            title:'Product Title',
            validation:Rule => Rule.required(),
        }),
        defineField({
            name:'slug',
            type:'slug',
            title:'Slug',
            options:{
                source:'title',
                maxLength:50
            },
            validation:Rule=>Rule.required(),
        }),
        defineField({
            name:'price',
            type:'number',
            title:'price',
            validation:Rule=>Rule.required(),
        }),
        defineField({
            name:'description',
            type:'text',
            title:'description',
            validation:Rule=>Rule.required(),
        }),
        defineField({
            name:'image',
            type:'image',
            title:'Image',
            validation:Rule=>Rule.required(),
        }),
    ]
})