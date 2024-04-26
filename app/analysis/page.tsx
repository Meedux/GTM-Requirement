"use client";
import { useRef, useEffect } from 'react';
import React from 'react'
import { Chart, LineController, LinearScale, PointElement, LineElement, CategoryScale } from 'chart.js';
import AccountCardOne from '@/components/Analysis/AccountCardOne';
import AccountCardTwo from '@/components/Analysis/AccountCardTwo';
import AccountCardThree from '@/components/Analysis/AccountCardThree';

Chart.register(LineController, LinearScale, PointElement, LineElement, CategoryScale);

const page = () => {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = document.getElementById('chart') as HTMLCanvasElement;
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [12, 19, 3, 5, 2, 3, 9],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }
          ]
        }
      });
    }

    return () => {
      if (chartRef.current) {
        (chartRef.current as Chart).destroy();
        chartRef.current = null;
      }
    };
  }, []);
  
  return (
    <div className="w-full h-screen overflow-scroll px-[5%]">
      <div className="h-full py-[5%] grid grid-row-2 gap-4">
          <div className="h-full w-full">
            {/* Display Line chart here */}
            <canvas id='chart'></canvas>
          </div>
          <div className="h-full grid grid-cols-3 gap-4 mb-7">
            <AccountCardOne />
            <AccountCardTwo />
            <AccountCardThree />
          </div>
        </div>
    </div>
  )
}

export default page