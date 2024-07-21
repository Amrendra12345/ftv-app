import React, { useEffect, useState } from 'react';
import axios from "axios";
import Select from 'react-select';
import Router from 'next/router';


const Widget_v = (props) => { 
  let origin_country = [];
  const [originOption, setOriginOption] = useState([]);
  const [origin, setOrigin] = useState();
  const [originv, setOriginv] = useState();
  const [destinationOption, setDestinationOption] = useState([]);
  const [destination, setDestination] = useState('');
  useEffect(() => {
    toOrigin();
    // console.log('useEffect');

  }, []);


  function toOrigin() {
    axios.get('https://cms.fasttrackvisa.com/api' + (props.ce_name === '' ? '' : '/' + props.ce_name) + '/origin-country').then(res => {
      if (res.status === 200) {
        origin_country.push(res.data.origin_country);
        var originOptionRes = [];
        for (let i = 0; res.data.origin_country.length > i; i++) {
          originOptionRes.push({ value: res.data.origin_country[i].extention, label: res.data.origin_country[i].name });
          //  console.log(res.data.origin_country.length , originOptionRes.length);
          if (res.data.origin_country.length === originOptionRes.length) {
            setOriginOption(originOptionRes);
            const origin = (localStorage.getItem('origin') !== null ? localStorage.getItem('origin') : null);
            const destination = (localStorage.getItem('destination') !== null ? localStorage.getItem('destination') : null);
            setOrigin(origin);
            setDestination(destination);
            //  console.log(originOption);
          }
        }
        //  console.log('success')
      }
    })
  }

  const toVisit = (origin) => {
    axios.get('https://cms.fasttrackvisa.com/api' + (props.ce_name === '' ? '' : '/' + props.ce_name) + '/origin-country/' + origin).then(res => {
      // console.log(res)
      if (res.status === 200) {
        var destinationOptionRes = [];
        for (let i = 0; res.data.destination_country.length > i; i++) {
          destinationOptionRes.push({ value: res.data.destination_country[i].name, label: res.data.destination_country[i].name });
          //     console.log(res.data.destination_country.length , destinationOptionRes.length);
          if (res.data.destination_country.length === destinationOptionRes.length) {
            setDestinationOption(destinationOptionRes);
          }
        }
      }
    })
  }

  function setOriginOnChange(option) {
    // console.log(option);
    var originLabel = option.label;
    var originValue = option.value;
    //console.log(originValue);
    setOrigin(originLabel);
    setOriginv(originValue);
    localStorage.setItem('origin', originLabel);
    //console.log(origin, originLabel);
    toVisit(originLabel);

  }

  function setDestinationLabel(option) {
    var destinationLabel = option.label;
    setDestination(destinationLabel);
    localStorage.setItem('destination', destinationLabel);
    // console.log(destination, localStorage.getItem('destination'));
  }

  function GetEvisa() {
    console.log(originv)
    var Selecteddestination = destination;
    if (Selecteddestination !== null && Selecteddestination !== undefined && Selecteddestination !== '') {
      var newData = '/' + (props.ce_name == '' ? '' : props.ce_name + '/') + Selecteddestination.toLowerCase() + '-visa';
    }
    else if (originv !== null && originv !== undefined && originv !== '' && Selecteddestination !== null && Selecteddestination !== undefined && Selecteddestination !== '') {
      var newData = '/' + originv + '/' + Selecteddestination.toLowerCase() + '-visa';

    }
    else if (originv !== null && originv !== undefined && originv !== '') {
      var newData = '/' + originv ;

    }
    else { var newData = '/' + (props.ce_name == '' ? '' : props.ce_name + '/') }

    Router.push(newData);
  }
  return (
    <div className="widget_750 widgetform">
      <h4>Fly Anywhere.<br />
        Get an eVisa</h4>
      <form>
        <div className="ftv-field">
          <label >I am a citizen of</label>
          <Select
            selectedValue={origin}
            // value={origin}
            /// defaultValue={originOption.slice(0, 1)}
            className="basic-single"
            classNamePrefix="select"
            onChange={(option) => { setOriginOnChange(option) }}
            isClearable={true}
            isSearchable={true}
            options={originOption}
          />
        </div>
        <div className="ftv-field">
          <label>Planning to visit</label>
          <Select
            selectedValue={destination}
            className="basic-single"
            classNamePrefix="select"
            onChange={(option) => { setDestinationLabel(option) }}
            isClearable={true}
            isSearchable={true}
            options={destinationOption}
          />
        </div>

        <button type='button' className="btn btn-lg btn2" onClick={GetEvisa}>Get an eVisa</button>
      </form>
    </div>
  );
}

export default Widget_v;

