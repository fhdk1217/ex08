import React from 'react'
import { NavLink, Route, Switch, withRouter } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Login from './Login'
import Join from './Join'
import Cart from './Cart'

const Router1 = ({history}) => {
    const activeStyle={
        color: 'pink'
    }
    const onLogout = (e) => {
        e.preventDefault();
        sessionStorage.removeItem('email');
        history.push('/');
    }
    return (
        <div>
            <div className='menu'>
                <NavLink to="/" activeStyle={activeStyle} exact={true}>Home</NavLink>
                <NavLink to="/products" activeStyle={activeStyle}>상품검색</NavLink>
                {sessionStorage.getItem('email') &&
                    <NavLink to="/cart">장바구니</NavLink>
                }
                {sessionStorage.getItem('email') ?
                    <NavLink to="#" onClick={onLogout}>로그아웃</NavLink>
                    :
                    <NavLink to="/login" activeStyle={activeStyle}>로그인</NavLink>
                }
                {sessionStorage.getItem('email') &&
                    <span>{sessionStorage.getItem('email')}</span>}
            </div>
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/products" component={Products}/>
                <Route path="/login" component={Login}/>
                <Route path="/join" component={Join}/>
                <Route path="/cart" component={Cart}/>
                <Route render={({location})=><h1>{location.pathname} 페이지가 존재하지 않습니다.</h1>}/>
            </Switch>
        </div>
    )
}

export default withRouter(Router1)