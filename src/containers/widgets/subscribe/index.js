import React from 'react'
import WidgetBox, {WidgetTitle} from '../../../components/shared/widget-box'
import Mailchimp from '../../../components/forms/mailchimp-two'
import {FormWrapper, SubscribeText} from './subscribe.stc'

const SearchWidget = ({widgetStyle, widgetTitleStyle, inputStyle}) => {
    return (
        <WidgetBox {...widgetStyle}>
            <WidgetTitle {...widgetTitleStyle}>Subscribe</WidgetTitle>
            <FormWrapper>
                <SubscribeText>Leave your email here and stay informed about our promotions and new arrivals.</SubscribeText>
                <Mailchimp/>
            </FormWrapper>
        </WidgetBox>
    )
}
 
SearchWidget.defaultProps = {
    widgetStyle: {
        skin: 'primary',
    },
    widgetTitleStyle: {
        color: '#fff'
    }
}
 
export default SearchWidget
