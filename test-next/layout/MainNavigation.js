import classes from "./MainNavigation.module.css";
import Link from "next/link";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src="../assets/logo.png" height="44px" width="100%" />
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/Foods'>FOODS</Link>
          </li>
          <li>
            <Link href='/People'>PEOPLE</Link>
          </li>
          <li>
            <Link href='Places'>PLACES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
