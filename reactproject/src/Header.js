
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import Card from './Faculty';
import { useState } from 'react';
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
    FacultyName: "Dr. Pradyumansinh Jadeja",
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


export default function Header() {
  return (
    <div className="row">
      <div className="col">
        <nav class="navbar navbar-expand-lg bg-body-tertiary" id="nav">
          <div class="container-fluid">
            <Link class="navbar-brand" to="./home">Home</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="./cards">CardForFaculties</Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to='./card2'>CardForStudents</Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to='./add'>AddStudent</Link>
                </li>

              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search" id="searchInp"/>
                <button class="btn btn-outline-success" type="submit">DarkMode</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}