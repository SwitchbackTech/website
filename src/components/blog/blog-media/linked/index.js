import React from 'react'
import { FiExternalLink } from "react-icons/fi";
import {LinkedWrap} from './linked.stc'

const Linked = ({link, ...restProps}) => {
    return (
        <LinkedWrap {...restProps}>
            <FiExternalLink className="icon"/>
            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
        </LinkedWrap>
    )
}

export default Linked
