import { Link, Outlet } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { ReactComponent as CoolLogo } from '../../assets/coolclothing_adobe_express.svg'
import { UserContext } from '../../contexts/user.contexts'
import { signOutUser } from '../../utils/firebase.utils'
import './navigation.styles.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    // console.log(currentUser)

    return (
        <Fragment>
            <div className="navigation">
                <Link className='logo-container' to='/'>
                <CoolLogo className='logo'/>
                </Link>
                
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                    SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                            ) : ( <Link className='nav-link' to='/auth'>
                            SIGN IN
                            </Link>
                        )
                    }
                   
                </div>
            </div>
      <div>
      
      <Outlet />
      </div>
      </Fragment>
    )
  }

export default Navigation