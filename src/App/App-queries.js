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
  video[]{
	  url
  },
  "images": mainImage[]{
    ...asset{
      "url": _ref
    }
  },
  "categories": categories[]->{
    "category": title
  }
}
`
