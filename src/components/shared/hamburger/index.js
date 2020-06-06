import React from 'react'
import PropTypes from 'prop-types'
import {HamburgerWrap} from './hamburger.stc'

const Hamburger = ({onClick, ...props}) => {
    return (
        <HamburgerWrap type="button" onClick={onClick} {...props}>
            <span></span>
        </HamburgerWrap>
    )
}

Hamburger.propTypes = {
    onClick: PropTypes.func
}

export default Hamburger
