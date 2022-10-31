import React from 'react'
import * as AiIcon from "react-icons/ai";

const Button = ({ className, text, click, loading = false, icon = false, Icon, Iconclassname }) => {
    return (
        <button className={className} onClick={click}>
            {icon && <Icon className={Iconclassname} />}
            {loading ? <AiIcon.AiOutlineLoading3Quarters size={18}/> : text}
        </button>
    )
}

export default Button