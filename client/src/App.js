import { useState } from 'react'
import './App.css';
import DataTable from './components/dataTable';
import Upload from './components/Upload';



function App() {

  const [data, setData] = useState('')

  return (
    <div className="App">
    <h1>File Upload</h1>
    <hr />
    <Upload saveData={setData} />
    <hr />
    <DataTable data={data} />
    </div>
  );
}

export default App;
