import React from 'react'
import './Other.css'
import {  Typography, Button,TextField} from "@mui/material";

function Other() {
  return (
    <div className='other-container'>
       
        <div className="other-heading">
          <Typography variant="h5">Other Information</Typography>
        </div>
        <div className='other-content'>
        <TextField
          label="Additional Information"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          className="other-textfield"
        />
        </div>
         <div className="other-btn">
                <Button
                  variant="outlined"
                  
                  className="other-clear-btn"
                >
                  Clear
                </Button>
                <Button
                  variant="contained"
                  
                  className="other-submit-btn"
                >
                  Save
                </Button>
              </div>
     
    </div>
  )
}

export default Other
