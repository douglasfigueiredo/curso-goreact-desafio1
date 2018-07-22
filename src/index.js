import React, { Component, Fragment } from 'react';

import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        avatar: 'http://endlesstheme.com/simplify1.0/images/profile/profile4.jpg',
        name: 'Douglas Figueiredo',
        time: 'há 3 min',
        text:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus.',
      },
      {
        id: 1,
        avatar: 'http://endlesstheme.com/Endless1.5.1/img/user2.jpg',
        name: 'Mirian Mota',
        time: 'há 10 min',
        text:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
      {
        id: 2,
        avatar: 'http://nutri.com.ec/wp-content/uploads/2017/03/avatar05.jpg',
        name: 'Mayara Mota Figueiredo',
        time: 'há 20 min',
        text:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum.',
      },
      {
        id: 3,
        name: 'Fulano de tal',
        time: 'há 1h',
        text:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header>
RocketBook
        </Header>
        {posts.map(post => (
          <Post
            key={post.id}
            avatar={post.avatar}
            name={post.name}
            time={post.time}
            text={post.text}
          />
        ))}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
