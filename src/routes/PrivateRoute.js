import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ component: Component, ...rest }) => (
    // ...rest 参数 直接接收
    // 如果 localStorage 中有 jwt ，则 render 接收到的 component
    // 如果 localStorage 中没有 jwt ，则 redirect 到 login page
    <Route
        {...rest}
        render={
            props =>
                localStorage.getItem("jwt") ?
                    (<Component {...props} />) :
                    (
                        <Redirect
                            to={
                                {
                                    pathname: '/login',
                                    state: { from: props.location }
                                }
                            }
                        />
                    )
        }
    />
)

export default PrivateRoute