import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import toastStyles from './toast.module.css'
import CheckIcon from '../svgIcons/checkIcon'
import ErrorIcon from '../svgIcons/errorIcon'

const Toast = props => {
        const { toastList } = props
        const [list, setList] = useState(toastList)

        useEffect(() => {
                    setList(toastList)
                    const interval = setInterval(() => {
                        if (toastList.length && list.length) {
                            deleteToast(toastList[0].id)
                        }
                    }, 3000)
                    return () => {
                        clearInterval(interval)
                    }
                }, [toastList, list])

        const transitions = useTransition(list, item => item.id, {
            from: { transform: 'translateX(120%)'},
            enter: { 
                transform: 'translateX(0%)',
                bottom: '12px',
                right: '12px',
                fontSize: '14px',
                boxSizing: 'border-box',
                maxHeight: '100px',
                position: 'fixed'
            },
            leave: { transform: 'translateX(120%)'},
            })

        const deleteToast = toastId => {
            const index = list.findIndex(toast => toast.id === toastId)
            list.splice(index, 1)
            setList([...list])
            const toastListItem = toastList.findIndex(toast => toast.id === toastId)
            toastList.splice(toastListItem, 1)
        }

    return (
        <div>
            {transitions.map(({ item, props, key }) =>
                <animated.div key={key} style={props}>
                    <div 
                        key={key}
                        className={`${toastStyles.toastItem} ${toastStyles.animateToast}`}
                        style={{ backgroundColor: item.backgroundColor }}
                    >
                        <button className={toastStyles.closeButton} type="button" onClick={() => deleteToast(item.id)} >
                            X
                        </button>
                        <div className={toastStyles.toastContent}>
                            <div className={toastStyles.notificationImage}>
                                { item.title === "success" ? <CheckIcon /> : <ErrorIcon />}
                            </div>
                            <div className={toastStyles.toastText}>
                                <p className={toastStyles.notificationMessage}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </animated.div>
            )}
        </div>
    )
}

export default Toast
