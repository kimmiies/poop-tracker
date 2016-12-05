import React from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import styles from './app.scss';
import Header from './header';
import PostList from './post_list';
import $ from 'jquery';

var App = React.createClass({
  getInitialState: function(){
    return {
      posts: []
    }
  },

  render: function() {
    return  (<div>
      <Header/>
      <h1>HII IM A REACT APP - with ES2015</h1>

      <PostList posts = { this.state.posts }/>


      <p>
      <Button
        bsStyle="success"
        bsSize="large"
        href="http://react-bootstrap.github.io/components.html"
        target="_blank">
        Im a button
      </Button>
      </p>
    </div>)
  },

  componentDidMount: function(){
    $.get('/api/posts', (data) => {
      this.setState({ posts: data })

    })
  }
});

module.exports = App;
