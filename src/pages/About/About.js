import './About.css';
import React, { useState } from 'react';
import { supabase } from '../../Config/SupaBaseClient';
import NavBar2 from '../../components/NavBar2/NavBar2';

const About=()=>{

  const[name,setName]=useState('')
  const[methode,steMethode]=useState('')
  
  const[formError,setFormError]=useState('')
  

  const handleSubmit = async (e) =>{
    e.preventDefault()

    if(!name || !methode){
      setFormError('Please fill in all the fields correctly')
      return
    }
    const {data, error}=await supabase
    .from('Tezt')
    .insert([{name,methode}])

    if(error){
      console.log(error)
      setFormError('Please fill in all the fields correctly')
    }
    if(data){
      console.log(data)
      setFormError(null);
      
    }
  }
    return (
      <span>
        <NavBar2/>
      <div>
        <form onSubmit={handleSubmit}>

        <p><input
          type="text"
          placeholder='Name'
          id='name'
          value={name}
          onChange={(e)=> setName(e.target.value)}
        /></p>

       <p><input
          type="text"
          placeholder='methode'
          id='methode'
          value={methode}
          onChange={(e)=> steMethode(e.target.value)}
        /></p>

        <button >Submit</button>

        {formError && <p className="error">{formError}</p>}

        </form>
      </div>
      </span>
    );
}
export default About;