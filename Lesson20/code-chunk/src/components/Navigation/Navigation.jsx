import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.activeLink}` : styles.link
        }
      >
        Главная
      </NavLink>

      <NavLink
        to="/authors"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.activeLink}` : styles.link
        }
      >
        Авторы
      </NavLink>

      <NavLink
        to="/books"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.activeLink}` : styles.link
        }
      >
        Книги
      </NavLink>

      <NavLink
        to="/table"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.activeLink}` : styles.link
        }
      >
        Таблица
      </NavLink>
    </nav>
  );
}
