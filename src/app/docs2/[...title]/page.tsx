import React from 'react'

//  ? [...foldername] (catch-all-segments) captures all URL segments and maps them to page.tsx.
// ! Shows 'page not found' when no segment in URL
// title variable is used because the name of the folder is slug.

export default function Title({ params, }: { params: {
    title: string[];
} }) {
    if(params.title.length === 2) {
        return (
            <div>Segment 1: { params.title[0] }, Segment 2: { params.title[1] }</div>
        )
    }else if(params.title.length === 1) {
        return (
            <div>Segment 1: { params.title[0] }</div>
        )
    }
    return (<div>No Segment</div>)
    // Shows 'page not found' when no segment in URL
}