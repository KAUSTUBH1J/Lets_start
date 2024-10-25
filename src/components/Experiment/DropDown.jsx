import React, { useEffect } from 'react'

export default function DropDown() {

  const Country = [
    {
      name: 'India', 
      value: 'IN', 
      cities: [
        'Delhi', 
        'Mumbai'
      ]
    },
    {
      name: 'America', 
      value: 'USA', 
      cities: [
        'New York', 
        'Los Angeles'
      ]
    },
    {
      name: 'Japan', 
      value: 'JP', 
      cities: [
        'Tokyo', 
        'Osaka'
      ]
    }
  ];
  
  const [cities, setCities] = React.useState([]);
  const [selectContry, setSeletectContry ] = React.useState('IN');

  

  useEffect(()=>{
    console.log('changes');
    const selected = Country.find(country => country.value === selectContry);

    console.log(selected);
    setCities(selected.cities)
  },[selectContry])


  return (
    <>
      <div className="text-center">
        <h2>DropDown</h2>
        Contry: <select value={selectContry} onChange={(e)=>{setSeletectContry(e.target.value);console.log() }}>
          {Country.map((Element)=>{
            return <option value={Element.value}>{Element.name}</option>
          })}
        </select>


        Cities: <select>
          { !cities.length == 0 ? cities.map((Element) => {
            return <option value={Element}>{Element}</option>
          }) :'' }
        </select>
        {selectContry}
      </div>
    </>
  )
}
