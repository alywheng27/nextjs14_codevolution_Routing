import React from 'react'

/**
 * !
 * ? [[..foldername]] captures all routes (means including parent folder) and maps them to page.tsx.
 * ! Shows 'Docs Page' when no segment in URL
 * //
 * todo
 * *
 */

// slug variable is used because the name of the folder is slug.
const Slug = ({ params }: { params: {
  slug: string[];
} }) => {
  if(params.slug?.length === 2) {
    return <h1>Viewing docs for feature { params.slug[0] } and concept { params.slug[1] }</h1>
  }else if(params.slug?.length === 1) {
    return <h1>Viewing docs for feature { params.slug[0] }</h1>
  }
  return (<div>Docs page</div>)
  // Shows 'Docs Page' when no segment in URL
}

export default Slug