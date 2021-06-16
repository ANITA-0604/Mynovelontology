import React, { useEffect } from 'react';
import './App.css';
import Search from './component/Search';
import {axios} from 'axios';
import {useState} from 'react';
import {Container,ListGroup} from 'react-bootstrap';
import Item from './component/Item';
async function fetc(data,setper){
  if(data!=[] ){
    
    await fetch('http://127.0.0.1:8000/api/',{
      body:JSON.stringify(data[0]),
      method:'post',
      mode :'cors',
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(function(response){
      console.log(response);
      return response.json();
    }).then(function(data){setper(data);console.log(data);}).catch(error=>console.log(error));
    /*axios.post('http://127.0.0.1:8000/api/',data[0]).then(res => console.log(res))*/
  }
  
}
function App() {
  const [data,useData] = useState([]);
  const [per,setper] = useState([]);
  useEffect(()=>{
    
    fetc(data,setper);
    console.log("per",per);
  },[data]);

  return ( 
    <div>
      <p className = "title">Novel ontology</p>
      <Search  set = {useData}/>
      <div>
        <Container>
          <ListGroup>
          {per.map((item)=>{
              console.log(item.n);
              const { type ,value } = item.n;
              return (
                <div><Item  value = {value}/></div>
              )
            })}
          </ListGroup>
        </Container>
      
      </div>
      
    </div>
  );
}

export default App;
