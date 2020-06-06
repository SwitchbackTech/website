import styled from "styled-components";
import {space} from 'styled-system'
import {themeGet} from '@styled-system/theme-get'
import {Link} from 'gatsby'

export const BlogWrapper = styled.article `
    ${space}
`;

export const BlogInner = styled.div `

`;

export const BlogMedia = styled.div `
    margin-bottom: 22px;
    position: relative;
`;

export const BlogContent = styled.div `

`;

export const BlogHeader = styled.header `
    margin-bottom: 5px;
`;

export const BlogTitle = styled.h3 `
    font-size: 16px;
    font-weight: 600;
    margin-top: 5px;
    a{
        color: ${themeGet("colors.headingColor")};
    }
`;

export const BlogCategory = styled(Link) `
    position: absolute;
    left: 25px;
    top: 25px;
    display: inline-block;
    color: #fff;
    text-transform: capitalize;
    border: 2px solid #fff;
    height: 30px;
    min-width: 104px;
    border-radius: 35px;
    line-height: 26px;
    text-align: center;
    font-size: 12px;
    z-index: 9;
    &:hover{
        color: #fff;
    }
`;

export const BlogExcerpt = styled.p `
    margin-bottom: 18px;
`;

export const BlogFooter = styled.footer `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-top: 1px dashed ${themeGet("colors.borderColor")};
    padding-top: 10px;
`;

export const BlogMetaWrap = styled.div `
    margin-top: 4px;
    a{
        color: ${themeGet("colors.gray")}
    }
`;

export const BlogBtn = styled.div `
    margin-top: 4px;
`; 