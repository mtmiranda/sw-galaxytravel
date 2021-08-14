import React from 'react'

import { InputWrapper } from './style'

function SearchBar(props) {
    const handleChange = (event) => {
        props.onchange(event.target.value)
    }
    return (
        <InputWrapper>
            <form>
                <label htmlFor="mglt">
                    Insert a distance (mglt) to calculate:
                </label>
                <input
                    type="number"
                    name="mglt"
                    placeholder="Distance in mega lights (MGLT)"
                    value={props.value}
                    onChange={handleChange}
                />

                <button onClick={props.onClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Calculate
                </button>
            </form>
        </InputWrapper>
    )
}

export default SearchBar
