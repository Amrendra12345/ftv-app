import CountryExLists from '../countyExList'
export const coundryExt = async()=>{
    const res = await fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=0303334790d54efdb7a07b113b206ced')
    if (!res.ok){
        throw new Error('Failed to fetch data')
      }
    const data = await res.json()
    if(data !== null){ 
        if (data.country_code !== null && data.country_code !== 'US'){
          const country_code =  data.country_code.toLowerCase();
          for(let CountryExList of CountryExLists){
             if(CountryExList.split('-')[1] ===  country_code){                  
                  return CountryExList
             }
          }
        } 
 }
}