import styled from "styled-components";
import { themeGet } from '@styled-system/theme-get';

export const ContactFormWrap = styled.div`
    .form-group{
        &.has-error{
            margin-bottom: 40px;
        }
        label {
            position: absolute;
            left: 25px;
            top: 20px;
            background: #fff;
            padding: 0 5px;
            transition: ${themeGet("transition")};
        }
        input:focus ~ label,
        textarea:focus ~ label{
            top: -11px;
        }
        &.has-value{
            label{
                top: -11px;
            }
        }
    }
    .error{
        color: ${themeGet("colors.danger")};
        display: inline-block;
        position: absolute;
        left: 0;
        bottom: -26px;
    }
    .success{
        color: ${themeGet("colors.success")}
    }
    .form-output{
        margin-top: 10px;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    }
`;