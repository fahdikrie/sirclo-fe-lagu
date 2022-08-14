import type { NextPage } from 'next';
import { useState } from 'react';
import tw from 'twin.macro';

import Navigation from '@/components/Navigation';
import SearchBar from '@/components/SearchBar';
import ArtistFragment from '@/components/ArtistFragment';
import TrackFragment from '@/components/TrackFragment';
import TrackFragmentSearch from '@/components/TrackFragmentSearch';
import ArtistFragmentSearch from '@/components/ArtistFragmentSearch';

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState<IActiveTab>('tracks');
  const [query, setQuery] = useState<string>('');

  const FRAGMENT_SELECTOR = {
    tracks: <TrackFragment name="tracks" />,
    artists: <ArtistFragment name="artists" />,
  };

  const SEARCH_FRAGMENT_SELECTOR = {
    tracks: <TrackFragmentSearch name="tracks" query={query} />,
    artists: <ArtistFragmentSearch name="artists" query={query} />,
  };

  return (
    <div
      css={tw`
        container min-h-screen mx-auto
        px-5 md:px-20
        pt-2.5 md:pt-10
      `}
    >
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar
        query={query}
        setQuery={setQuery}
        placeholder={`search by ${activeTab.slice(0, -1)}...`}
      />
      {query !== ''
        ? SEARCH_FRAGMENT_SELECTOR[activeTab]
        : FRAGMENT_SELECTOR[activeTab]}
    </div>
  );
};

export default Home;
