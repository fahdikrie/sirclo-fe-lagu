import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery } from 'react-query';
import tw from 'twin.macro';

import api from 'api';
import FragmentLoading from './FragmentLoading';
import TrackCardSearch from './TrackCardSearch';

interface TrackFragmentSearchProps extends QueryProps {
  name: string;
}

const SFragment = tw.div`
  mt-10
  max-w-2xl mx-auto
`;

const TrackFragmentSearch = ({ name, query }: TrackFragmentSearchProps) => {
  const searchTracks = async (pageParam: number, query: string) =>
    await fetch(api.SEARCH_TRACKS_URL(pageParam, query)).then(
      async (result) => {
        const returnData = await result.json();
        console.log(returnData);
        return returnData;
      }
    );

  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    [name, query],
    async ({ pageParam = 1 }) => await searchTracks(pageParam, query),
    {
      getNextPageParam: (returnData: TrackSearchData) => {
        const page = Number(
          returnData?.results?.['opensearch:Query'].startPage
        );
        const startIndex = Number(
          returnData?.results?.['opensearch:startIndex']
        );
        const totalIndex = Number(
          returnData?.results?.['opensearch:totalResults']
        );
        const itemsPerPage = Number(
          returnData?.results?.['opensearch:itemsPerPage']
        );

        if (startIndex + itemsPerPage < totalIndex) {
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
            {data?.pages.map((page) => {
              return page?.results?.trackmatches?.track?.map(
                (track: Track, id: number) => (
                  <TrackCardSearch key={id} track={track} />
                )
              );
            })}
          </>
        </InfiniteScroll>
      )}
    </SFragment>
  );
};

export default TrackFragmentSearch;
