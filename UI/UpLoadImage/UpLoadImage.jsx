import React from 'react'
import { ButtonFilled } from '../../components/Button/Button'
import Image from "next/image";
import styles from "./ProjectCard.module.css"

// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { deepOrange } from '@mui/material/colors';
export function UpLoadProfileImage() {
    return (
      <form>
      <div>
      <div >
                      {/* <Avatar src="/images/project1.png" sx={{ width: 76, height: 76 }} /> */}
                      </div>
      
                  <div className="d-flex d-flex justify-content-start ">
                  <div className="mb-2">
                    <label className="form-label">Attach Image </label>
                    <input
                      type="file"
                      className="form-control"
                      required
                    />
                  </div>
                  <ButtonFilled text="Submit Image"/>
      
                  </div>
      
              </div>
              </form>
    )
}

