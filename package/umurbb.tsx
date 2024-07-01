import React from 'react'

export default function Umurbb({ umurbb, setUmurbb, opsi }: { umurbb: any, setUmurbb: any, opsi: any }) {
  // const [umurbb, setUmurbb] = useState('');

  const handlebumil = (event: any) => {
    const value = event.target.value.replace(/[^0-9]/g, '');
    const result = parseInt(value);

    if (isNaN(result) || result < 0 || result > 9) {
      return;
    }

    setUmurbb(result);
  };
  const handlebusui = (event: any) => {
    const value = event.target.value.replace(/[^0-9]/g, '');
    const result = parseInt(value);

    if (isNaN(result) || result < 0 || result > 24) {
      return;
    }

    setUmurbb(result);
  };

  return (
    <div>
      {opsi === "Busui" ?
        <input className='DP BB' type="number" value={umurbb} onChange={handlebusui} placeholder="Umur" /> :
        opsi === "Bumil" ?
          <input className='DP BB' type="number" value={umurbb} onChange={handlebumil} placeholder="Umur" />
          : ''
      }
    </div>
  );
}
