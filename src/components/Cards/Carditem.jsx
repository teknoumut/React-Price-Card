import React from 'react'

const Carditem = ({ baslik, fiyat, aktifYazilar, pasifYazilar, renk ,butonrenk}) => {
  return (
    <div className={`w-full p-4 border border-gray-200 border-t-3  rounded-lg mb-5`}
      style={{ borderTopColor: renk }} >
      <h5 className="mb-4 text-2xl">{baslik}</h5>
      <div className="flex items-baseline text-gray-900">
        <span className="text-3xl font-semibold">$</span>
        <span className='text-5xl font-semibold'>{fiyat}</span>
        <span className='ms-1 text-xl font-normal text-gray-500 '>Month</span>
      </div>
      <ul className="space-y-5 my-7">


        {aktifYazilar && aktifYazilar.map((text, index) => (
          <li className='flex items-center' key={index}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="size-5 text-blue-700 me-2" fill="currentColor"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
            <span className='text-base font-normal leading-tight'> {text}</span>
          </li>
        ))}

        {pasifYazilar && pasifYazilar.map((text, index) => (
          <li className='flex items-center line-through decoration-gray-500' key={index}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="size-5 text-blue-700 me-2" ><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
            <span className='text-base font-normal leading-tight'> {text}</span>
          </li>
        ))}



      </ul>
      <button className=' px-6 py-2 rounded-3xl font-medium text w-full text-white' style={{backgroundColor:butonrenk}}>Planı Seç</button>
    </div>
  )
}

export default Carditem