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
    axios.get(`${import.meta.env.VITE_SERVER_URL}api/botd`,  {
      headers: { 'Content-Type': 'application/json'
  
              },
          withCredentials: true
  }
    ).then((res)=>{
      // console.log(res.data.betoftheday)
      setgames(res.data.betoftheday)
      // return (res.data.user)
    })
    
   }, [])
    

    // function createData(
    //   date: string,
    //   game: string,
    //   prediction: string  
    //   ) {
    //     return { date, game,prediction };
    //   }



    //   const rows = [
    //     createData( '7-4-2023', 'Inter vs AC Milan', 'Over 2.5')
    //   ];
      




  return (
      <>
      <div className='betofday'>
     <span><h5 className='home-sub'> BET OF THE DAY</h5></span>


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

     </div>
     </>
  )
}

export default BetOfTheDay;

