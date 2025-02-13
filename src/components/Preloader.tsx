import { FC } from 'react'
import styled, { keyframes } from 'styled-components'

const Preloader: FC = () => {
   return (
      <PreloaderContainer>
         <AnimationPreloader>
            <Spinner />

            <TxtLoading>
               <Letter data-text-preloader="A"> A </Letter>
               <Letter data-text-preloader="B"> B </Letter>
               <Letter data-text-preloader="D"> D </Letter>
               <Letter data-text-preloader="Y"> Y </Letter>
               <Letter data-text-preloader="S"> S </Letter>
               <Letter data-text-preloader="H"> H </Letter>
               <Letter data-text-preloader="-"> - </Letter>
               <Letter data-text-preloader="A"> A </Letter>
               <Letter data-text-preloader="T"> T </Letter>
               <Letter data-text-preloader="A"> A </Letter>
            </TxtLoading>
         </AnimationPreloader>

         <Loader>
            <LoaderRow>
               {Array.from({ length: 10 }).map((_, index) => (
                  <LoaderSection key={index}>
                     <Bg />
                  </LoaderSection>
               ))}
            </LoaderRow>
         </Loader>
      </PreloaderContainer>
   )
}

const fadeIn = keyframes`
   0% { opacity: 1; }
   100% { opacity: 1; }
`

const waveOut = keyframes`
   0% {
      transform: translateY(0);
      height: 100vh;
   }

   100% {
      transform: translateY(-100vh);
      height: 0;
   }
`

const PreloaderContainer = styled.div`
   align-items: center;
   display: flex;
   height: 100%;
   justify-content: center;
   position: fixed;
   left: 0;
   top: 0;
   width: 100%;
   z-index: 99999;
   animation: ${fadeIn} 3s forwards;

   &.loaded {
      animation: ${waveOut} 3s forwards;
   }
`

const AnimationPreloader = styled.div`
   z-index: 1000;
`

const Spinner = styled.div`
   animation: spin 3s infinite linear;
   border-radius: 50%;
   border: 3px solid rgba(245, 244, 244, 0.721);
   border-top-color: grey;
   height: 9em;
   margin: 0 auto 3.5em;
   width: 9em;

   @media (max-width: 767px) {
      width: 7.5em;
      height: 7.5em;
      margin: 0 auto 1.5em;
   }
`

const TxtLoading = styled.div`
   font: bold 5em 'Syne', sans-serif;
   text-align: center;
   user-select: none;

   @media (max-width: 767px) {
      font-size: 2.5em;
   }
`

const Letter = styled.span`
   color: white;
   position: relative;

   &::before {
      animation: letters-loading 4s infinite;
      color: green;
      content: attr(data-text-preloader);
      left: 0;
      opacity: 0;
      position: absolute;
      top: -3px;
      transform: rotateY(-90deg);
   }

   &:nth-child(2)::before {
      animation-delay: 0.2s;
   }
   &:nth-child(3)::before {
      animation-delay: 0.4s;
   }
   &:nth-child(4)::before {
      animation-delay: 0.6s;
   }
`

const Loader = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   font-size: 0;
   z-index: 1;
   pointer-events: none;
`

const LoaderRow = styled.div`
   height: 100%;
   display: flex;
`

const LoaderSection = styled.div`
   width: 10%;
   height: 100%;
   padding: 0;

   &:nth-child(1),
   &:nth-child(2) {
      background-color: #2222;
   }
`

const Bg = styled.div`
   background-color: #222;
   height: 100vh;
   width: 100%;
   transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
`

export default Preloader
