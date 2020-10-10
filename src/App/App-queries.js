export const fetchPosts = `
* [_type=="post"] | order (publishedAt, DESC){
  "id":_id,
  "slug": slug.current,
  title,
  body,
  publishedAt,
  ...author->{
    "author": name
  },
  "videos": video[]{
	  url
  },
  "images": mainImage[]{
    ...asset->{
    url
    }
  },
  "categories": categories[]->{
    "category": title
  }
}
`
