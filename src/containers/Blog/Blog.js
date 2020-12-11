import React, { Component } from 'react';
import Posts from './Posts/Posts'
import './Blog.css';
//import NewPost from './NewPost/NewPost'
import { Route, NavLink, Switch } from 'react-router-dom'

import asyncComponent from '../../hoc/asyncComponent'

// React Load Lazy

const AsyncNewPost = asyncComponent(()=> {
    return import('../Blog/NewPost/NewPost')
})




class Blog extends Component {

        state = {
            auth: true
        }
    render () {

        return (
            <div className="Blog">
            <header>
                <nav>
                    <ul>
                        <li><NavLink
                        to="/posts"
                        exact
                        activeClassName="my-active"
                        activeStyle={{
                            color: 'darkgoldenrod',
                            textDecoration: 'underline'
                        }}
                        >Home</NavLink></li>
                        <li><NavLink to={{
                            pathname: '/new-post',
                            hash: '#submit',
                            search: '?quick-submit=true'
                        }}>New Post</NavLink></li>
                    </ul>
                </nav>
            </header>

               {/* <Route path="/" exact render={()=> <h1>Home</h1>}/>
               <Route path="/" render={()=> <h1>Home 2</h1>}/> */}
               <Switch>
               {/* Working With Guards */}
                {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null }
                <Route path="/posts" component={Posts} />
                <Route render={() => <h1>Not Found</h1>}/>
                {/* <Redirect from="/" to="/posts" /> */}
               </Switch>

            </div>
        );
    }
}

export default Blog;