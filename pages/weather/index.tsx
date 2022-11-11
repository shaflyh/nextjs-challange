import Link from 'next/link';
import path from 'path';
// import fs from 'fs/promises';

export default function Weather(props: any) {
  const { data } = props;

  const cityList = [
    { id: 1, name: 'Bandung' },
    { id: 2, name: 'Jakarta' },
    { id: 3, name: 'Surabaya' }
  ];

  return (
    <div>
      <h1>Weather</h1>
      <ul>
        {data.map((weather: any, i: string) => (
          <li key={i}>
            <Link href={`/weather/${weather.id}`}>
              {weather.id} - {weather.city}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {

  return {
    props: {
      data: [
        {
          id: 3388232,
          wikiDataId: 'Q11176490',
          type: 'CITY',
          city: 'Lebak Siliwangi',
          name: 'Lebak Siliwangi',
          country: 'Indonesia',
          countryCode: 'ID',
          region: 'West Java',
          regionCode: 'JB',
          latitude: -6.890555555,
          longitude: 107.609444444,
          population: 0,
          distance: 0.13
        }
      ]
    }
  };
}

// export async function getStaticPaths() {}
