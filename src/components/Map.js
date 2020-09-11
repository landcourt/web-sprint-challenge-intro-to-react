import React from 'react'
import Character from './Character'
import styled from 'styled-components'


 function Map(props) {

     const Container = styled.div `
    
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
 `
     console.log(props)
     return (
         <Container>
             {
                 props.data.map((e, index) => {
                     return <Character name={e.name} status={e.status} species={e.species} type={e.type} gender={e.gender} key={index}/> 
                 })
             }
            </Container>    
     )
 }

 export default Map