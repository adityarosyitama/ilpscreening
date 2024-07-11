import React from 'react'
import NewWindow from 'react-new-window'
import { convertskring } from './statusilpconvert'

//onUnload={reset}
export const Newwindows = ({
  nama,
  umur,
  jeniskelamin,
  status,
  umurbb,
  ket,
  ket_,
  daftar,
  nama2,
  umur2,
  jeniskelamin2,
  status2,
  umurbb2,
  ket2,
  ket_2,
  daftar2,
  handleSubmit,
  setOpsishow,
  reset }: {
    nama: any,
    jeniskelamin: any,
    umur: any,
    status: any,
    umurbb: any,
    ket: any,
    ket_: any,
    daftar: any,
    nama2: any,
    jeniskelamin2: any,
    umur2: any,
    status2: any,
    umurbb2: any,
    ket2: any,
    ket_2: any,
    daftar2: any,
    handleSubmit: any,
    setOpsishow: any
    reset: any
  }) => (
  <NewWindow onUnload={handleSubmit}>
    <div className='nw flex flex-col gap-5'>
      <div>
        <h1>Nama : {nama} {`(${jeniskelamin})`}</h1>
        <p>Umur : {umur.Year} Tahun {umur.Month} Bulan {umur.Day} Hari</p>
        {/* <p>{status}</p>
        {status === 'Bayi' || status === '' ? '' :
          <p>{umurbb}</p>
        } */}
        <p>Jenis : {convertskring(ket)}</p>
        {status === 'Bumil' ? <p>{ket_}</p> : ''}
        <p className='nwdaf'>Pemeriksaan</p>
        {daftar === undefined ? '' :
          daftar.map((item: any) => (
            <li key={item} className='flex flex-row'>
              <p>{item.Judul} - {item.Desc} {item.Desc2 === '' ? '' : `, ${item.Desc2}`}
              </p>{item.Opsi2 === '' ? '' : <p className='dftext'>*Dilakukan di sekolah</p>}
            </li>
          ))}
      </div>
      {status2 === '' || daftar2 === undefined ? '' :
        <div>
          <h1>Nama : {nama2} {`(${jeniskelamin2})`}</h1>
          <p>Umur : {umur2.Year} Tahun {umur2.Month} Bulan {umur2.Day} Hari</p>
          <div className='flex flex-row gap-3'>
            {/* <p>{status2}</p>
            {status2 === 'Bayi' || status2 === '' ? '' :
              <p>{umurbb2} {status2 === 'Busui' ? 'Minggu' : ''}</p>
            } */}
            <p>Jenis : {convertskring(ket2)}</p>
          </div>
          <p className='nwdaf'>Pemeriksaan</p>
          {daftar2 === undefined ? '' :
            daftar2.map((item: any) => (
              <li key={item}>{item.Judul} - {item.Desc} {item.Desc2 === '' ? '' : `, ${item.Desc2}`}</li>
            ))
          }
        </div>
      }
    </div>
  </NewWindow>
)
