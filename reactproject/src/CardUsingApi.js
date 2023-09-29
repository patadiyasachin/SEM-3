import { useEffect, useState } from 'react'
import './index.css';
import { useParams, Link, useNavigate } from 'react-router-dom';

function StudentCard() {
    const [faculties, setFaculties] = useState([])
    const [tempfaculties, setTempFaculties] = useState([])
    useEffect(() => {
        fetch('https://64a23471b45881cc0ae4e04a.mockapi.io/faculties')
            .then((res) => { return res.json() })
            .then((res) => {
                setFaculties(res)
                setTempFaculties(res)
            })
    }, [])

    function deleteFaculty(id) {
        fetch('https://64a23471b45881cc0ae4e04a.mockapi.io/faculties/' + id, { method: "DELETE" })
        setFaculties(faculties.filter((fac) => { return fac.id !== id }))
    }

    function serchData(e) {
        // if(e.key=="Backspace"){
        //     setFaculties(tempfaculties);
        // }
        
        if (e.target.value !== "") {
            setFaculties(
                faculties.filter((fac) => {
                    return fac.name.toLowerCase().includes(e.target.value);
                })
            );
        } 
        else {
            setFaculties(tempfaculties);
        }
    }

    var formatedFacultie = faculties.map((e, index) => {

        return (
            // <div className='col-3 p-2'>
            //     <div class="card eventHover">
            //         <img src={e.avatar} class="card-img-top" alt="..." />
            //         <div class="card-body">
            //             <h5 class="card-title">{e.name}</h5>
            //             <p class="card-text">{e.createdAt}</p>
            //             <Link to={"/Detail/" + e.id} className="btn btn-primary ms-4">Detail</Link>
            //             <Link to={"/edit/"+e.id} className="btn btn-primary ms-3 mt-3 ">Edit</Link>
            //             <button className='btn btn-primary ms-3' onClick={()=>{deleteFaculty(e.id)}}>Delete</button>
            //         </div>
            //     </div>
            // </div>


            <div className="col-4 p-2 con">
                <div class="card">
                    <img src={e.avatar} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <div class="content">
                            <h5 class="card-title">{e.name}</h5>
                            <p class="card-text">Some quick example<br />{e.createdAt}</p>
                            <Link to={"/Detail/" + e.id} className="btn btn-primary">Detail</Link>
                            <Link to={"/edit/" + e.id} className="btn btn-primary ms-1">Edit</Link>
                            <button class="btn btn-primary ms-1" onClick={() => { 
                                const swalWithBootstrapButtons = Swal.mixin({
                                    customClass: {
                                      confirmButton: 'btn btn-success',
                                      cancelButton: 'btn btn-danger'
                                    },
                                    buttonsStyling: false
                                  })
                                  
                                  swalWithBootstrapButtons.fire({
                                    title: 'Are you sure?',
                                    text: "You won't be able to revert this!",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonText: 'Yes, delete it!',
                                    cancelButtonText: 'No, cancel!',
                                    reverseButtons: true
                                  }).then((result) => {
                                    if (result.isConfirmed) {
                                        deleteFaculty(e.id) 
                                      swalWithBootstrapButtons.fire(
                                        'Deleted!',
                                        'Your file has been deleted.',
                                        'success'
                                      )
                                    } else if (
                                      /* Read more about handling dismissals below */
                                      result.dismiss === Swal.DismissReason.cancel
                                    ) {
                                      swalWithBootstrapButtons.fire(
                                        'Cancelled',
                                        'Your imaginary file is safe :)',
                                        'error'
                                      )
                                    }
                                  })
                            }}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>

            <div>
                <input type="text" placeholder="Search Faculty" className="form-control border border-primary mt-4 w-50 d-block mx-auto" onKeyDown={(e)=>{if(e.key=="Backspace"){
                    setFaculties([...tempfaculties])
                }}} onChange={(e) => {
                    serchData(e)
                }}></input>
            </div>

            <div className='row'>
                {formatedFacultie}
            </div>

            {/* <button className="btn btn-primary btn d-block mx-auto w-25 mt-3" onClick={() => { navigate('/add')}}>+ Add Faculty</button> */}
        </>
    )
}

function StudentDetail() {
    const { id } = useParams()
    const [faculties, setFaculties] = useState({})
    useEffect(() => {
        fetch('https://64a23471b45881cc0ae4e04a.mockapi.io/faculties/' + id)
            .then((res) => { return res.json() })
            .then((res) => {
                setFaculties(res)
            })
    }, [])
    return (
        <>
            <h3>{faculties.name}</h3>
            <Link to="/card2" className="btn btn-primary d-block mx-auto w-25">Back</Link>
        </>
    )
}

function AddData(props) {
    const [data, setData] = useState({});
    const { id } = useParams()
    let navigate=useNavigate()
    function add() {
        fetch('https://64a23471b45881cc0ae4e04a.mockapi.io/faculties', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        }).then((res) => {
            setData(res)
            navigate('/card2')
        })
    }

    function edit() {
        fetch('https://64a23471b45881cc0ae4e04a.mockapi.io/faculties/' + id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => {
                setData(res)
                navigate('/Detail/' + id)
            })
    }

    function sendData() {
        if (props.status) {
            add()
        }
        else {
            edit()
        }
    }

    useEffect(() => {
        if (!props.status) {
            fetch('https://64a23471b45881cc0ae4e04a.mockapi.io/faculties/' + id)
                .then((res) => { return res.json() })
                .then((res) => {
                    setData(res)
                })
        }
    }, [])

    // function add() {
    //     fetch('https://64a23471b45881cc0ae4e04a.mockapi.io/faculties', {
    //             method: "POST",
    //             body: JSON.stringify(data),
    //             headers: { "Content-Type": "application/json" }
    //         }).then((res) => { navigate('/card2') })
    // }

    return (
        <>
            <input type='text' className='mt-2 border-1 border-radius-3 ' value={data.createdAt} placeholder="createdAt" onChange={(e) => { setData({ ...data, createdAt: e.target.value }) }} />
            <input type='text' className='mt-2 border-1 border-radius-3 ' value={data.name} placeholder="name" onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
            <input type='text' className='mt-2 border-1 border-radius-3 ' value={data.avatar} placeholder="avatar" onChange={(e) => { setData({ ...data, avatar: e.target.value }) }} />
            {/* <button className='mt-2 border border-radius-3 ' onClick={() => { add() }}>+ Add</button> */}
            <button className='mt-2 border border-radius-3 ' onClick={() => { sendData() }}>{props.status ? "Add" : "Edit"}</button>
        </>
    )
}

export { StudentCard, StudentDetail, AddData }


















