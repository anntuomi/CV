import styled, { keyframes } from 'styled-components';

const slideInRight = keyframes`
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
    height: 100%;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    height: 100%;
  }
`;

const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    height: 100%;
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-110%, 0, 0);
    transform: translate3d(-110%, 0, 0);
    height: 100%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility: visible;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const Page = styled.div``;

export const PageTransition = styled(Page)`
  &.page-enter {
    animation: ${slideInRight} 0.5s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.5s forwards;
  }
`;

export const SubPageTransition = styled(Page)`
  &.page-enter {
    animation: ${fadeIn} 0.5s forwards;
  }
  &.page-exit {
    animation: ${fadeOut} 0.5s forwards;
  }
`;