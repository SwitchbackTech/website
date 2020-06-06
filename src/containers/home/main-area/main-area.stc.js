import styled from "styled-components";
import {device} from '../../../theme'

export const MainWrapper = styled.main `
    margin-top: 47px;
    margin-bottom: 47px;
    ${device.small}{
        margin-top: 67px;
        margin-bottom: 67px;
    }
    ${device.medium}{
        margin-top: 100px;
        margin-bottom: 100px;
    }
`;