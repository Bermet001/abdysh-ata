import { FC } from 'react'
import styled, { keyframes } from 'styled-components'

const Preloader: FC = () => {
   const text = 'ABDYSH-ATA'
   const letterDelayIncrement = 0.2
   return (
      <PreloaderContainer>
         <AnimationPreloader>
            <Spinner />
            <TxtLoading>
               {text.split('').map((char, index) => (
                  <Letter key={index} delay={index * letterDelayIncrement}>
                     {char}
                  </Letter>
               ))}
            </TxtLoading>
         </AnimationPreloader>
         <Loader>
            <LoaderRow>
               {Array.from({ length: 10 }).map((_, index) => (
                  <LoaderSection key={index} isdark={(index < 2).toString()} />
               ))}
            </LoaderRow>
         </Loader>
      </PreloaderContainer>
   )
}
const Letter: FC<{ children: string; delay: number }> = ({
   children,
   delay,
}) => (
   <LetterStyled
      data-text-preloader={children}
      style={{ animationDelay: `${delay}s` }}
   >
      {children}
   </LetterStyled>
)
export default Preloader

const spin = keyframes`
   to { transform: rotate(360deg); }
`
const lettersLoading = keyframes`
   0%, 50% {
      opacity: 0;
      transform: rotateY(-90deg);
   }
   100% {
      opacity: 1;
      transform: rotateY(0deg);
   }
`
const PreloaderContainer = styled.div`
   position: fixed;
   inset: 0;
   display: flex;
   align-items: center;
   background-color: #272727;
   justify-content: center;
   z-index: 99999;
`
const AnimationPreloader = styled.div`
   z-index: 1000;
   text-align: center;
`
const Spinner = styled.div`
   width: 9em;
   height: 9em;
   margin: 0 auto 3.5em;
   border-radius: 50%;
   border: 3px solid rgba(245, 244, 244, 0.721);
   border-top-color: grey;
   animation: ${spin} 3s infinite linear;
   @media (max-width: 767px) {
      width: 7.5em;
      height: 7.5em;
      margin-bottom: 1.5em;
   }
`
const TxtLoading = styled.div`
   user-select: none;
   @media (max-width: 767px) {
      font-size: 2.5em;
   }
`
const LetterStyled = styled.span<{ delay?: number }>`
   position: relative;
   color: transparent;
   display: inline-block;
   &::before {
      content: attr(data-text-preloader);
      position: absolute;
      left: 0;
      top: -3px;
      color: green;
      opacity: 0;
      font-size: 20px;
      transform: rotateY(-90deg);
      animation: ${lettersLoading} 4s infinite;
      animation-delay: inherit;
   }
`
const Loader = styled.div`
   position: fixed;
   inset: 0;
   font-size: 0;
   z-index: 1;
   pointer-events: none;
`
const LoaderRow = styled.div`
   display: flex;
   height: 100%;
`
const LoaderSection = styled.div<{ isdark: string }>`
   width: 10%;
   height: 100%;
   background-color: ${({ isdark }) =>
      isdark === 'true' ? '#2222' : 'transparent'};
   > div {
      background-color: #222;
      height: 100vh;
      width: 100%;
      transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
   }
`
