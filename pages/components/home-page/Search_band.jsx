import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"

const Searchband = (props) => { 
   const router = useRouter()
   const[origin, setOrigin] = useState({}); 
   const [originValue, setOriginValue] = useState('');
   const [extention, setExtention] = useState('')
   const [show, setShow] =useState(false)
   const [open, setOpen] =useState(false)

   const[destination, setDestination] = useState([])
   const[destinationValue, setDestinationValue] = useState('')
     

      const clickCitize = async()=>{
          const res = await fetch(`https://cms.fasttrackvisa.com/api/${props.ce_name}/origin-country`)
          const data = await res.json();
          setOrigin(data.origin_country)
          setShow(true)
          setOpen(false)
      }
      const clickcountry = async(e)=>{
         setOpen(false)
         const origin = e.target.textContent
         setOriginValue(origin)
         setExtention(e.target.getAttribute('ext'))
         setShow(false)
        
         const res = await fetch(`https://cms.fasttrackvisa.com/api/${props.ce_name}/origin-country/${origin}`)
         const data = await res.json();
         const destCountry = data.destination_country
         if(destCountry.length>1){
            localStorage.setItem("destination_country", JSON.stringify(destCountry));
            const conunty =  JSON.parse(localStorage.getItem("destination_country"));
            setDestination(conunty)
            setDestinationValue('Select...')
            setOpen(true)
          }else{
            setDestinationValue('Not available destination country')
            setDestination([])
            setOpen(false)
          }
      }
     const originValueChange = (e)=>{
        if((e.target.value)== ''){
         setShow(false)
        }
     }
   const clickdestination = (e)=>{
      if(e.target.value == "Not available destination country"){
         setOpen(false)
      }else{
      const conunty =  JSON.parse(localStorage.getItem("destination_country"));      
      setDestination(conunty)
      setOpen(true)   
      } 
   }
   const destinationValueChange = ()=>{ 
      //setDestination
   }
   const clickdestinationLi = (e)=>{
      setDestinationValue(e.target.textContent)
      setOpen(false)
   }
   const GetEvisa = ()=>{
     // console.log(extention)
     // console.log(destinationValue)
      const destinationCountry = destinationValue.toLowerCase()
      if(extention !== null && extention !== undefined && extention !=='' && destinationCountry !== '' && destinationCountry !== undefined && destinationCountry !== null && destinationCountry !== 'Not available destination country' && destinationCountry !== 'Select...'){        
         const newLink = `/${destinationCountry}-visa`
         //console.log(newLink)
         router.push(newLink, newLink, { locale: extention })

      }
   }
  return (
    <section className="searchband">
       <Container>
           <Row>
              <Col md={5} className="position-relative">
                <div className="ftv-field">
                 <label htmlFor="sourcLabel">I am a citizen of</label>
                 <input type="text" className="form-control" value={originValue} placeholder="Select..." id="sourcLabel" onClick={clickCitize} onChange={(e)=>originValueChange(e)}/>
                 </div>
                  <ul className="country_list" >
                      {show && 
                        Array.isArray(origin) && origin.map((country)=>{
                           return(
                           <li key={country.extention} ext={country.extention} onClick={(e)=>clickcountry(e)}>{country.name}</li>
                           )
                        })
                      }
                  </ul>
              </Col>
              <Col md={5} className="position-relative">
                <div className="ftv-field">
                 <label htmlFor="desLabel">I am a citizen of</label>
                 <input type="text" className="form-control" value={destinationValue} placeholder="Select..." id="desLabel" onClick={(e)=>clickdestination(e)} onChange={(e)=>destinationValueChange(e)}/>
                 </div>
                  <ul className="country_list" >
                      {open && 
                        Array.isArray(destination) && destination.map((country, i)=>{
                           return(
                           <li key={i}  onClick={(e)=>clickdestinationLi(e)}>{country.name}</li>
                           )
                        })
                      } 
                  </ul>
              </Col>
            <Col md={2}>
               <button type='button' className="btn btn-lg btn2" onClick={GetEvisa}>Get an eVisa</button>
            </Col>
           </Row>
       </Container>
    </section>
  )
}

export default Searchband;

