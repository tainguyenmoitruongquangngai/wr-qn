import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartLicenseProps {
  data: any;
  year: any;
  color: any;
}

interface Annotation {
  x: any;
  y: number;
  label: {
    text: string;
    style: {
      color: string;
    };
  };
}

const ChartLicense: React.FC<ChartLicenseProps> = ({ data, year, color }) => {
  const [annotations, setAnnotations] = useState<Annotation[]>([]);

  const series = data;
  const options: ApexOptions = {
    annotations: {
      points: annotations,
    },
    legend: {
      show: true,
      position: 'bottom',
    },
    colors: color,
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
      },
    },
    chart: {
      type: 'bar',
      height: 333,
      width: '100%',
      stacked: true,
      events: {
        click: function (event: any, chartContext: any, config: any) {
          const name = config?.config?.labels;
        },
        mounted: function (chartContext: any, config: any) {
          addStackedTotalsAnnotations(config);
        },
      },
    },
    xaxis: {
      categories: year,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return 'Đã cấp ' + val + ' giấy phép';
        },
      },
    },
  };

  const addStackedTotalsAnnotations = (config: any) => {
    const seriesData = series.map((seriesItem: any) => seriesItem.data);
    const stackedTotals = Array.from({ length: seriesData[0].length }, () => 0);

    for (let i = 0; i < seriesData.length; i++) {
      for (let j = 0; j < seriesData[i].length; j++) {
        stackedTotals[j] += seriesData[i][j];
      }
    }

    const newAnnotations: Annotation[] = stackedTotals.map((total, index) => ({
      x: year[index],
      y: total,
      label: {
        text: `Tổng: ${total}`,
        style: {
          color: '#777',
        },
      },
    }));

    setAnnotations(newAnnotations);
  };

  return (
    <ApexCharts
      options={options}
      series={series}
      type="bar"
      width={options.chart?.width}
      height={options.chart?.height}
    />
  );
};

export default ChartLicense;
