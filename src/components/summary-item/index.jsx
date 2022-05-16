import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  subtitle: 'text-md text-gray-700 italic',
  description: 'text-md text-gray-700 font-light',
};

const SummaryItem = ({ name, subtitle = false, description, link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.subtitle}>{subtitle}</p>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummaryItem;
