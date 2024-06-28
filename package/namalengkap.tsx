import React from 'react'
import "./style.css"

export default function Namalengkap({name, setName}:{name:any, setName:any}) {
    // const [nama, setNama] = useState('');

    const handleNamaChange = (event:any) => {
      setName(event.target.value.replace(/\d+/g, ''));
    };
  
    return (
      <div>
        <input className='DP' type="text" value={name} onChange={handleNamaChange} placeholder="Nama Lengkap" />
      </div>
    );
}
