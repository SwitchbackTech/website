import styled, {css} from 'styled-components'
import {compose, space, border, flexbox, layout } from 'styled-system'
import { themeGet } from '@styled-system/theme-get';
import {fadeInDown} from '../../../assets/css/animations'

export const HeaderOuter = styled.div `
    position: relative;
`;

export const HeaderInner = styled.div `
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    background-color: #ffffff;
    z-index: 4;
    transition: ${themeGet("transition")};
    ${props => props.transparent && css `
        background-color: transparent;
        &:before{
            position: absolute;
            content: '';
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-image: -moz-linear-gradient(-90deg,rgba(0,0,0,.2) 0%,rgba(255,255,255,0) 100%);
            background-image: -webkit-linear-gradient(-90deg,rgba(0,0,0,.2) 0%,rgba(255,255,255,0) 100%);
            background-image: -ms-linear-gradient(-90deg,rgba(0,0,0,.2) 0%,rgba(255,255,255,0) 100%);
        }
    `}
    ${props => props.isSticky && css `
        background-color: #ffffff;
        position: fixed;
        z-index: 999;
        box-shadow: 0 8px 20px 0 rgba(0,0,0,0.1);
        animation: .95s ease-in-out 0s normal none 1 running ${fadeInDown};
        transition: ${themeGet("transition")};
        &:before{
            display: none;
        }
    `}
`;

export const HeaderMain = styled.div `
    display: flex;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
`;

export const HeaderCol = styled.div `
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    ${props => props.left && css `
        justify-content: flex-start;
    `}
    ${props => props.center && css `
        justify-content: center;
    `}
    ${props => props.right && css `
        justify-content: flex-end;
    `}
`;

export const HeaderNavigation = styled.div ``;

export const HeaderElement = styled('div')(
    compose(
        space,
        border,
        flexbox,
        layout
    )
);

export const FixedHeaderHeight = styled.div `
    height: ${props => props.height}px;
`;

export const HeaderWrap = styled.header `
    position: relative;
    width: 100%;
    z-index: 99;
    border-bottom: 1px solid ${themeGet("colors.borderColor")};
    .hamburger{
        position: relative;
        &:before {
            position: absolute;
            content: "";
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 1px;
            height: 13px;
        }
    }
    ${props => props.transparent && css `
        background-color: transparent;
        border: none;
        position: absolute;
        left: 0;
        top: 0;
        .hamburger{
            &:before {
                background-color: rgba( 255,255,255,0.6);
            }
        }
    `}
    ${props => !props.transparent && css `
        .hamburger{
            &:before {
                background-color: rgba( 0,0,0,0.102);
            }
        }
    `}
`;

export const OffcanvasSocial = styled.div `
    margin-top: 80px;
`;
