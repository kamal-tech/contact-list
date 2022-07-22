import classes from "./Navigation.module.css"
import {NavLink} from "react-router-dom"

import { useContext } from "react"
import AuthContext from "../store/auth-context"

const Navigation = () => {
  const ctx = useContext(AuthContext)
  const logoutHandler = () => {
    ctx.onLogout()
  }
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Contacts</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/login">
              <div onClick={logoutHandler}>Logout</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation