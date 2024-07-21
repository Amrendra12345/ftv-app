import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import Router from "next/router";
import { Card, Form } from 'react-bootstrap';

const Widget_v = (props) => {
  // let origin_country = [];

  // const [originOption, setOriginOption] = useState([]);
  // const [origin, setOrigin] = useState();
  // const [originv, setOriginv] = useState();
  // const [destinationOption, setDestinationOption] = useState([]);
  // const [destination, setDestination] = useState("");
  const [textShow, setTextShow ] = useState(false);
  const [sources, setSources] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [sourceName, setSourceName] = useState('Select...');
  const [sourceNameExt, setSourceNameExt] = useState('');
  const [toggleSource, settoggleSource] = useState(false);
  const [visitCountries, setVisitCountries] = useState([]);
  const [openToggle, setOpenToggle ] = useState(false);
  const [aimPlaceholder, setAimPlaceholder] = useState('Select...')
  const [aimData, setAimData] = useState('');

  const clickOriginCountry = async()=>{
    const res = await axios.get('https://cms.fasttrackvisa.com/api' + (props.ce_name === '' ? '' : '/' + props.ce_name) + '/origin-country');
    if(res.status === 200){
       console.log(res.data.origin_country)
       setOriginCounties(res.data.origin_country)
    }
}

const setOriginOnClick = async(e)=>{ 
  setMessage('Please Wait...')
  const originCountry = e.target.textContent;
  setorigins(e.target.textContent)
  setOriginExt(e.target.getAttribute('country-ext'))
  const res = await axios.get('https://cms.fasttrackvisa.com/api' + (props.ce_name === '' ? '' : '/' + props.ce_name) + '/origin-country/' + originCountry)

    const destinationCountry = res.data.destination_country;
     if(destinationCountry.length > 1){ 
      console.log(destinationCountry.length)     
       setdestinationCountries(destinationCountry);       
       setTimeout(() => {        
        setMessage('Select your destination country')
      }, 300);
     }else{      
      setTimeout(() => { 
       setMessage('Not available destination country')
      }, 300);
     }

}

const sourceInputClick = async()=>{
   const res = await axios.get('https://cms.fasttrackvisa.com/api' + (props.ce_name === '' ? '' : '/' + props.ce_name) + '/origin-country');
   if(res.status === 200){
      //console.log(res.data.origin_country)
      setSources(res.data.origin_country);
      settoggleSource(!toggleSource);
      //console.log(res.data.origin_country)
   }
}
const handleSelect = ()=>{
}
const handleSelectAim = ()=>{}
const handleSourceName = async(e)=>{
    setOpenToggle(false);
    setAimPlaceholder('Please Wait..');
    const origin =  e.target.textContent
    setSourceName(origin);
    const extentions = e.target.getAttribute('data-ext')
    setSourceNameExt(extentions)
    settoggleSource(!toggleSource);    
   
   const res = await axios.get('https://cms.fasttrackvisa.com/api' + (props.ce_name === '' ? '' : '/' + props.ce_name) + '/origin-country/' + origin)
   if(res.status === 200){
    setTimeout(() => {  
    setAimPlaceholder('Select your destination...');
    },250)
     const destinationCountry = res.data.destination_country;
   //  console.log(destinationCountry)
      if(destinationCountry.length > 1){
         setVisitCountries(destinationCountry);
         setOpenToggle(true);
      }else{
        setTimeout(() => {  
        setAimPlaceholder('Not available destination');
        },252)
        setOpenToggle(false);
      }
   }
  
   const found = CountryExList.find((element) => element === extentions);
    //console.log(found) 
    if(extentions === found){
       Router.push('/' + extentions)
    }else{
      Router.push('/' + 'en-in')
    } 
 
}
const visitInputClick = ()=>{
  setOpenToggle(true);
}
const handleVisitClick = (e)=>{
   const visitDes = (e.target.textContent);
   setAimData(visitDes);
   setOpenToggle(false);
}

const GetEvisa = ()=>{
  let Selecteddestination = aimData;
  if (Selecteddestination !== null && Selecteddestination !== undefined && Selecteddestination !== '') {
    var newData = '/' + (props.ce_name == '' ? '' : props.ce_name + '/') + Selecteddestination.toLowerCase() + '-visa';
  }
  else if (sourceNameExt !== null && sourceNameExt !== undefined && sourceNameExt !== '' && Selecteddestination !== null && Selecteddestination !== undefined && Selecteddestination !== '') {
    var newData = '/' + sourceNameExt + '/' + Selecteddestination.toLowerCase() + '-visa';
  }
  else if (sourceNameExt !== null && sourceNameExt !== undefined && sourceNameExt !== '') {
    var newData = '/' + sourceNameExt ;
  }
  else { var newData = '/' + (props.ce_name == '' ? '' : props.ce_name + '/') }

  Router.push(newData);
}

  return (
    <div className="widget_750 widgetform">
      <h4>
        Fly Anywhere.
        <br />
        Get an eVisa
      </h4>
      <form>
        <div className="ftv-field">
          <div className="citizenField">
            {textShow && <p> Lang is not available default set lang "en-in"</p>}
            <Form.Label htmlFor="input1">I am a citizen of</Form.Label>
            <Form.Control
              type="text"
              value={sourceName || ""}
              placeholder="Select.."
              onChange={handleSelect}
              onClick={sourceInputClick}
            />

            {toggleSource && Array.isArray(sources) ? (
              <ul>
                {sources.map((source) => {
                  return (
                    <li
                      key={source.extention}
                      data-ext={source.extention}
                      onClick={(e) => handleSourceName(e)}
                    >
                      {source.name}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="ftv-field">
          <div className="citizenField">
            <Form.Label htmlFor="input2">Planning to visit</Form.Label>
            <Form.Control
              placeholder={aimPlaceholder}
              type="text"
              value={aimData || ""}
              onChange={handleSelectAim}
              onClick={visitInputClick}
            />
            {openToggle && Array.isArray(visitCountries) ? (
              <ul>
                {visitCountries.map((visit, index) => {
                  return (
                    <li key={index} onClick={(e) => handleVisitClick(e)}>
                      {visit.name}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>

        <button type="button" className="btn btn-lg btn2" onClick={GetEvisa}>
          Get an eVisa
        </button>
      </form>
    </div>
  );
};

export default Widget_v;
