import React, { useContext, useState } from 'react'
import styles from "../Styles/login.module.css"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    // ModalCloseButton,
    Button,
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Footer from '../components/Footer'

const initData={
    email:"",
    password:"",
}

const Login = () => {
    const[creds,setCreds]=useState(initData);
    const{isAuth,setIsAuth}=useContext(AuthContext);
    const[isOpen,setIsOpen]=useState(true);
    const navigate=useNavigate()

    const onOpen=()=>{
        setIsOpen(true)
    }
    const onClose=()=>{
        setIsOpen(false)
        navigate("/")
    }

    const handleChange=(e)=>{
        const {value,name} = e.target;
        // const newvalue=value;
        setCreds({
            ...creds,
            [name]:value
        });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "Content-type":"Application/json"
            },
            body:JSON.stringify(
                creds
            )
        })
        .then((res)=>res.json())
        .then((d)=>{
            console.log(d)
            alert("Success")
            setIsAuth(true);
            navigate("/")
        })
        .catch((err)=>{})
    }

  return (
    <div>
      <h1>Login Form</h1>     
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
         <br />
          <ModalBody className={styles.modalBody}>
           
           <form onSubmit={handleSubmit}>
            <div>
              <input
            onChange={handleChange}
            name="email"
            value={initData.value}
            type="text" 
            placeholder='Enter Email'
            required 
            />
            </div>

            <div>
              <input
            onChange={handleChange}
            name='password'
            value={initData.value}
            type="text" 
            placeholder='Enter Password '
            required 
            />
            </div>
        <button className={styles.submitBtn} type="submit" >Submit</button>        
           </form>
          </ModalBody>

          <ModalFooter style={{width:"400px"}}>
            <Button className={styles.closeBtn} colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
        <br />
        <br />
        <Footer/>
      </Modal>
    </div>
  )
}

export default Login