import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


interface Props {}

const FreePredictions = (props: Props) => {
  const [games, setgames] = useState<[]>();


  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/freepred`,  {
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
            <TableCell align="right">Game</TableCell>
            <TableCell align="right">Prediction</TableCell>
            <TableCell align="right">Odd</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games?.map((row:any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <p>{row.time}</p>
              </TableCell>
              <TableCell align="right">{row.match}</TableCell>
              <TableCell align="right">{row.category__category_name}</TableCell>
              <TableCell align="right">{row.odd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



      
    

    </>
  )
}

export default FreePredictions;