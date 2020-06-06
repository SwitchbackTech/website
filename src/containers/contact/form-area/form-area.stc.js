import styled from 'styled-components'
import {device} from '../../../theme'

export const ContactFormArea = styled.section `
    padding-bottom: 60px;
    ${device.small}{
        padding-bottom: 80px;
    }
    ${device.medium}{
        padding-bottom: 100px;
    }
`