import React from 'react'
import {Link} from 'gatsby'
import { FiTag } from "react-icons/fi";
import {createList, cleanText} from '../../../../utils/utilFunctions'
import {TagWrapper} from './tags.stc'
import {inferSlug} from '../../../../utils/utilFunctions'

export const Tags = ({tags, ...restProps}) => {
    let tagList = createList({
        list: tags
    });
    return(
        <TagWrapper {...restProps}>
            <FiTag className="icon"/>
            {tagList.map(tag => (
                <Link to={inferSlug('tag/' + tag.text)} key={cleanText(tag.text)}>
                    {tag.text}{tag.sep}
                </Link>
            ))}
        </TagWrapper>
    )
}

