import tw, { styled } from 'twin.macro';

export const SCard = tw.a`
  w-full
  bg-gray-50 text-black
  cursor-pointer

  p-2 mb-3 shadow-md
  flex gap-2
  rounded-lg

  hover:bg-opacity-95
`;

export const SProfilePicture = tw.div`
  w-16 h-16 md:(w-32 h-32) rounded overflow-hidden
  self-center
`;

export const SInfo = styled.div`
  ${tw`
    flex flex-col justify-around
  `}

  h2.name {
    ${tw`text-xl font-bold truncate`}
  }

  div.statistics {
    ${tw`flex gap-5`}
  }

  div.statistics__item {
    ${tw`text-left`}

    p {
      ${tw`text-sm`}
    }

    span {
      ${tw`text-sm text-gray-900 font-light`}
    }
  }
`;
