import { Box } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const IndividualCollectivismHist = () => {
  return (
    <Box sx={{ overflow: 'auto' }} m={3}>
      <BarChart
        dataset={data}
        xAxis={[
          {
            scaleType: 'band',
            dataKey: 'country',
          },
        ]}
        series={[
          {
            dataKey: 'value',
            valueFormatter: (val) => `Score: ${val}`,
          },
        ]}
        {...chartSetting}
      />
    </Box>
  );
};
const chartSetting = {
  yAxis: [
    {
      label: 'Individuality Score',
    },
  ],
  width: 7000,
  height: 500,
};

const indColData = `United States	40	91	62	46	29
Australia	36	90	61	51	31
United Kingdom	35	89	66	35	25
Netherlands	38	80	14	53	44
New Zealand	22	79	58	49	30
Italy	50	76	70	75	
Belgium	65	75	54	94	
Denmark	18	74	16	23	
France	68	71	43	86	
Sweden	31	71	5	29	33
Ireland	28	70	68	35	
Norway	31	69	8	50	20
Switzerland	34	68	70	58	
Germany	35	67	66	65	31
South Africa	49	65	63	49	
Finland	33	63	26	59	
Poland	68	60	64	93	
Czech Republic	57	58	57	74	
Austria	11	55	79	70	
Hungary	46	55	88	82	
Israel	13	54	47	81	
Spain	57	51	42	86	
India	77	48	56	40	61
Argentina	49	46	56	86	
Japan	54	46	95	92	80
Iran	58	41	43	59	
Jamaica	45	39	68	13	
Brazil	69	38	49	76	65
Egypt	80	38	52	68	
Iraq	80	38	52	68	
Kuwait	80	38	52	68	
Lebanon	80	38	52	68	
Libya	80	38	52	68	
Saudi Arabia	80	38	52	68	
United Arab Emirates	80	38	52	68	
Turkey	66	37	45	85	
Uruguay	61	36	38	100	
Greece	60	35	57	112	
Philippines	94	32	64	44	19
Mexico	81	30	69	82	
Ethiopia	64	27	41	52	25
Kenya	64	27	41	52	25
Portugal	63	27	31	104	
Tanzania	64	27	41	52	25
Zambia	64	27	41	52	25
Malaysia	104	26	50	36	
Hong Kong	68	25	57	29	96
Chile	63	23	28	86	
China	80	20	66	40	118
Ghana	77	20	46	54	16
Nigeria	77	20	46	54	16
Sierra Leone	77	20	46	54	16
Singapore	74	20	48	8	48
Thailand	64	20	34	64	56
El Salvador	66	19	40	94	
South Korea	60	18	39	85	75
Taiwan	58	17	45	69	87
Peru	64	16	42	87	
Costa Rica	35	15	21	86	
Indonesia	78	14	46	48	
Pakistan	55	14	50	70	
Colombia	67	13	64	80	
Venezuela	81	12	73	76	
Panama	95	11	44	86	
Ecuador	78	8	63	67	
Guatemala	95	6	37	101 `;
const data = indColData.split('\n').map((d) => {
  const splitD = d.split('\t');
  return {
    value: parseInt(splitD[2]),
    country: splitD[0],
  };
});

export default IndividualCollectivismHist;
