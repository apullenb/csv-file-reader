import { useState } from 'react'
import api from '../routes/config'

function Upload(props) {

    const [file, setFile] = useState('')
    
    
    const fileUpload = async () => {
        const response = await api.postFile(file)
        props.saveData(response.data)
    }

  return (
    <div>
        <h3>Upload Your .csv File:</h3>
        <input type='file' name='file' onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={fileUpload}>Submit</button>
    </div>
   
  )
}

export default Upload