import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsersAndPosts } from '../actions';

import UserHeader from './UserHeader';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchUsersAndPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle align icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
}

export default connect(
  mapStateToProps,
  { fetchUsersAndPosts }
)(PostList);