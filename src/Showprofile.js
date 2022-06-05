import { Box } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import { userdetails } from './data';

function Showprofile() {
  const {id} = useParams()
  const user = userdetails[id];
  console.log(user);
  return (
    <Box sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
      <h1>Name: {user.name}</h1>
      <h2>Age: {user.age}</h2>
      <h2>Native place: {user.nativeplace}</h2>
      <h2>Hobbies: </h2>
      {
        user.hobbies.map((hobby,index)=>{
          return <li>{hobby}</li>
        })
      }
      {/* <h2>{user.address}</h2>
      <h2>{user.qualification}</h2>
      <h2>{user.skills}</h2>
      <h2>{user.workHistory}</h2> */}
      {
        user.address && Object.keys(user.address).map((key,index)=>{
          return <h2>{key}: {user.address[key]}</h2>
        })
      }
      {
        user.qualification && Object.keys(user.qualification).map((key,index)=>{
          return <h2>{key}: {user.qualification[key]}</h2>
        }
        )
      }
      {
        user.skills && Object.keys(user.skills).map((key,index)=>{
          return <h2>{key}: {user.skills[key]}</h2>
        }
        )
      }
      {
        user.workHistory && Object.keys(user.workHistory).map((key,index)=>{
          return <h2>{key}: {user.workHistory[key]}</h2>
        }
        )
      }

    </Box>
  )
}

export default Showprofile
