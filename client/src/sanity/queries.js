import { sanityClient } from "./sanityClient";

export async function fetchPortfolio() {
  const query = `*[_type == "portfolioItem"] | order(_createdAt desc){
    _id,
    title,
    category,
    hashtags,
    link,
    "imageUrl": image.asset->url,
    "hoverImageUrl": hoverImage.asset->url
  }`;

  return sanityClient.fetch(query);
}
