import React from 'react'
import SearchWidget from '../../widgets/search'
import RecentPostWidget from '../../widgets/recent-post'
import InstagramWidget from '../../widgets/instagram'
import CategoriesWidget from '../../widgets/categories'
import SubscribeWidget from '../../widgets/subscribe'
import {SidebarWrap} from './sidebar.stc'

const Sidebar = () => {
    return (
        <SidebarWrap>
            <SearchWidget/>
            <RecentPostWidget/>
            <InstagramWidget/>
            <CategoriesWidget/>
            <SubscribeWidget/>
        </SidebarWrap>
    )
}

export default Sidebar
 