import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery } from 'react-query';
import tw from 'twin.macro';

import api from 'api';
import TrackCard from './TrackCard';
import FragmentLoading from './FragmentLoading';

interface TrackFragmentProps {
  name: string;
}

const SFragment = tw.div`
  mt-10
  max-w-2xl mx-auto
`;

const TrackFragment = ({ name }: TrackFragmentProps) => {
  const fetchTracks = async (pageParam: number) =>
    await fetch(api.GET_TRACKS_URL(pageParam)).then(async (result) => {
      const returnData = await result.json();
      const tracks = returnData?.tracks?.track;

      const modifiedData = {
        ...returnData,
        tracks: {
          ...returnData.tracks,
          track: tracks.slice(tracks.length - 20),
        },
      };

      return modifiedData;
    });

  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    [name],
    async ({ pageParam = 1 }) => await fetchTracks(pageParam),
    {
      getNextPageParam: (returnData: TrackData) => {
        const page = Number(returnData?.tracks?.['@attr'].page);
        const totalPages = Number(returnData?.tracks?.['@attr'].totalPages);

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
            {data?.pages.map((page) => {
              return page?.tracks?.track?.map((track: Track, id: number) => (
                <TrackCard key={id} track={track} />
              ));
            })}
          </>
        </InfiniteScroll>
      )}
    </SFragment>
  );
};

export default TrackFragment;
