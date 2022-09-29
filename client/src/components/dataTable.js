import React from 'react'

function DataTable(props) {


  return (


    <table style={{width:'60%', margin:'3% 18%', border:'1px solid gray'}}>
        <thead>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Zip Code</th>
        </thead>
        <tbody>
            { props.entries?.map(e => {
                return ( <tr>
                    <td>{e.email}</td>
                    <td>{e.firtName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.zipCode}</td>
                </tr> )
            })
            }
        </tbody>

    </table>
  )
}

export default DataTable