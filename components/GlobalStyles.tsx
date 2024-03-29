import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    ${tw`box-sizing[border-box]`}
  }

  /* Reset anchor tag */
  a {
    ${tw`
      color[inherit]
      no-underline
    `}
  }

  /* Disable default text cadet/cursor */
  h1,
  h2,
  h3,
  p,
  li {
    ${tw`cursor-default`}
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure,
  blockquote,
  dl,
  dd {
    ${tw`m-0`}
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Hide overflow */
  html {
    ${tw`
      overflow-x-hidden
      scroll-behavior[smooth]
    `}
  }

  /* Set core body defaults */
  body {
    ${tw`
      block
      w-screen
      min-h-screen
      text-rendering[optimizeSpeed]
      leading-normal
    `}
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    ${tw`text-decoration-skip-ink[auto]`}
  }

  /* Make images easier to work with */
  img,
  picture {
    ${tw`max-w-full block`}
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    ${tw`font-sans`}
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      ${tw`scroll-behavior[auto]`}
    }
    *,
    *::before,
    *::after {
      ${tw`
        animation-duration[0.01ms !important]
        animation-iteration-count[1 !important]
        transition-duration[0.01ms !important]
        scroll-behavior[auto !important]
      `}
    }
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
