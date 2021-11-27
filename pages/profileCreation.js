import React from 'react'
import Header from '../components/Header/Header'
import { UpLoadProfileImage } from '../UI/UpLoadImage/UpLoadImage'
import UploadProject from '../UI/UpLoadImage/UploadProject'
function profileForm() {
    return (
        <div className="d-flex justify-content-center flex-column  m-5">
            <Header title="Individual profile form"/>
            <h5 className="h5 text-secondary mx-5 ">Profile Image</h5>
            <UpLoadProfileImage/>

        {/* Form */}
        <form className="mb-2 ">
          <div className="mb-2">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
               required
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              required
            />
          </div>

          <div className="mb-2 d-flex flex-wrap">
          <label className="form-label">Title</label>
          <select className="form-select form-select-sm " aria-label=".form-select-sm example" required>
  <option defaultValue>Frontend Developer</option>
  <option value="1">Backend Developer</option>
  <option value="2">Full Stack Developer</option>
  <option value="3">Dev Ops</option>
</select>
</div>

<div className="mb-2 d-flex flex-wrap">
<label className="form-label">Status</label>
  <select className="form-select form-select-sm " aria-label=".form-select-sm example" required>
  <option defaultValue>Intern</option>
  <option value="1">Volunteer</option>
  <option value="2">Part time Employed</option>
  <option value="3">Permanent Employed</option>
</select>
</div>

          <div className="mb-2">
           <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              required
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Phone Number</label>
            <input
              type="number"
              className="form-control"
              required
            />
          </div>


          <div className="mb-2">
            <label >Bio</label>
          <textarea className="form-control" placeholder="About you in 500 words" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
          </div>

{/*Technical Skills Tags */}
<h5 className="h5 text-secondary mx-5 ">Technical Skills</h5>

<div className="d-flex flex-wrap"> 

          <div className="mb-2 w-25 m-1 ">
          <select className="form-select form-select-sm " aria-label=".form-select-sm example" required>
  <option defaultValue>HTML</option>
  <option value="1">CSS</option>
  <option value="2">React</option>
  <option value="3">Java Script</option>
</select>
          </div>

          <div className="mb-2 w-25 m-1">
          <select className="form-select form-select-sm " aria-label=".form-select-sm example" required>
  <option defaultValue>HTML</option>
  <option value="1">CSS</option>
  <option value="2">React</option>
  <option value="3">Java Script</option>
</select>
          </div>

          <div className="mb-2 w-25 m-1">
          <select className="form-select form-select-sm " aria-label=".form-select-sm example" required>
  <option defaultValue>HTML</option>
  <option value="1">CSS</option>
  <option value="2">React</option>
  <option value="3">Java Script</option>
</select>
          </div>
</div>

{/* Other Skills Tags */}
<h5 className="h5 text-secondary mx-5 ">Other Skills</h5>

<div className="d-flex flex-wrap"> 

          <div className="mb-2 w-25 m-1">
          <select className="form-select form-select-sm " aria-label=".form-select-sm example" required>
          <option defaultValue>Node JS</option>
  <option value="1">Express</option>
  <option value="2">SQL</option>
  <option value="3">Mongoose</option>
</select>
          </div>

          <div className="mb-2 w-25 m-1">
          <select className="form-select form-select-sm " aria-label=".form-select-sm example" required>
          <option defaultValue>Node JS</option>
  <option value="1">Express</option>
  <option value="2">SQL</option>
  <option value="3">Mongoose</option>
</select>
          </div>

          <div className="mb-2 w-25 m-1">
          <select className="form-select form-select-sm " aria-label=".form-select-sm example" required>
          <option defaultValue>Node JS</option>
  <option value="1">Express</option>
  <option value="2">SQL</option>
  <option value="3">Mongoose</option>
</select>
          </div>
</div>

<div className="mb-2">
<h5 className="h5 text-secondary mx-5 ">Resume</h5>

            <input
              type="text"
              className="form-control"
              placeholder="Paste a link of your Resume pdf"
              required
            />
          </div>
{/* Button */}
          <input
            type="submit"
            value="Submit Form"
            style={{ backgroundColor: "#04739B" }}
            className="btn  rounded-0 border-0 w-100 text-light my-2 btn-primary"
          />

     {/* <UploadProject/>      */}
        </form>

        </div>
    )
}

export default profileForm
