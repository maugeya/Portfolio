import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import toastStyles from './toast.module.css'
import CheckIcon from '../svgIcons/checkIcon'
import ErrorIcon from '../svgIcons/errorIcon'

const Toast = props => {
    const { toastList } = props
    
    const [list, setList] = useState(toastList)
    const [slideClassNames, setSlideClassNames] = useState("")

    useEffect(() => {
        setList(toastList)
        const interval = setInterval(() => {
            if (toastList.length && list.length) {
                deleteToast(toastList[0].id)
            }
        }, 5000)
        return () => {
            clearInterval(interval)
        }
    }, [toastList, list])
    
    const deleteToast = toastId => {
        const index = list.findIndex(toast => toast.id === toastId)
        list.splice(index, 1)
        setList([...list])
        const toastListItem = toastList.findIndex(toast => toast.id === toastId)
        toastList.splice(toastListItem, 1)
    }

    return (
        <>
            <div className={`${toastStyles.notificationContainer} ${toastStyles.bottomRight}`}>
                {
                    list.map((toast, i) =>     
                        <div 
                            key={i}
                            className={`${toastStyles.toastItem} ${toastStyles.animateToast}`}
                            style={{ backgroundColor: toast.backgroundColor }}
                        >
                            <button className={toastStyles.closeButton} type="button" onClick={() => deleteToast(toast.id)} >
                                X
                            </button>
                            <div className={toastStyles.toastContent}>
                                <div className={toastStyles.notificationImage}>
                                    { toast.title === "Success!" ? <CheckIcon /> : <ErrorIcon />}
                                </div>
                                <div className={toastStyles.toastText}>
                                    <p className={toastStyles.notificationTitle}>{toast.title}</p>
                                    <p className={toastStyles.notificationMessage}>
                                        {toast.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

Toast.defaultProps = {
    position: 'bottom-right'
}

Toast.propTypes = {
    toastList: PropTypes.array.isRequired,
    position: PropTypes.string,
    autoDelete: PropTypes.bool,
    autoDeleteTime: PropTypes.number
}

export default Toast