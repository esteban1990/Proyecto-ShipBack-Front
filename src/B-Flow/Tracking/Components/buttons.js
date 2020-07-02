
import React, { useState } from 'react'
import './button.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const DateSelector = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div className='dateSelector'>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                placeholderText={'dd/mm/yyyy'}
                // minDate={new Date()}
                // maxDate={new Date()}
                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                showYearDropdown
                scrollableYearDropdown
            />
        </div>
    )
}

export const CourrierSelector = () => {
    return (
        <div className='corrierSelector'>
            <select name="transporte">
                <option>ChileExpress</option>
                <option>CorreosDeChile</option>
                <option>DHL</option>
            </select>
        </div>
    )
}

export const ButtonSelectAll = () => {
    return(
        <div className='button'>
            <button className='all'>Pick All List</button>
        </div>
    )
}

export const ButtonDelete = () => {
    return(
        <div className='button'>
            <button className='delete'>Delete List</button>
        </div>
    )
}

export const ButtonConfirm = () => {
    return(
        <div className='button'>
            <button className='confirm'>Confirm List</button>
        </div>
    )
}