// src/components/IdeaIcon.js

import React from 'react';

const IdeaIcon = ({ onClick, size = 24, color = '#FFD700' }) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }}
    >
      <path
        d="M9 21H15M10 16V18H14V16M12 2C15.866 2 19 5.134 19 9C19 11.419 17.75 13.535 16.036 14.957C15.429 15.432 15 16.151 15 16.93V17H9V16.93C9 16.151 8.571 15.432 7.964 14.957C6.25 13.535 5 11.419 5 9C5 5.134 8.134 2 12 2Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IdeaIcon;
