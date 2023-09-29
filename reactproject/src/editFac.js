import { useEffect, useState } from "react"
import { useParams,useNavigate } from "react-router-dom"

export default function EditFac(){
        const [data,setData]=useState({})
        const {id}=useParams()
        const navigate=useNavigate()

        useEffect(() => {
            fetch('https://64a23471b45881cc0ae4e04a.mockapi.io/faculties/' + id)
                .then((res) => { return res.json() })
                .then((res) => {
                    setData(res)
                })
        }, [])

        function editData(){
            fetch('https://64a23471b45881cc0ae4e04a.mockapi.io/faculties/'+id, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            })
            .then((res) => { navigate('/Detail/'+id) })
        }

    
    return(
        <>
            <input type='text' className='mt-2 border-1 border-radius-3 ' value={data.createdAt} placeholder="createdAt" onChange={(e) => { setData({ ...data, createdAt: e.target.value }) }} />
            <input type='text' className='mt-2 border-1 border-radius-3 ' value={data.name} placeholder="name" onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
            <input type='text' className='mt-2 border-1 border-radius-3 ' value={data.avatar} placeholder="avatar" onChange={(e) => { setData({ ...data, avatar: e.target.value }) }} />
            <button className='mt-2 border border-radius-3 ' onClick={() => { editData()}}>Updata</button>  
        </>

    )
}