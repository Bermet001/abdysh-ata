import { Flex, Table } from 'antd'
import styled from 'styled-components'
import { columns, dataSource } from '../../../configs'

const Rating = () => {
   return (
      <StyledContainer>
         <Flex vertical className="table">
            <div className="table-container">
               <h2>Таблица рейтинга</h2>

               <br />

               <Table
                  dataSource={dataSource}
                  columns={columns}
                  pagination={false}
                  scroll={{ x: 'max-content' }}
                  style={{
                     width: '100%',
                  }}
               />
            </div>
         </Flex>
      </StyledContainer>
   )
}

export default Rating

const StyledContainer = styled.main`
   padding: 100px 75px;
   background-color: #f0f3f7;

   @media (max-width: 1024px) {
      padding: 100px 20px;
   }

   .table-container {
      background-color: #fff;
      padding: 40px 20px;
      border-radius: 10px;

      @media (max-width: 900px) {
         h2 {
            margin-left: 10px;
         }

         .first-block-box {
            width: 100% !important;
         }
      }
      @media (max-width: 768px) {
         padding: 25px 5px;
      }

      .table {
         width: 95%;
         margin: 0 auto;
      }

      .ant-table-thead > tr > th {
         background: #fff;
         border-bottom: 1.1px solid #dadde9;
         font-size: 16px;

         @media (max-width: 768px) {
            font-size: 12px;
         }
      }

      .ant-table-tbody > tr > td {
         border: none;
         border-top: 1px solid #dadde9;
         font-size: 14px;

         @media (max-width: 768px) {
            font-size: 12px;
            max-width: 100%;
            padding: 10px;
         }
      }
   }
`
