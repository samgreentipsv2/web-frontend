import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

// interface Props {
//     category: string;
// }

const GamesByCat = () => {
    const [category, setcategory] = useState<string>();
    const [searchParams, setSearchParams] = useSearchParams();
     const [games, setgames] = useState<[]>();




    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}api/gamebycat/${searchParams.get('category')?.toString()}`,  {
          headers: { 'Content-Type': 'application/json'
      
                  },
              withCredentials: true
      }
        ).then((res)=>{
          // console.log(res.data.games)
          setgames(res.data.games)
          // return (res.data.user)
        })
        
       }, [])

  return (
    <div>

<span className=' faq viphdtxt'>
        <h1>{searchParams.get('category')?.toString()}</h1>  
        </span>


          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
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
             
              <TableCell align="left">{row.league}</TableCell>
              <TableCell align="left">{row.match}</TableCell>
              <TableCell align="left">{row.prediction}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </div>
  )
}

export default GamesByCat