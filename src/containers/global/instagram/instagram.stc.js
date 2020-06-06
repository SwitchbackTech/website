import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { device } from '../../../theme'

export const SectionWrap = styled.section`
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: ${themeGet("colors.themeColor")};
    ${device.small}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
`;

export const InstagramWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -5px;
`;

export const InstagramItem = styled.div`
    flex-basis: 100%;
    max-width: 100%;
    padding: 5px;
    ${device.xxsmall}{
        flex-basis: 50%;
        max-width: 50%; 
    }
    ${device.small}{
        flex-basis: 33.3333%;
        max-width: 33.3333%;
    }
    ${device.medium}{
        flex-basis: 20%;
        max-width: 20%;
    }
    img{
        border-radius: 8px;
    }
    a{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        text-indent: -999999px;
    }
`;