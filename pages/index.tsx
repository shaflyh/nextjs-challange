import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  function loadWeatherApp() {
    router.push('weather');
  }

  return (
    <div className={styles.container}>
      <h1>Hello World!</h1>
      <ul>
        <li>
          <Link href="weather">Weather</Link>
        </li>
      </ul>
      <button onClick={loadWeatherApp}>Weather</button>
    </div>
  );
}
