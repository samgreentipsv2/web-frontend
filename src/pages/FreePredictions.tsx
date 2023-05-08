import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


interface Props {}

const FreePredictions = (props: Props) => {
  const [games, setgames] = useState<[]>();


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}api/freepred`,  {
      headers: { 'Content-Type': 'application/json'
  
              },
          withCredentials: true
  }
    ).then((res)=>{
      console.log(res.data.games)
      setgames(res.data.games)
      // return (res.data.user)
    })
    
   }, [])
    


  return (
    <>
      <span className=' faq viphdtxt'>
        <h1>Free Predictions</h1>  
        </span>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="left">Match</TableCell>
            <TableCell align="left">Prediction</TableCell>
            <TableCell align="left">Odd</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games?.map((row:any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                  {new Date(row.time).toDateString()}
              </TableCell>
              <TableCell align="left">{row.match}</TableCell>
              <TableCell align="left">{row.category__category_name}</TableCell>
              <TableCell align="left">{row.odd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



      
    

    </>
  )
}

export default FreePredictions;