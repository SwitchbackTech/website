import React from 'react'
import NavBar, {NavItem, NavLink} from '../../shared/navbar'
import {MainMenuWrap} from './mainmenu.stc'
import {inferSlug} from '../../../utils/utilFunctions'

 
export const MainMenu = ({menuData, ...props}) => {
    const menuarr = menuData; 
    return (
        <MainMenuWrap {...props}>  
            <NavBar>
                {menuarr.map((menu, i) => { 
                    return (
                        <NavItem key={`mainmenu-${i}`}>
                            <NavLink path={inferSlug(menu.node.path)}>{menu.node.title}</NavLink>
                        </NavItem>
                    )
                })}     
            </NavBar>
        </MainMenuWrap>
    )
} 