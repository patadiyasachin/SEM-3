import { useState } from "react";
import './index.css';
import Header from "./Header";
import AddFaculties from "./Add";
let arr = [
  {
    FacultyID: 1,
    FacultyName: "Dr. Gopi Sanghani",
    FacultyDesignation: "Dean - School of Computer Science",
    FacultyEducationQualification: "Ph.D. , M.E. (CE)",
    FacultyExperience: "22+ Years",
    FacultyWorkingSince: "Jul-2012",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg",
  },
  {
    FacultyID: 2,
    FacultyName: "Dr. Nilesh Gambhava",
    FacultyDesignation: "Professor",
    FacultyEducationQualification: "Ph.D. , M.E. (CE)",
    FacultyExperience: "19+ Years",
    FacultyWorkingSince: "Jul-2009",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg",
  },
  {
    FacultyID: 3,
    FacultyName: "Dr. Pradyuman Jadeja",
    FacultyDesignation: "Associate Professor",
    FacultyEducationQualification: "Ph.D. , M.E. (CE)",
    FacultyExperience: "17+ Years",
    FacultyWorkingSince: "Jul-2009",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg",
  },
  {
    FacultyID: 4,
    FacultyName: "Prof. Maulik Trivedi",
    FacultyDesignation: "Assistant Professor",
    FacultyEducationQualification: "M.Tech. (CSE)",
    FacultyExperience: "14+ Years",
    FacultyWorkingSince: "Jun-2009",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg",
  },
  {
    FacultyID: 5,
    FacultyName: "Prof. Dixita Kagathara",
    FacultyDesignation: "Assistant Professor",
    FacultyEducationQualification: "M.Tech. (Web Technology)",
    FacultyExperience: "13+ Years",
    FacultyWorkingSince: "Jul-2009",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/9---28-04-2023-02-06-37.jpg",
  },
  {
    FacultyID: 6,
    FacultyName: "Prof. Rupesh Vaishnav",
    FacultyDesignation: "Assistant Professor",
    FacultyEducationQualification: "M.E. (CE)",
    FacultyExperience: "14+ Years",
    FacultyWorkingSince: "May-2013",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/10---28-04-2023-02-07-03.jpg",
  },
  {
    FacultyID: 7,
    FacultyName: "Prof. Swati Sharma",
    FacultyDesignation: "Assistant Professor",
    FacultyEducationQualification: "M.Tech. (CSE)",
    FacultyExperience: "14+ Years",
    FacultyWorkingSince: "May-2013",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/11---29-04-2023-01-44-21.jpg",
  },
  {
    FacultyID: 8,
    FacultyName: "Prof. Arjun Bala",
    FacultyDesignation: "Assistant Professor",
    FacultyEducationQualification: "M.Tech. (CSE)",
    FacultyExperience: "12+ Years",
    FacultyWorkingSince: "Jul-2013",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg",
  },
  {
    FacultyID: 9,
    FacultyName: "Prof. Mayur Padia",
    FacultyDesignation: "Assistant Professor",
    FacultyEducationQualification: "M.E. (CE)",
    FacultyExperience: "13+ Years",
    FacultyWorkingSince: "Jul-2011",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/13---28-04-2023-02-07-48.jpg",
  },
  {
    FacultyID: 10,
    FacultyName: "Prof. Vijay Shekhat",
    FacultyDesignation: "Assistant Professor",
    FacultyEducationQualification: "M.E. (CE)",
    FacultyExperience: "10+ Years",
    FacultyWorkingSince: "Jun-2012",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/16---28-04-2023-02-08-00.jpg",
  },
  {
    FacultyID: 11,
    FacultyName: "Prof. Naimish Vadodariya",
    FacultyDesignation: "Assistant Professor",
    FacultyEducationQualification: "M.E. (CE)",
    FacultyExperience: "9+ Years",
    FacultyWorkingSince: "Jun-2015",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/214---28-04-2023-02-08-35.jpg",
  },
  {
    FacultyID: 12,
    FacultyName: "Prof. UmeshKumar Thoriya",
    FacultyDesignation: "Assistant Professor",
    FacultyEducationQualification: "M.Tech. (CSE)",
    FacultyExperience: "9+ Years",
    FacultyWorkingSince: "Jul-2015",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/221---28-04-2023-02-08-50.jpg",
  },
  {
    FacultyID: 13,
    FacultyName: "Prof. Jayesh Vagadiya",
    FacultyDesignation: "Assistant Professor",
    FacultyEducationQualification: "M.E (CE)",
    FacultyExperience: "7+ Years",
    FacultyWorkingSince: "Jul-2015",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/219---28-04-2023-02-09-01.jpg",
  },
  {
    FacultyID: 14,
    FacultyName: "Prof. Krunal Vyas",
    FacultyDesignation: "Assistant Professor",
    FacultyEducationQualification: "M.Tech.(ICT), B.E. (EC)",
    FacultyExperience: "8+ Years",
    FacultyWorkingSince: "Jul-2018",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/290---28-04-2023-02-09-16.jpg",
  },
  {
    FacultyID: 15,
    FacultyName: "Prof. Jay Dhamsaniya",
    FacultyDesignation: "Assistant Professor",
    FacultyEducationQualification: "M.E. (E.C.), B.Tech. (E.C.)",
    FacultyExperience: "10+ Years",
    FacultyWorkingSince: "Jul-2012",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/46---28-04-2023-02-09-28.jpg",
  },
  {
    FacultyID: 16,
    FacultyName: "Prof. Mehul Bhundiya",
    FacultyDesignation: "Assistant Professor",
    FacultyEducationQualification: "BE (CE), ME (CE)",
    FacultyExperience: "8+ Years",
    FacultyWorkingSince: "Aug-2018",
    FacultyImage:
      "https://darshan.ac.in/U01/Faculty-Photo/294---28-04-2023-02-09-43.jpg",
  },
];

export default function Card() {
  const [fac, setFac] = useState(arr);
  const [obj, setObj] = useState({})

  function deleteFacult(props) {
    var temp = [...fac]
    temp.splice(props, 1)
    setFac(temp)
  }

  function editFaculties(props) {
    let facEdit = document.getElementById("inputsEdit")
    facEdit.classList.toggle("displayEdit")
    let name = document.getElementById("name").value
    let pathOfImg = document.getElementById("path").value
    let exp = document.getElementById("exp").value

    let name2 = document.getElementById("name")
    let pathOfImg2 = document.getElementById("path")
    let exp2 = document.getElementById("exp")

    name2.value = fac[props].FacultyName
    setObj(name);
    pathOfImg2.value = fac[props].FacultyImage
    setObj(name);
    exp2.value = fac[props].FacultyExperience
    setObj(name);

    fac[props].FacultyName = name;
    fac[props].FacultyImage = pathOfImg;
    fac[props].FacultyExperience = exp;

    let temp = [...fac]
    setFac(temp);
  }

  function addToggle() {
    let facEdit = document.getElementById("inputsEdit")
    facEdit.classList.toggle("displayEdit")
  }

  function addFaculties() {
    let name = document.getElementById("name").value
    let pathOfImg = document.getElementById("path").value
    let exp = document.getElementById("exp").value

    let newFac = {
      FacultyName: name,
      FacultyImage: pathOfImg,
      FacultyExperience: exp,
    }
    let temp2 = [...fac, newFac]
    setFac(temp2)
  }

  function serchData(e) {
    // if(e.key==8){
    //   console.log(e.key)
    //   setFac([...arr]);
    // }
    if (e.target.value != "") {
      setFac(
        fac.filter((fac) => {
          return fac.FacultyName.toLowerCase().includes(e.target.value);
        })
      );
    } else {
      setFac([...arr]);
    }
  }


  var printDerail = fac.map((e, index) => {
    return (
      <>

        {/* <div className="col-3 p-2">
          <div class="card eventHover">
            <img src={e.FacultyImage} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{e.FacultyName}</h5>
              <p class="card-text">{e.FacultyExperience}</p>
              <button className="btn btn-primary btn" onClick={() => { deleteFacult(index) }} id="btn">Delete</button>
              <button className="btn btn-primary btn mt-1 ms-2 mb-1" onClick={() => { editFaculties(index) }} id="btn">Edit</button>
            </div>
          </div>
        </div> */}


        <div className="col-4 p-2 con">
          <div class="card">
            <img src={e.FacultyImage} class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="content">
                <h5 class="card-title">{e.FacultyName}</h5>
                <p class="card-text">Some quick example<br />{e.FacultyExperience}</p>
                <button class="btn btn-primary" onClick={() => {
                    //code for sweet alert you have to add script for sweet alert in html file 
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
                      deleteFacult(index) 
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
                <button class="btn btn-primary ms-1" onClick={() => {
                  editFaculties(index)
                }}>Edit</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  })


  return (
    <>
      <div id="inputsEdit">
        <input type="text" placeholder="Enter Name" id="name" className="me-3 mt-2 mb-2 " />
        <input type="text" placeholder="Enter Path" id="path" className="me-3 mt-2 mb-2 " />
        <input type="text" placeholder="Enter experience" id="exp" className="me-3 mt-2 mb-2 " />
        {/* <button id="btnForSave" className="btn btn-success mb-1 " onClick={} >Save Changes</button> */}
        <button id="applyChanges" className="btn btn-success mb-1 ms-3" onClick={addFaculties}>Add</button>
      </div>

      <div>
        <input type="text" placeholder="Search Faculty" className="form-control border border-primary mt-4 w-50 d-block mx-auto" onChange={(e) => {
          serchData(e)
        }}></input>
      </div>

      {printDerail}

      <div>
        <a href="#" className="btn btn-primary btn styleForBtn" onClick={() => { addToggle() }} id="addBtn">+ Add Faculty</a>
      </div>
    </>
  )
}
