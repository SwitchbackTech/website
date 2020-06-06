import styled, {css} from 'styled-components'
import {Loading} from '../../../assets/css/animations'
import {device} from '../../../theme'

export const RecenPostWrap = styled.section `
    margin-bottom: 50px;
    ${device.medium}{
        margin-bottom: 0;
    }
`;

export const LoadMoreBtnWrap = styled.div `
    ${props => props.isLoading && css `
        button{
            cursor: not-allowed;
            opacity: .5;
        }
        svg {
            animation: ${Loading} .5s linear 0s infinite;
        }
    `}
`;