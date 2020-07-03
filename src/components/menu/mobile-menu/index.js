import React from 'react'
import NavBar, {NavItem, NavLink} from '../../shared/navbar'
import {inferSlug} from '../../../utils/utilFunctions'
import {MobileMenuWrap} from './mobilemenu.stc'

export const MobileMenu = ({menuData}) => {
    return (
        <MobileMenuWrap>
            <NavBar>
                {menuData.map((menu, i) => {
                    return(
                        <NavItem 
                            key={`menu-item-${i}`} 
                            id={`menu-item-${i}`}>
                            <NavLink path={inferSlug(menu.node.path)}>{menu.node.title}</NavLink>
                        </NavItem>
                    )
                })}
            </NavBar>
        </MobileMenuWrap>
    )
}
