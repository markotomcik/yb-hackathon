import React from 'react'
import { Bar } from 'react-chartjs-2'



const Graph = () => {
  const arr = Array(32)
  for (var i = 0; i < arr.length; i++) {
    arr[i] = i;
  }
  return (
    <div class="chartWrapper">
      <div class="chartAreaWrapper">
        <Bar
          data={{
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            datasets: [
              {
                label: '# of kms',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                backgroundColor: [
                  'Green'
                ],
                borderColor: [
                  'Green'
                ],
                barThickness: 50,
                minBarLength: 2,
                maxBarLength: 100,
                barPercentage: 0.1
              }
            ]
          }}
          height={200}
          width={15000}
          
        />
      </div>
    </div>
  )
}

export default Graph