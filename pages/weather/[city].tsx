import { useRouter } from 'next/router';

export default function CityWeather() {
  const router = useRouter();
  const city = router.query.city;
  console.log(city);
  return (
    <div>
      <h1>Weather in {city}</h1>
    </div>
  );
}
