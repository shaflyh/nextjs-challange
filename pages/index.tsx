import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  function loadWeatherApp() {
    router.push('product');
  }

  return (
    <div className={styles.container}>
      <h1>Hello World!</h1>
      <ul>
        <li>
          <Link href="product">Product</Link>
        </li>
      </ul>
      <button onClick={loadWeatherApp}>Product</button>
    </div>
  );
}
