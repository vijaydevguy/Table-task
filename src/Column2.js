import React from 'react'
import  { Table } from 'react-bootstrap'


const Column2 = () => {
  return (
    <>
      <div className='table-common'>
      <Table  bordered hover>
            <thead>
                <tr>
                    <th>Column</th>
                    <th>Column</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Info 1</td>
                    <td>Info 2</td>
                </tr>
            </tbody>
        </Table>
      </div>
       
    </>
  )
}

export default Column2
