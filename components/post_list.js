import React from 'react';
import Post from './post';

var PostList = React.createClass({
  render: function() {
    return  <div>
      <div className='brand'>
      {
        this.props.posts.map(function(post) {
          return <div>
            <Post key={post.id}
                  posted_by = { post.posted_by }
                  location = {post.location}
                  title = {post.title}
                  description = { post.description}
                  image = {post.image} />
          </div>

        })
      }


      </div>
    </div>
  }
});

module.exports = PostList;
