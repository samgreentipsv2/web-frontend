import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

interface Props{

}

const BetOfTheDay = (props: Props) => {
    const [games, setgames] = useState<[]>();


  useEffect(() => {
    axios.get(`http://16.170.170.77:8000/api/botd`,  {
      headers: { 'Content-Type': 'application/json'
  
              },
          withCredentials: true
  }
    ).then((res)=>{
      // console.log(res.data.user[0].first_name)
      setgames(res.data.betofday)
      // return (res.data.user)
    })
    
   }, [])
    

    function createData(
      date: string,
      game: string,
      prediction: string  
      ) {
        return { date, game,prediction };
      }



      const rows = [
        createData( '7-4-2023', 'Inter vs AC Milan', 'Over 2.5')
      ];
      




  return (
      <>
      <div className='betofday'>
     <span><h5> BET OF THE DAY</h5></span>


     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Game</TableCell>
            <TableCell align="right">Prediction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.game}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.game}</TableCell>
              <TableCell align="right">{row.prediction}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

     </div>
     </>
  )
}

export default BetOfTheDay;

