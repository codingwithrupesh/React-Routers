import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // data is coming from the  loader using the  below hooks
    const data = useLoaderData()
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
// some optimaizations 
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/codingwithrupesh')
  return response.json()
}