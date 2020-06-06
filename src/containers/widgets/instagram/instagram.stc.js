import styled from "styled-components";
import { device } from '../../../theme'

export const InstagramWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -5px;
`;

export const InstagramItem = styled.figure`
    flex-basis: 50%;
    max-width: 50%;
    padding: 5px;
    position: relative;
    ${device.xsmall}{
        flex-basis: 33.333%;
        max-width: 33.333%;
    }
    a{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        text-indent: -999999px;
    }
    img{
        border-radius: 5px;
    }
`;