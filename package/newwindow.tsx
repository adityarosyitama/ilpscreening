import React from 'react'
import NewWindow from 'react-new-window'

//onUnload={reset}
export const Newwindows = ({
  nama,
  umur,
  jeniskelamin,
  status,
  umurbb,
  daftar,
  nama2,
  umur2,
  jeniskelamin2,
  status2,
  umurbb2,
  daftar2,
  handleSubmit,
  setOpsishow,
  reset }: {
    nama: any,
    jeniskelamin: any,
    umur: any,
    status: any,
    umurbb: any,
    daftar: any,
    nama2: any,
    jeniskelamin2: any,
    umur2: any,
    status2: any,
    umurbb2: any,
    daftar2: any,
    handleSubmit:any,
    setOpsishow:any
    reset: any
  }) => (
  <NewWindow onUnload={handleSubmit}>
    <div className='nw flex flex-col gap-5'>
      <div>
        <h1>{nama} {`(${jeniskelamin})`}</h1>
        <p>{umur.Year} Tahun {umur.Month} Bulan {umur.Day} Hari</p>
        <p>{status}</p>
        {status === 'Bayi' || status === '' ? '' :
          <p>{umurbb}</p>
        }
        <p className='nwdaf'>Pemeriksaan</p>
        {daftar.map((item: any) => (
          <li key={item}>{item.Judul} - {item.Desc} {item.Desc2 === '' ? '' : `, ${item.Desc2}`}</li>
        ))}
      </div>
      {status2 === '' || daftar2 === undefined ? '' :
        <div>
          <h1>{nama2} {`(${jeniskelamin2})`}</h1>
          <p>{umur2.Year} Tahun {umur2.Month} Bulan {umur2.Day} Hari</p>
          <div className='flex flex-row gap-3'>
            <p>{status2}</p>
            {status2 === 'Bayi' || status2 === '' ? '' :
              <p>{umurbb2} {status2==='Busui'?'Minggu':''}</p>
            }
          </div>
          <p className='nwdaf'>Pemeriksaan</p>
          {
            daftar2.map((item: any) => (
              <li key={item}>{item.Judul} - {item.Desc} {item.Desc2 === '' ? '' : `, ${item.Desc2}`}</li>
            ))
          }
        </div>
      }
    </div>
  </NewWindow>
)
