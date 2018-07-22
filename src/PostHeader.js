import React from 'react';

// import PropTypes from 'prop-types';

const PostHeader = ({ avatar, name, time }) => (
  <div className="post-header">
    <div className="avatar">
      <img src={avatar} alt={name} />
    </div>
    <div className="name">
      {name}
    </div>
    <div className="time">
      {time}
    </div>
  </div>
);

// PostHeader.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default PostHeader;
