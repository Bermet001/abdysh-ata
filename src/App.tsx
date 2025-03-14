import { ConfigProvider } from 'antd'
import AppRouter from './routes/AppRouter'

const App = () => {
   return (
      <ConfigProvider
         theme={{
            token: {
               colorPrimary: '#00a64f',
               colorPrimaryHover: '#00bc5b',
               borderRadius: 10,
               fontFamily: 'Lato, sans-serif',
            },

            components: {
               Select: {
                  colorBgContainer: '#00a64f ',
                  borderRadius: 6,
                  colorBorder: '#00a64f ',
               },

               Button: {
                  colorLink: '#909CB5',
                  borderRadius: 6,
               },
            },
         }}
      >
         <AppRouter />
      </ConfigProvider>
   )
}

export default App
