import React from 'react'
import BLS from '../../media/img/BLS.jpg';

export default function Home() {
  return (
    <img src={BLS} alt="BLS" style={{ width:'100%', height: '100%', objectFit: 'cover' }}/>
  )
}
