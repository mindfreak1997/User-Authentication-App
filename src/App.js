import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import { endUserLogout } from './Actions/userAction'
import Acount from './components/account'
import NotesContainer from './components/myNotes/NotesContainer'


const App = (props) => {
  const dispatch = useDispatch()
  const loginStatus = useSelector((state) => {
    return state.users.isLogin
  })

  const handleLogout = () => {
    const redirectHome = () => {
      props.history.push('/')
    }
    dispatch(endUserLogout(redirectHome))

  }
  return (
    <div>
      <h1>User Authentcation</h1>
      <Link to='/'>Home</Link> |
      {
        loginStatus ? (
          <React.Fragment>
            <Link to='/account'>account</Link> |
            <Link to='/notes'>My Notes</Link> |
            <Link onClick={handleLogout}>Logout</Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to='/register'>Register</Link> |
            <Link to='/login'>Login</Link>
          </React.Fragment>
        )
      }


      <Route path='/' component={Home} exact={true} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/account' component={Acount} />
      <Route path='/notes' component={NotesContainer} />
    </div>
  )
}

export default withRouter(App)
