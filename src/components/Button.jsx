import React from 'react'

const Button = ({ className, text, click, loading = false, icon = false, Icon, Iconclassname }) => {
    return (
        <button className={className} onClick={click}>
            {icon && <Icon className={Iconclassname} />}
            {loading ? "Loading..." : text}
        </button>
    )
}

export default Button