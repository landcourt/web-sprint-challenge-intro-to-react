// Write your Character component here
import React from 'react'
import styled from 'styled-components'


 const Div = styled.div`
  border: solid ${pr => pr.theme.grey} 2px;
  width: 50%;
  color: ${pr => pr.theme.white};
  margin-bottom: 1%;
  background-color: ${pr => pr.theme.primaryColor};
  transition: .5s ease-in-out;
  
  &:hover {
    transition: .5s ease-in-out;
    border: solid ${pr => pr.theme.grey} 2px;
    color: ${pr => pr.theme.primaryColor};
    background-color: ${pr => pr.theme.white};
  }
  `
 

 function Character(props) {
     return (

         <Div>
             <h1>{props.name}</h1>
             <p>{props.status}</p>
             <p>{props.species}</p>
             <p>{props.type}</p>
             <p>{props.gender}</p> 
         </Div>



     )
 }

 export default Character