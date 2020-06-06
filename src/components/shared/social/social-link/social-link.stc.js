import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const SocialLinkWrap = styled.a `
    color: ${themeGet("colors.textColor")};
    display: inline-block;
    line-height: 1;
`;
