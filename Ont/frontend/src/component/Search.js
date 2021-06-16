
import React, { useState } from "react";
import './search.css';
function Search({set}) {
    const [person,setChara] = useState("");
    const [relation,setRel] = useState("請選擇");
    function charachange (e){
      setChara(e.target.value);

    }
    function relchange (e){
      setRel(e.target.value);
    
      
    }
    function setdata(){
      
      set(function(){
        return [{
          person,
          relation,
        }];
      });
    }

    return (
      
      <div>
          <input type = "text" placeholder = "輸入角色名稱"  value = {person} className = "person" onChange = {charachange}></input>
          <select value ={relation} onChange = {relchange} className = "select"  >
            <option>請選擇查詢關係</option>
            <option>family</option>
            <option>friend</option>
            <option>enemy</option>
            <option>teacher</option>
            <option>lover</option>
          </select>
          <button onClick = {setdata} className = "search" >搜尋</button>
      </div>
    );
  }
  
  export default Search;