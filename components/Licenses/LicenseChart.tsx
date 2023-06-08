import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartLicenseProps {
  chartId: string;
  data: any;
}

const Year = [2021, 2022, 2023];
const SWForChart = [2, 3, 4, 7];
const EGWForChart = [4, 4, 5, 2];
const PGWForChart = [5, 6, 7, 7];
const DPWForChart = [5, 6, 3, 9];
const DWForChat = [4, 9, 4, 3];
const columnColor = [
  'rgb(106, 179, 230)',
  'rgb(0, 61, 126)',
  'rgb(125, 95, 58)',
  'rgb(0, 178, 151)',
  'rgb(244, 153, 23)',
];

  
const ChartLicense: React.FC<ChartLicenseProps> = ({ chartId, data }) => {
    const options: ApexOptions = {
      series: [
        {
          name: 'Khai thác và sử dụng nước mặt',
          data: SWForChart,
        },
        {
          name: 'Khai thác sử dụng nước dưới đất',
          data: EGWForChart,
        },
        {
          name: 'Thăm dò nước dưới đất',
          data: PGWForChart,
        },
        {
          name: 'Hành nghề khoan',
          data: DPWForChart,
        },
        {
          name: 'Xả thải vào nguồn nước',
          data: DWForChat,
        },
      ],
        legend: {
          show: true,
          position: 'bottom',
        },
        colors: columnColor,
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
            //   if (name[0] == 'BTNMT') {
            //     window.location.href = '/giay-phep?bo-cap';
            //   } else {
            //     window.location.href = '/giay-phep?tinh-cap';
            //   }
            },
            mounted: (chartContext, config) => {
              const seriesTotals = config?.globals?.stackedSeriesTotals;
              const isHorizontal = config?.options?.plotOptions?.bar?.horizontal;
    
              try {
                config?.chart.clearAnnotations();
    
                data.Year.forEach((category:any, index:any) => {
                  config?.chart.addPointAnnotation(
                    {
                      y: isHorizontal ? config?.yAxis[0].categories[index] : seriesTotals[index],
                      x: isHorizontal ? 0 : category,
                      label: {
                        text: `Tổng: ${seriesTotals[index]}`,
                      },
                    },
                    false
                  );
                });
              } catch (error) {}
            },
          },
        },

        xaxis: {
          categories: Year,
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
            formatter: function (val) {
              return 'Đã cấp ' + val + ' giấy phép';
            },
          },
        },
      };      
  
    return (
      <ApexCharts options={options} series={options.series} type="bar" width={options.chart?.width} height={options.chart?.height} />
    );
  };
  
  export default ChartLicense;
  