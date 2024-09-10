import React, { useEffect, useState } from 'react'


const Fetchmethod = () => {

    const [user,setUser]=useState([])

    useEffect(()=>{
        const userHandler =async()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    
            const newData = await response.json()
    
            const limtData = newData.slice(0,50)
            setUser(limtData)
        }
        userHandler()
    },[])

  return (
   <table className="nested-table">
    <thead>
        <tr>
            <th>User-Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
        </tr>
    </thead>
    <tbody>
        {user.map(({userId,id,title,body})=>(
            <tr>
                <td>{userId}</td>
                <td>{id}</td>
                <td>{title}</td>
                <td>{body}</td>
            </tr>
        ))}
    </tbody>
   </table>
  )
}
export default Fetchmethod