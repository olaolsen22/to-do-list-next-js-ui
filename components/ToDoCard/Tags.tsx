import React from 'react';

interface Props {
  tags: Array<string>;
}

const Tags = ({ tags }: Props) => (
  <div className="join mt-2 ml-auto gap-3">
    {tags.map((tag, index) => (
      <div key={`tag-${index}`} className="badge badge-xs badge-ghost">
        {tag}
      </div>
    ))}
  </div>
);

export default Tags;
