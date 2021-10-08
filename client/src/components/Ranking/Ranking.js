import React from 'react'
import Graph from './Graph'
import Date from './Date'

export default function Ranking() {
  return (
    <div>
      <Date />
      <div id="parentDiv" style={{ position: 'relative', width: '15000px', overflowX: 'scroll' }}><Graph id="myChart" width="15000" height="400" /></div>
    </div>
  )
}
