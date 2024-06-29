import React from 'react'

export default function Umurbb({umurbb, setUmurbb}:{umurbb:any, setUmurbb:any}) {
     // const [umurbb, setUmurbb] = useState('');

     const handleumurbbChange = (event:any) => {
        setUmurbb(event.target.value.replace(/[^0-9]/g, '').slice(0, 2));
    };
    
    return (
      <div>
        <input className='DP' type="type" value={umurbb} onChange={handleumurbbChange} placeholder="umurbb Lengkap" />
      </div>
    );
}
