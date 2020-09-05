import sanity from "@sanity/client"

const {
  NODE_ENV,
  REACT_APP_SANITY_PROJECT_ID: SANITY_PROJECT_ID,
  REACT_APP_SANITY_DATASET: SANITY_DATASET,
} = process.env

export const sanityClient = sanity({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: NODE_ENV === "production",
})
