import { Box, Button, Container, Input, Spinner, Text, VStack, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerNow, registerReset } from '../redux/LoginReducer/Actions';

function Register() {
    const navi=useNavigate();
    const toast=useToast();
    const [details,setDetails]=useState({
        email:'',
        password:'',
        confirmpassword:''
      })
      const dispatch=useDispatch();
      const loading=useSelector((store)=>{
        return store.LoginReducer.isLoading;
      });
      const registered=useSelector((store)=>{
          return store.LoginReducer.isRegistered;
      })
      // console.log(registered);

      useEffect(()=>{
        if(registered>0){
          dispatch(registerReset);
          toast({
            title: 'Account created.',
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
          navi('/login');
        }
      },[registered]);

     function register(e){
        e.preventDefault();
        dispatch(registerNow(details));
        setDetails({
            email:'',
            password:'',
            confirmpassword:''
          })
     } 

  return  loading? <Spinner
    thickness='4px'
    mt={'25%'}
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
    /> :
   <Box h={'100vh'} bg={"black"}>
  <VStack pt={'15%'} pb={'10px'}>
    <Box boxSize={{base:"80%",md:'50%',lg:'30%'}}>
    <Text as={'b'} color={'white'} fontSize={'4xl'}>Register</Text>
  <form onSubmit={register}>
    <Input type='email' value={details.email} onChange={(e)=>{
        setDetails({...details,email:e.target.value})
    }}
    placeholder='Email'
    m={'10px'}
    required={true}
    
    />
    <Input type='password' value={details.password} onChange={(e)=>{
      setDetails({...details,password:e.target.value});
    }} placeholder='Password' required={true}
   
    m={'10px'}
    />
    <Input type='password' value={details.confirmpassword} onChange={(e)=>{
      setDetails({...details,confirmpassword:e.target.value});
    }} placeholder='ConfirmPassword' required={true}
    
    m={'10px'}
    />
    <Button type='submit'>Register</Button>
  </form>
  </Box>
  </VStack>
  <Link to={'/login'}>
    <Text color={'white'} as={'b'}><u>Login</u></Text>
    </Link>
</Box>
}

export default Register