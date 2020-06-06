import styled, {css} from 'styled-components'
import Anchor from '../../shared/anchor'
import { themeGet } from '@styled-system/theme-get';
import {color} from 'styled-system'
import {device} from '../../../theme'

export const BlogContent = styled.div `
    ${device.xsmall}{
        flex-basis: calc(100% - 78px);
        max-width: calc(100% - 78px);
        padding-right: 30px;
    }
    ${device.medium}{
        padding-right: 20px;
    }
    ${device.large}{
        padding-right: 30px;
    }
`;

export const BlogDate = styled(Anchor) `
    ${color}
    text-transform: uppercase;
    margin-bottom: 4px;
    display: block;
    &:hover{
        ${color}
    }
`;

export const BlogTitle = styled.h5 `
    font-size: ${themeGet("fontSizes.2")};
    a{
        ${color}
    }
`;

export const BlogMedia = styled.div `
    margin-bottom: 5px;
    ${device.xsmall}{
        flex-basis: 78px;
        max-width: 78px;
        margin-bottom: 0;
    }
    a{
        display: block;
        line-height: 1;
    }
`;
  
export const BlogWrap = styled.article `
    display: flex;
    flex-wrap: wrap;
    ${props => props.layout === 2 && css `
        ${BlogMedia}{
            order: 1;
        }
        ${BlogContent}{
            order: 2;
            ${device.xsmall}{
                padding-left: 30px;
            }
            ${device.medium}{
                padding-left: 20px;
            }
            ${device.large}{
                padding-left: 30px;
            }
        }
    `}
    ${props => props.layout !== 2 && css `
        ${BlogMedia}{
            order: 1;
            ${device.xsmall}{
                order: 2;
            }
        }
        ${BlogContent}{
            order: 2;
            ${device.xsmall}{
                order: 1;
                padding-right: 30px;
            }
            ${device.medium}{
                padding-right: 20px;
            }
            ${device.large}{
                padding-right: 30px;
            }
        }
    `}
`;