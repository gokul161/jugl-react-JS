import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { userdetails } from './data';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Home() {
  const[value,setValue] = useState();
  const [userinformation,setUserinformation] = useState();
  const [click,setClick] = useState(false)

  const finduser = function(arr,keyword){
    const userdetails = []
    arr.find(function(arr1,index){
      if((arr1.name).toLowerCase() === (keyword).toLowerCase() || arr1.age === keyword || (arr1.nativeplace).toLowerCase() === keyword.toLowerCase() || (arr1.hobbies).includes(keyword) || Object.values(arr1.address).includes(keyword) || Object.values(arr1.qualification).includes(keyword) || Object.values(arr1.skills).includes(keyword) || Object.values(arr1.workHistory).includes(keyword)){
          userdetails.push(arr1)
      }
      })
      return userdetails;
  }

  function searchuser(){
    var searchdetails;
    if(value){
        searchdetails = finduser(userdetails,value)
        setUserinformation(searchdetails)
    }
    else{
      alert("Please enter a value")
    }
  }
  const navigation = useNavigate()
  return (
    <div className="container">
        <div>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,border:'1px solid #eee' }}
          onChange={(e)=>setValue(e.target.value)}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search profile"
            inputProps={{ 'aria-label': 'search google maps' }}
            required
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <Button variant="contained" onClick={searchuser}>Search</Button>

      <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
        {
          userinformation && userinformation.map((user,index) => {
            return(
              <Box key={index} height={100} width="80vw" bgcolor="#eee" display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
                <Typography fontSize="2rem" fontWeight="600">{user.name}</Typography>
                <Button variant="contained" color="primary" onClick={() => {navigation(`/showprofile/${index}`)}}>View Profile</Button>
                <Button variant="contained" color="secondary">Add to Favorite</Button>
                <Button variant="contained" color="secondary">Share</Button>
                <Button variant="contained" color="secondary" onClick={() => {setClick(!click)}}>{click ? "Connected" : "Connect"}</Button>
              </Box>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
