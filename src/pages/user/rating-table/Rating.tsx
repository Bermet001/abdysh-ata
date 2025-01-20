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

   .table-container {
      background-color: #fff;
      padding: 40px 20px;
      border-radius: 10px;

      .table {
         width: 95%;
         margin: 0 auto;
      }

      .ant-table-thead > tr > th {
         background: #fff;
         border-bottom: 1.1px solid #dadde9;
      }

      .ant-table-tbody > tr > td {
         border: none;
         border-top: 1px solid #dadde9;
      }
   }
`
