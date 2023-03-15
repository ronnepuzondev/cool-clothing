import { Link, Outlet } from 'react-router-dom'
import { Fragment } from 'react'
import { ReactComponent as CoolLogo } from '../../assets/coolclothing_adobe_express.svg'
import './navigation.styles.scss'

const Navigation = () => {
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
                    <Link className='nav-link' to='/sign-in'>
                    SIGN IN
                    </Link>
                </div>
            </div>
      <div>
      
      <Outlet />
      </div>
      </Fragment>
    )
  }

export default Navigation