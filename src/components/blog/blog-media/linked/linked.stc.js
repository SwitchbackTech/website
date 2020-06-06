import styled, {css} from "styled-components";
import {themeGet} from '@styled-system/theme-get'
import {device} from '../../../../theme'

export const LinkedWrap = styled.div `
    position: relative;
    padding: 40px 25px 40px;
    background: ${themeGet("colors.themeColor")};
    text-align: center;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    ${device.large}{
        padding: 50px 31px 50px;
    }
    ${props => props.layout === 2 && css `
        height: 270px;
        ${device.large}{
            height: 335px;
        }
    `}
    ${props => props.layout === 1 && css `
        height: 270px;
        ${device.large}{
            height: 335px;
        }
    `}
    .icon{
        width: 20px;
        height: 20px;
        ${device.medium}{
            width: 30px;
            height: 30px;
        }
    }
    a{
        display: block;
        color: ${themeGet("colors.textColor")};
        font-size: 20px;
        word-break: break-word;
        ${device.large}{
            font-size: 25px;
        }
    }
`;