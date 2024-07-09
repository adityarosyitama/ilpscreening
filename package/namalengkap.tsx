import React from 'react'
import "./style.css"

export default function Namalengkap({ name, setName, status2 }: { name: any, setName: any, status2: any }) {
  // const [nama, setNama] = useState('');

  const handleNamaChange = (event: any) => {
    setName(event.target.value.replace(/\d+/g, ''));
  };

  return (
    <div>
      <div className='flex flex-row justify-between'>
        <p>Nama Lengkap {status2 === undefined ? '' : status2}</p>
        {name === '' ? <p className='tw'>*wajib diisi</p> : ''}
      </div>
      <input className='DP' type="text" value={name} onChange={handleNamaChange} placeholder="Nama Lengkap" />
    </div>
  );
}
