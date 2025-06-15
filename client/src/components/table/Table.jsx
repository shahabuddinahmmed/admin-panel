import React from 'react';
import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', img: 'https://www.pngkit.com/png/detail/950-9501518_our-terms-working-with-you-professional-boy-image.png', age: 35, status: 'Success' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', img: 'https://www.pngkit.com/png/detail/950-9501518_our-terms-working-with-you-professional-boy-image.png', age: 42, status: 'Processing' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', img: 'https://www.pngkit.com/png/detail/950-9501518_our-terms-working-with-you-professional-boy-image.png', age: 45, status: 'Pending' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', img: 'https://www.pngkit.com/png/detail/950-9501518_our-terms-working-with-you-professional-boy-image.png', age: 16, status: 'Success' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', img: 'https://www.pngkit.com/png/detail/950-9501518_our-terms-working-with-you-professional-boy-image.png', age: null, status: 'Success' }
  ];

  return (
        <>
            <TableContainer component={Paper} className="table" >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableCell">ID</TableCell>
                      <TableCell className="tableCell" >Last Name</TableCell>
                      <TableCell className="tableCell" >First Name</TableCell>
                      <TableCell className="tableCell" >Profie</TableCell>
                      <TableCell className="tableCell" >Age</TableCell>
                      <TableCell className="tableCell" >Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell className='tableCell'>{row.id}</TableCell>
                        <TableCell className='tableCell'>{row.lastName}</TableCell>
                        <TableCell className='tableCell'>{row.firstName}</TableCell>
                        <TableCell className='tableCell'>
                          <div className="cellWrapper">
                            <img className='image' src={row.img} alt="" />
                          </div>
                        </TableCell>
                        <TableCell className='tableCell'>{row.age}</TableCell>
                        <TableCell className='tableCell'>
                          <span className={`status ${row.status}`}>{ row.status }</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
        </>
  )
}

export default List