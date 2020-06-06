import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { FiSearch } from "react-icons/fi";
import WidgetBox, { WidgetTitle } from '../../../components/shared/widget-box'
import Form, { Input } from '../../../components/shared/form'
import Button from '../../../components/shared/button'
import { FormWrapper, BtnWrap } from './search.stc'

const SearchWidget = ({ widgetStyle, inputStyle }) => {
    const [value, setValue] = useState('');
    const onChangeHandler = event => setValue(event.target.value);
    const onSubmitHandler = event => {
        event.preventDefault();
        const query = value
            .toLowerCase()
            .trim()
            .replace(/[^\w ]/g, '')
        // .replace(/\&+/g, '-')

        navigate(`/search?query=${query}`, { state: { query } })
    }
    return (
        <WidgetBox {...widgetStyle}>
            <WidgetTitle>Search</WidgetTitle>
            <FormWrapper>
                <Form onSubmit={onSubmitHandler}>
                    <Input {...inputStyle} onChange={onChangeHandler} type="text" name="search" id="search" placeholder="Search Here..." />
                    <BtnWrap>
                        <Button type="submit" varient="iconButton" color="#63696a"><FiSearch /></Button>
                    </BtnWrap>
                </Form>
            </FormWrapper>
        </WidgetBox>
    )
}

SearchWidget.defaultProps = {
    widgetStyle: {
        skin: 'primary'
    },
    inputStyle: {
        pr: '50px'
    }
}

export default SearchWidget
