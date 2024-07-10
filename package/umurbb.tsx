import React from 'react'

export default function Umurbb({ umurbb, setUmurbb, status }: { umurbb: any, setUmurbb: any, status: any }) {
  // const [umurbb, setUmurbb] = useState('');

  const handlebumil = (event: any) => {
    const value = event.target.value.replace(/[^0-9]/g, '');
    const result = parseInt(value);

    if (isNaN(result) || result < 0 || result > 40) {
      return;
    }

    setUmurbb(result);
  };
  // const handlebusui = (event: any) => {
  //   const value = event.target.value.replace(/[^0-9]/g, '');
  //   const result = parseInt(value);

  //   if (isNaN(result) || result < 0 || result > 24) {
  //     return;
  //   }

  //   setUmurbb(result);
  // };

  return (
    <div>
      {
        status === "Bumil" ?
          <input className='DP BB' type="number" value={umurbb} onChange={handlebumil} placeholder="Umur" />
          : ''
      }
      {
        status === "Busui" ?
          <p>{umurbb} Minggu</p>
          : ''
      }
      {status === "Bumil" && umurbb === 0 ? <p className='tw'>*wajib diisi</p> : ''}
    </div>
  );
}
