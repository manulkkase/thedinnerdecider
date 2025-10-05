// src/services/contentfulClient.ts
import * as contentful from 'contentful';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error("Contentful space ID and access token must be defined");
}

export const contentfulClient = contentful.createClient({
  space: spaceId,
  accessToken: accessToken,
});