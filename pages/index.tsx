import type { NextPage } from 'next';
import { useState } from 'react';
import tw from 'twin.macro';

import Navigation from '@/components/Navigation';
import SearchBar from '@/components/SearchBar';

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState<IActiveTab>('songs');
  const [query, setQuery] = useState<string>('');

  return (
    <div
      css={tw`
        container min-h-screen mx-auto
        px-20 pt-10
      `}
    >
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar
        query={query}
        setQuery={setQuery}
        placeholder={`search by ${activeTab.slice(0, -1)}...`}
      />
    </div>
  );
};

export default Home;
