import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { getHistoryAcademy } from '../../../store/slice/history/historyThunk'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Academy = () => {
   const { slug } = useParams<{ slug: string }>()
   const { academyHistory } = useAppSelector((state) => state.history)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getHistoryAcademy())
   }, [dispatch, slug])

   return (
      <StyledContainer>
         {academyHistory?.map((item) => (
            <div key={item.id}>
               <div
                  dangerouslySetInnerHTML={{
                     __html: item?.contend || '',
                  }}
               />
               <div
                  key={item.id}
                  dangerouslySetInnerHTML={{
                     __html: item?.content_end || '',
                  }}
               />
            </div>
         ))}
      </StyledContainer>
   )
}

export default Academy

const StyledContainer = styled.div`
   margin: 0 auto;
   padding: 30px;
   padding-top: 80px;
   max-width: 1600px;
`
