import styled, {css} from 'styled-components'
import {themeGet} from '@styled-system/theme-get'
import {NavbarWrap} from '../../shared/navbar/navbar.stc'
import {NavItemWrap} from '../../shared/navbar/navitem/navitem.stc'
import {NavLinkWrap, AnchorTag, SmoothScroll} from '../../shared/navbar/navlink/navlink.stc'

 
export const MainMenuWrap = styled.nav `
    flex-grow: 1;
    display: flex;
    align-items: center;
    ${props => props.alignment === 'right' && css`
        justify-content: flex-end;
    `}
    ${props => props.alignment === 'left' && css`
        justify-content: flex-start;
    `}
    ${props => props.alignment === 'center' && css`
        justify-content: center;
    `}
    ${NavbarWrap}{
        ${NavItemWrap}{
            &:hover{
                & > ${NavLinkWrap},
                & > ${AnchorTag},
                & > ${SmoothScroll}{
                    &:after{
                        width: 72%;
                        left: 0;
                    }
                }
            }
        }
        & > ${NavItemWrap}{
            &:first-child{
                margin-left: 0;
                padding-left: 0;
            }
            &:last-child{
                margin-right: 0;
                padding-right: 0;
            }
            & > ${NavLinkWrap},
            & > ${AnchorTag},
            & > ${SmoothScroll}{
                position: relative;
                ${props => props.whiteColor && css `
                    color: #fff;
                `}
                ${props => !props.whiteColor && css `
                    color: #000;
                `}
                &.active{
                    &:after{
                        width: 72%;
                    }
                }
                &:before{
                    position: absolute;
                    content: '';
                    left: 0;
                    top: 90%;
                    width: 100%;
                    height: 100%;
                }
                &:after{
                    position: absolute;
                    content: "";
                    transition: ${themeGet("transition")};
                    z-index: -1;
                    left: 1px;
                    bottom: 5px;
                    width: 0;
                    height: 8px;
                    background-color: ${themeGet("colors.themeColor")};
                }
            }
        }
    }
`;
