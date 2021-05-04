import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Head(){
  return (
    <header>   
      <h1 className={styles.title}>Pannel Discussion</h1>
      <div>
        <Link href={"/admin"}>Admin</Link>
      </div>
      <div>
        <Link href={"/"}>Gest</Link>
      </div>
    </header>
  );
}