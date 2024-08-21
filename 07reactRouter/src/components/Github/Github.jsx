import React,{ useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

 const data = useLoaderData()
 // this hook is use to load data from loader method in routes.

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json()
    //             .then(data => {
    //                 console.log(data);
    //                 setData(data)
    //             }))
    // }, [])


    return (
        <div className='tect-center m-4 bg-gray-600
    tect-white p-4 tect-3xl'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} width={300} ></img>
        </div>

    )
}

export default Github;

export const  githubLoader = async() => {
    const response = await fetch('https://api.github.com/users/kumarchintu11')
    return response.json()

}
