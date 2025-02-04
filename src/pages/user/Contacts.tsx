import { Button, Flex, Form, Input } from 'antd'
import styled from 'styled-components'

const Contacts = () => {
   window.scrollTo(0, 0)

   const [form] = Form.useForm()

   const onFinish = (values: unknown) =>
      console.log('Submitted values: ', values)

   return (
      <StyledContainer>
         <div className="main-container">
            <Flex
               wrap
               className="main-block"
               gap="15%"
               justify="center"
               align="center"
            >
               <Flex gap={30} vertical>
                  <h3 className="fc-shop"> ФК Абдыш-Ата </h3>

                  <Flex vertical gap={20}>
                     <Flex gap={5} className="contacts" vertical>
                        <h4>Адрес:</h4>

                        <a href="https://2gis.kg/bishkek/geo/70030076256335684?m=74.575073%2C42.882296%2F18.28">
                           Кыргызстан, г.Кант, Московская 7
                        </a>
                     </Flex>

                     <Flex gap={5} className="contacts" vertical>
                        <h4> Телефон:</h4>
                        <a href="tel:996990007088">+996 (990) 00-70-88</a>
                     </Flex>

                     <Flex gap={5} className="contacts" vertical>
                        <h4> Почта:</h4>
                        <a href="mailto:luxort@gmail.com">qwerty@gmail.com</a>
                     </Flex>

                     <Flex gap={5} className="contacts" vertical>
                        <h4> Режим работы</h4>
                        <a href="">10:00 до 19:00</a>
                     </Flex>
                  </Flex>
               </Flex>

               <Form
                  className="form"
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
               >
                  <h3 className="fc-shop">Напишите нам</h3>

                  <Flex className="inputs-container" wrap gap={30}>
                     <Form.Item
                        label="Имя"
                        name="firstName"
                        rules={[
                           {
                              required: true,
                              message: 'Это поле обязательно ',
                           },
                        ]}
                     >
                        <StyledInput placeholder="Напишите ваше имя" />
                     </Form.Item>

                     <Form.Item
                        label="Фамилия"
                        name="lastName"
                        rules={[
                           {
                              required: true,
                              message: 'Пожалуйста, напишите вашу фамилию',
                           },
                        ]}
                     >
                        <StyledInput placeholder="Напишите вашю фамилию" />
                     </Form.Item>
                  </Flex>

                  <Flex className="inputs-container" wrap gap={30}>
                     <Form.Item
                        label="E-mail"
                        name="email"
                        rules={[
                           {
                              required: true,
                              message: 'Пожалуйста, введите ваш email',
                           },
                           {
                              type: 'email',
                              message: 'Некорректный формат email',
                           },
                        ]}
                     >
                        <StyledInput placeholder="Напишите вашу почту" />
                     </Form.Item>

                     <Form.Item
                        label="Телефон"
                        name="phone"
                        rules={[
                           {
                              required: true,
                              message: 'Пожалуйста напишите ваш номер',
                           },
                        ]}
                     >
                        <StyledInput placeholder="+996 (___) ___ __ __" />
                     </Form.Item>
                  </Flex>

                  <Form.Item label="Cообщение" name="message">
                     <Input.TextArea
                        rows={5}
                        placeholder="Пожалуйста, введите ваше сообщение"
                     />
                  </Form.Item>

                  <Form.Item>
                     <StyledButton htmlType="submit" type="primary">
                        Отправит
                     </StyledButton>
                  </Form.Item>
               </Form>
            </Flex>
         </div>

         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23385.367276005894!2d74.820501063743!3d42.89034070347272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eaf1e78d922e1%3A0x567e4f8253a368ce!2z0JDQsdC00YvRiC3QkNGC0LA!5e0!3m2!1sru!2skg!4v1736753176654!5m2!1sru!2skg"
            className="map"
         />
      </StyledContainer>
   )
}

export default Contacts

const StyledContainer = styled.main`
   margin-top: 150px;

   .main-container {
      margin-left: 10px;
   }

   textarea {
      border-radius: 6px;
   }

   @media (max-width: 1000px) {
      margin-top: 95px;

      .main-container {
         margin-left: 40px;
      }

      .main-block {
         gap: 15% !important;
         justify-content: start;

         > .form {
            margin-top: 70px;
         }
      }
   }

   @media (max-width: 650px) {
      .main-block {
         gap: 15% !important;
         justify-content: start;

         > .form {
            width: 95%;
         }
      }
      .inputs-container {
         gap: 10px !important;
      }

      .ant-form-item {
         margin-bottom: 10px;
         width: 100%;

         > .ant-row {
            width: 100% !important;
         }
      }

      .ant-form-item-control-input {
         width: 100%;
      }

      .ant-form-item-control-input-content {
         width: 100%;
      }

      .ant-input {
         width: 100%;
      }
   }

   .fc-shop {
      font-size: 24px;
      font-weight: 500;
      line-height: 26.4px;
      text-align: left;
   }

   .contacts {
      > h4 {
         font-size: 18px;
         font-weight: 600;
         line-height: 19.8px;
         text-align: left;
      }

      > a {
         font-size: 16px;
         font-weight: 400;
         line-height: 19.8px;
         text-align: left;
         color: black;
      }
   }

   .map {
      margin-top: 60px;
      width: 100%;
      height: 300px;
   }

   @media (max-width: 430px) {
      .main-container {
         margin-left: 20px;
      }
   }
`

const StyledInput = styled(Input)`
   width: 18rem;
   height: 2.8rem;
   border: 1px solid #b6b6b6;
   border-radius: 6px;

   &:hover {
      border: 1px solid #b6b6b6;
   }

   &:active,
   focuse {
      border: 1px solid #b6b6b6;
   }
`

const StyledButton = styled(Button)`
   color: white;
   align-self: center;
   width: 300px;
   height: 45px;
   font-size: 17px;
   font-weight: 500;
   border-radius: 6px;
   width: 100%;
   opacity: 1;

   &:active {
      opacity: 0.8;
   }

   @media (max-width: 430px) {
      width: 100%;
   }

   @media (max-width: 950px) {
      width: 100%;
   }
`
