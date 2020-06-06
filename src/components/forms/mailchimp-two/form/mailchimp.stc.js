import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get';

export const MailchimpWrap = styled.div `
    position: relative;
    input{
        padding-right: 50px;
        background: #fff;
        color: #63696a;
        border-color: ${themeGet("colors.themeColor")};
        height: 60px;
        border-radius: 4px;
        &::-webkit-input-placeholder { 
            color: #63696a;
        }
        &:-ms-input-placeholder {
            color: #63696a;
        }
        &::placeholder {
            color: #63696a;
        }
    }
`;
 
export const SubmitBtn = styled.div `
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
`;

export const MailchimpInner = styled.div `
    position: relative;
`