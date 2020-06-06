import styled from "styled-components";
import {themeGet} from '@styled-system/theme-get'

export const CommentWrap = styled.div `
    border-bottom: 1px solid ${themeGet("colors.borderColor")};
    padding-top: 45px;
    padding-bottom: 50px;
    margin-bottom: 45px;
`;
