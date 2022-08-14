import type { NextPage } from 'next';
import { useState } from 'react';
import tw from 'twin.macro';

import Navigation from '@/components/Navigation';
import SearchBar from '@/components/SearchBar';
import ArtistFragment from '@/components/ArtistFragment';
import TrackFragment from '@/components/TrackFragment';

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState<IActiveTab>('tracks');
  const [query, setQuery] = useState<string>('');

  const FRAGMENT_SELECTOR = {
    tracks: <TrackFragment name="tracks" />,
    artists: <ArtistFragment name="artists" />,
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
      {FRAGMENT_SELECTOR[activeTab]}
    </div>
  );
};

export default Home;
