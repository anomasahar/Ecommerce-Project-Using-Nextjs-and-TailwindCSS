import { type SchemaTypeDefinition } from 'sanity'
import {product} from '@/sanity/product'
import {order} from '@/sanity/order'
import { cartItem } from '../cartItem'
import { message } from '@/sanity/contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,order,cartItem,message],
}
