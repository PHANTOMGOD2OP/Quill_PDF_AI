import { Pinecone } from "@pinecone-database/pinecone";


export const getPinecone = async () => {
  const client = new Pinecone():

  await client.init({
    apiKey: process.env.PINECONE_API_KEY!,
    environment: "gcp-starter-free",
  })

  return client
}
