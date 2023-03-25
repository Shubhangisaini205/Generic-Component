import React, { useEffect, useRef, useState } from 'react'
import PropTypes from "prop-types"
import Pin from './Pin'

function PinTab({ length, maxChar, setOtp }) {
    const [PinTabLength] = useState(new Array(length).fill("0"))
    const [pinTabValue] = useState(new Array(length).fill("0"))

    const inputRef = useRef([])

    // useEffect(() => {
    //     console.log(inputRef.current)
    // })
    const changeHandler = (e, index) => {
        // setting the pinTab Value
        pinTabValue[index] = e.target.value

        if (index < length - 1 && e.target.value.length === maxChar) {
            inputRef.current[index + 1].focus()
        }
        setOtp(pinTabValue.join(""))
        // console.log("PintabVlaue", pinTabValue)

    }

    const changeBackSpace = (e, index) => {
        // seting the pintab value
        pinTabValue[index] = e.target.value

        if (index > 0 && e.target.value.length == 0) {
            inputRef.current[index - 1].focus()
        }
        setOtp(pinTabValue.join(""))
    }

    const handlePaste = (e) => {
        const data = e.clipboardData
            .getData("text")
            .split("")
            .filter((item, index) => index < maxChar * length)

        let values = []
        for (let i = 0; i < length * maxChar; i += maxChar) {
            let temp = ""
            for (let j = i; j < maxChar + i; j++) {
                temp += data[j]
            }
            values.push(temp)
        }
        
        values.forEach((char, index) => {
            pinTabValue[index] = char
            inputRef.current[index].value = char

            if (index < length - 1 && e.target.value.length === maxChar) {
                inputRef.current[index + 1].focus()
            }
            setOtp(pinTabValue.join(""))
        });
        // console.log(pinTabValue)
    }




    useEffect(() => {
        inputRef.current[0].focus();
    }, [])

    return (
        <div onPaste={handlePaste}>
            {PinTabLength.map((item, index) => {
                return (
                    <Pin
                        key={index}
                        maxChar={maxChar}
                        ref={(ele) => {
                            inputRef.current[index] = ele
                        }}
                        forOnChange={(e) => changeHandler(e, index)}
                        forBackSpace={(e) => changeBackSpace(e, index)}
                    />
                );
            })}
        </div>
    )
}
PinTab.propTypes = {
    length: PropTypes.number.isRequired,
    maxChar: PropTypes.number,
};

export default PinTab