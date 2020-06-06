import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'
import {device} from '../../../theme'

export const HeroWrapper = styled.section `
    height: 800px;
    position: relative;
    display: flex;
    align-items: center;
    ${device.xsmall}{
        height: 600px;
    }
    ${device.small}{
        height: 600px;
    }
    ${device.xlarge}{
        height: 750px;
    }
`;

export const HeroBG = styled(BackgroundImage) `
    position: absolute !important;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`;
