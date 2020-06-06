import styled from "styled-components";
import { themeGet } from '@styled-system/theme-get';

export const FeaturePostItem = styled.div`
    padding-bottom: 15px;
    padding-top: 15px;
    border-bottom: 1px solid ${themeGet("colors.borderColor")};
`;

export const FeaturePostWrap = styled.div`
    ${FeaturePostItem}{
        &:first-child{
            padding-top: 0;
        }
        &:last-child{
            padding-bottom: 0;
            border: none;
        }
        a{
            &:hover{
                color: #fff;
            }
        }
    }
`;

