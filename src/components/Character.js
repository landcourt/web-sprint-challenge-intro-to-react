// Write your Character component here
import React from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
spin {
     from {
         transform:rotate(0deg);
     }
     to {
         transform:rotate(360deg);
     }
`

 const Div = styled.div`
  border: solid black 2px;
  width: 50%;

  margin-bottom: 1%;
  background-color: white;
  
  &:hover {
     animation-name: spin;
     animation-duration: 10000ms; /* How long lasts 1 turn */
     animation-iteration-count: infinite;
     animation-timing-function: linear;
     border: dashed red 4px;
     height: 400px;

     h1 {
         font-size: 100px;
     }
     p {
         font-size: 80px
     }
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
             <p>{props.origin}</p> 
         </Div>



     )
 }

 export default Character