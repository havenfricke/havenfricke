import { observer } from "mobx-react-lite"
import React from "react"
import { Link } from "react-router-dom"
import { AppState } from "../AppState.js"
import { AuthService } from "../services/AuthService.js"

function Login() {

  function login() {
    AuthService.loginWithRedirect()
  }

  function logout() {
    localStorage.removeItem('user-token')
    AuthService.logout({})
  }

  const notAuthenticated = (
    <button title="login demonstration" className=" selectable" onClick={login}> <i className="mdi mdi-login"> </i></button>
  )

  const authenticated = (
    <div className="">
      <div className="" aria-labelledby="authDropdown">
          <div title="click to logout" className="text-light selectable" onClick={logout}>
         <img src={AppState.account?.picture || AppState.user?.picture} alt="account photo" height="40" className="rounded selectable no-select" data-bs-toggle="dropdown"
        aria-expanded="false" />
          </div>
      </div>
    </div>
  )

  return (
    <div>
      <span className="navbar-text">
        {!AppState.account?.id ? notAuthenticated : authenticated}
      </span>
    </div>
  )
}

export default observer(Login)