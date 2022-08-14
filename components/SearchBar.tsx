import { Dispatch, SetStateAction } from 'react';
import tw from 'twin.macro';

interface SearchBarProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

const SSearchBar = tw.div`
  bg-gray-100
  text-black

  mx-auto
  flex items-center gap-2
  w-full md:max-w-xl

  py-1.5 px-1.5
  rounded-xl
`;

const SInput = tw.input`
  flex-1
  bg-gray-100
  outline-none
`;

const SIcon = tw.div`
  w-4 h-4 ml-0.5
`;

const SButton = tw.button`
  bg-purple-700 text-white
  py-1 px-1.5 rounded-md
  text-sm

  hidden md:block
`;

const Icon = () => (
  <SIcon>
    <svg
      aria-hidden="true"
      className="w-5 h-5 text-gray-500 dark:text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  </SIcon>
);

const SearchBar = ({ query, setQuery, placeholder }: SearchBarProps) => {
  return (
    <SSearchBar>
      <Icon />
      <SInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
      />
      <SButton type="submit">search</SButton>
    </SSearchBar>
  );
};

export default SearchBar;
