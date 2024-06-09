"use client";
import React from 'react'
import { Chart, LineController, LinearScale, PointElement, LineElement, CategoryScale } from 'chart.js';
import { useRef, useEffect } from 'react';

Chart.register(LineController, LinearScale, PointElement, LineElement, CategoryScale);

const LineChart = () => {
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
        },
        options: {
          responsive: true,
          resizeDelay: 200,
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
    <div className="relative md:block flex justify-center items-center h-[100%] w-[100%]">
        <canvas id='chart'></canvas>
    </div>
  )
}

export default LineChart