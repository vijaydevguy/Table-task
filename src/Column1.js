import React from 'react'
import  { Table } from 'react-bootstrap'

const Column1 = () => {
  return (
    <>
      <div className='table-common'>
        <Table  bordered hover>
            <thead>
                <tr>
                    <th>Column</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Info 1</td>
                </tr>
            </tbody>
        </Table>
      </div>
      
    </>
  )
}

export default Column1
