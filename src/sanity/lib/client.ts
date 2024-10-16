import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId,  } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token:process.env.SANITY_ORDER_TOKEN,
})

export const contactClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token:process.env.SANITY_CONTACT_TOKEN,
})
