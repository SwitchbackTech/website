import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get';

export const MailchimpWrap = styled.div `
    position: relative;
    input{
        font-size: 16px;
        height: 50px;
        color: ${themeGet('headingColor')};
        border: 0px;
        border-bottom-width: 2px;
        border-bottom-color: ${themeGet('headingColor')};
        border-style: solid;
        padding-left: 0;
        padding-bottom: 22px;
        &:placeholder {
            color: ${themeGet('headingColor')};
        }
    }
`;

export const SubmitBtn = styled.div `
    position: absolute;
    right: 0;
    top: 0;
`;