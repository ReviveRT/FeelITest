import React, { useEffect,useState } from 'react'
import PersonCart from './personCart'
import MainSection from './mainSection.module.css'
 
function mainSection(props) {

    const [search,setSearch] = useState('')
    const [select,setSelect] = useState('')
   
  return (
    <div className={MainSection.container}>
        <div className={MainSection.search_container}>
            <input placeholder='Find Actor/Actress' type="search" onSelect={(e) => {
                setSearch(e.target.value)
            }} />
            <select name="select" id="select" onChange={(e) => {
                setSelect(e.target.value)
            }}>
                <option value="c_act_asc">Character Name Ascending Order</option>
                <option value="c_act_des">Character Name Descending Order</option>
                <option value="a_act_asc">Actor's Name Ascending Order</option>
                <option value="a_act_des">Actor's Name Descending Order</option>
            </select>
        </div>
        <div className={MainSection.main}>
            {  props.src.filter(e => {
                if(search == ""){
                    return e
                }else if(e.name.toLowerCase().includes(search.toLowerCase())){
                    return e
                }else if(e.portrayed.toLowerCase().includes(search.toLowerCase())){
                    return e
                }
               
            }).sort(function(a,b){
                if(select === 'c_act_asc'){
                    return a.portrayed.localeCompare(b.portrayed)
                }else if(select === 'c_act_des'){
                    return b.portrayed.localeCompare(a.portrayed)
                }else if(select === 'a_act_asc'){
                    return a.name.localeCompare(b.name)
                }else if(select === 'a_act_des'){
                    return b.name.localeCompare(a.name)
                }    
               
            }).map(o => (
                <PersonCart key={o.char_id} id={o.char_id} name={o.name}  rolename={o.portrayed} img={o.img} />
            ))
            }   
        </div>    
    </div>
  )
}

export default mainSection