import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Link from './Link';

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

const LinksList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data && data.feed.links.map((link) => {
        return <Link key={link.id} link={link} />;
      })}
    </div>
  );
};

export default LinksList;
