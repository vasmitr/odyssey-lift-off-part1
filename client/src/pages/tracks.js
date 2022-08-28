import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout, QueryResult } from '../components';
import TrackCard from '../containers/track-card'


const TRACKS = gql`
  query GetTracks {
  tracksForHome {
    id
    title
    thumbnail
    length
    modulesCount
    author {
      id
      name
      photo
    }
  }
}
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const {loading, data, error } = useQuery(TRACKS);

  // if(loading) return 'Loading...';

  // if(error) return `Error ${error.data}`;

  return (
  <Layout grid>
      <QueryResult loading={loading} error={error} data={data}>
      {
        data?.tracksForHome?.map(track => {
          return (
            <TrackCard key={track.id} track={track} />
          );
        })
      }
    </QueryResult>
  </Layout>
  );
};

export default Tracks;
