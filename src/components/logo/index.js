import React from 'react'
import PropTypes from 'prop-types'
import Anchor from '../shared/anchor'
import DarkLogo from '../../assets/img/logo.png'
import WhiteLogo from '../../assets/img/white-logo.png'
import {LogoWrap} from './logo.stc'

const Logo = props => {
    return (
        <LogoWrap {...props}>
            <Anchor path="/">
                <img src={DarkLogo} alt="Logo" className="dark-logo"/>
                <img src={WhiteLogo} alt="Logo" className="white-logo"/>
            </Anchor>
        </LogoWrap>
    )
}

Logo.propTypes = {
    transparentBG: PropTypes.bool
}

export default Logo
