import sanity from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const {
  NODE_ENV,
  REACT_APP_SANITY_PROJECT_ID: SANITY_PROJECT_ID,
  REACT_APP_SANITY_DATASET: SANITY_DATASET,
} = process.env

const sanityCredentials = {
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: NODE_ENV === "production",
}

export const sanityClient = sanity(sanityCredentials)
export const sanityimageUrl = imageUrlBuilder(sanityCredentials)

// export const sanityClient = sanity({
//   projectId: SANITY_PROJECT_ID,
//   dataset: SANITY_DATASET,
//   useCdn: NODE_ENV === "production",
// })
