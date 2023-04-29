import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export interface catProps{
    id: number;
    category_name: string;
    
}

const SingVip = ({category_name}: catProps) => {

  
 
    const [open, setOpen] = React.useState(false);
    const [category, setcategory] = useState<string>();
    const [vipgames, setvipgames] = useState<[]>();
    const [vipodds, setvipodds] = useState(0);
    const [betking, setbetking] = useState(0);
    const [onexbet, setonexbet] = useState(0);
    const [twentytwobet, settwentytwobet] = useState(0);
    const [sportybet, setsportybet] = useState(0);
    const [bet9ja, setbet9ja] = useState(0);
    const [helabet, sethelabet] = useState(0);
    const [date, setdate] = useState(0);

    useEffect(() => {

      // const cookieValue  = document.cookie
      // .split("; ")
      // .find((row) => row.startsWith("_auth="))
      // ?.split("=")[1];


      const cookieValue = localStorage.getItem('_auth');

      axios.get(`${import.meta.env.VITE_SERVER_URL}api/vipodd/${category}`,  {
        headers: { 'Content-Type': 'application/json',
                    'Authorization': `Token ${cookieValue}`

                },
            withCredentials: true
    }
      ).then((res)=>{
        console.log(res.data.vipodds[0])
        setvipodds(res.data.vipodds[0].total_odds)
        setbetking(res.data.vipodds[0].betking_code)
        setonexbet(res.data.vipodds[0].onexbet_code)
        settwentytwobet(res.data.vipodds[0].twentytwobet_code)
        setsportybet(res.data.vipodds[0].sportybet_code)
        setbet9ja(res.data.vipodds[0].bet9ja_code)
        sethelabet(res.data.vipodds[0].Helabet_code)
        setdate(res.data.vipodds[0].date)
        setvipgames(res.data.vipgames)
       
      })
    }, [category])

  
    const handleClickOpen = () => {
      setOpen(true);
      setcategory(category_name)

     
    };
  
    const handleClose = () => {
      setOpen(false);
    };



  return (
    <>
     <><div className='planbox'>
      <h2>{category_name}</h2>
      <button  className='planbtn btn2' onClick={handleClickOpen}>
        View Codes
      </button>
      </div></>
      <div>
    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please Gamble Responsibly"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

          { <TableContainer component={Paper}>
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
          {vipgames?.map((row:any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <p>{row.time}</p>
              </TableCell>
              <TableCell align="right">{row.match}</TableCell>
              <TableCell align="right">{row.Prediction}</TableCell>
              <TableCell align="right">{row.odd}</TableCell>
            </TableRow>
          ))}

        <>
       
        <span className='vipodds'><p><strong>Total Odds</strong>: {vipodds}</p></span>
        <span className='vipodds'><p><strong>BetKing</strong> : {betking}</p></span>
        <span className='vipodds'><p><strong>1xbet</strong> :{onexbet}</p></span>
        <span className='vipodds'><p><strong>22bet</strong> :{twentytwobet}</p></span>
        <span className='vipodds'><p><strong>Sportybet</strong> : {sportybet}</p></span>
        <span className='vipodds'><p><strong>Bet9ja</strong> :{bet9ja}</p></span>
        <span className='vipodds'><p><strong>Helabet</strong> :{helabet}</p></span>
        <span className='vipodds'><p><strong>Date </strong>: {date}</p></span>
        
        </>
        </TableBody>
      </Table>
    </TableContainer>
    }

     
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Done</Button>
      
        </DialogActions>
      </Dialog>
    </div>
    </>
  )
}

export default SingVip;