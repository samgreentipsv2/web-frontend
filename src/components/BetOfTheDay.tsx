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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Rowing } from '@mui/icons-material';







interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BetOfTheDay() {
  const [value, setValue] = React.useState(0);
  let keys: number = 0;

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
      

    })
    
   }, [])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='betoftheday'>
      <span><h5 className='home-sub'> BET OF THE DAY</h5></span>

      

    <Box sx={{ width: '100%' }}>
   
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

      
        <Tabs  sx={{indicatorColor:'#035A04'}} variant="scrollable" value={value} onChange={handleChange} aria-label="basic tabs example">


        {games?.map((row:any) => (<Tab className='tablecell'  key={row[0].time} label={new Date(row[0].time).toDateString()} {...a11yProps(0)} /> ))}
         
        </Tabs>
      </Box>

      
      
  {games?.map((row:any) => 
       <TabPanel  index={keys ++} value={value}>
      
        <TableContainer component={Paper}>
       <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
         <TableHead>

           <TableRow>
             <TableCell className='tablecell' sx={{color:"#035A04"}} align="left">League</TableCell>
             <TableCell className='tablecell' sx={{color:"#035A04"}} align="left">Match</TableCell>
             <TableCell className='tablecell' sx={{color:"#035A04"}} align="left">Prediction</TableCell>          
           </TableRow>

         </TableHead>
         <TableBody>

           {row[0].matches.map((game:any) =>
         
             <TableRow
               key={game.id}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <TableCell align="left">{game.league}</TableCell>
               <TableCell align="left">{game.match}</TableCell>
               <TableCell align="left">{game.prediction}</TableCell>            
             </TableRow>
)}
              
        
         </TableBody>
       </Table>
    </TableContainer>
      </TabPanel>

) }
     
  
    </Box>

    </div>
  )
        }






// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// interface Props{

// }

// const BetOfTheDay = (props: Props) => {
//     const [games, setgames] = useState<[]>();


//   useEffect(() => {
//     axios.get(`${import.meta.env.VITE_SERVER_URL}api/botd`,  {
//       headers: { 'Content-Type': 'application/json'
  
//               },
//           withCredentials: true
//   }
//     ).then((res)=>{
//       console.log(res.data.betoftheday)
//       setgames(res.data.betoftheday)
//       // return (res.data.user)
//     })
    
//    }, [])
    

//     // function createData(
//     //   date: string,
//     //   game: string,
//     //   prediction: string  
//     //   ) {
//     //     return { date, game,prediction };
//     //   }



//     //   const rows = [
//     //     createData( '7-4-2023', 'Inter vs AC Milan', 'Over 2.5')
//     //   ];
      




//   return (
//       <>
//       <div className='betofday'>
//      <span><h5 className='home-sub'> BET OF THE DAY</h5></span>


    //  <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell sx={{color:"#035A04"}}>Date</TableCell>
    //         <TableCell sx={{color:"#035A04"}} align="left">League</TableCell>
    //         <TableCell sx={{color:"#035A04"}} align="left">Match</TableCell>
    //         <TableCell sx={{color:"#035A04"}} align="left">Prediction</TableCell>
            
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {games?.map((row:any) => (
    //         <TableRow
    //           key={row.id}
    //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row">
    //             <p>{new Date(row.time).toDateString()}</p>
    //           </TableCell>
    //           <TableCell align="left">{row.league}</TableCell>
    //           <TableCell align="left">{row.match}</TableCell>
    //           <TableCell align="left">{row.prediction}</TableCell>
              
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>

//      </div>


     
//      </>
//   )
// }

// export default BetOfTheDay