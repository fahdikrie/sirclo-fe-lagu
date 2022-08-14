import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery } from 'react-query';
import tw from 'twin.macro';

import api from 'api';
import ArtistCard from './ArtistCard';
import FragmentLoading from './FragmentLoading';

interface ArtistFragmentProps {
  name: string;
}

const SFragment = tw.div`
  mt-10
  max-w-2xl mx-auto
`;

const ArtistFragment = ({ name }: ArtistFragmentProps) => {
  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    name,
    async ({ pageParam = 1 }) =>
      await fetch(`${api.GET_ARTISTS_URL}&page=${pageParam}&limit=20`).then(
        async (result) => {
          const returnData = await result.json();
          const artists = returnData?.artists?.artist;

          const modifiedData = {
            ...returnData,
            artists: {
              ...returnData.artists,
              artist: artists.slice(artists.length - 20),
            },
          };

          return modifiedData;
        }
      ),
    {
      getNextPageParam: (returnData: ArtistData) => {
        const page = Number(returnData?.artists?.['@attr'].page);
        const totalPages = Number(returnData?.artists?.['@attr'].totalPages);

        if (page < totalPages) {
          return page + 1;
        }
      },
    }
  );

  return (
    <SFragment>
      {status === 'success' && (
        <InfiniteScroll
          dataLength={(data?.pages.length ?? 0) * 20}
          next={fetchNextPage}
          hasMore={hasNextPage ?? false}
          loader={<FragmentLoading />}
        >
          <>
            {data?.pages.map((page) => (
              <>
                {page?.artists?.artist?.map((artist: Artist, id: number) => (
                  <ArtistCard key={id} artist={artist} />
                ))}
              </>
            ))}
          </>
        </InfiniteScroll>
      )}
    </SFragment>
  );
};

export default ArtistFragment;
