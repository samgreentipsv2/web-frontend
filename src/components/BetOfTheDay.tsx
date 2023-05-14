import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
      console.log(res.data.betoftheday)
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
            <TableCell sx={{color:"#035A04"}}>Date</TableCell>
            <TableCell sx={{color:"#035A04"}} align="left">League</TableCell>
            <TableCell sx={{color:"#035A04"}} align="left">Match</TableCell>
            <TableCell sx={{color:"#035A04"}} align="left">Prediction</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {games?.map((row:any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <p>{new Date(row.time).toDateString()}</p>
              </TableCell>
              <TableCell align="left">{row.league}</TableCell>
              <TableCell align="left">{row.match}</TableCell>
              <TableCell align="left">{row.prediction}</TableCell>
              
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

