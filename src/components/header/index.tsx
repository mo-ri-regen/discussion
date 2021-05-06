import classes from './Header.module.css'
import Link from 'next/link'

export function Header(){
  return (
    <header className={classes.header}>   
      <h1 className={classes.title}>Pannel Discussion</h1>

      <nav className={classes.navi}>
        <ul className={classes.inner}>
          <li>
            <Link href={"/"}>Guest</Link>
          </li>
          <li>
            <Link href={"/admin"}>Admin</Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}