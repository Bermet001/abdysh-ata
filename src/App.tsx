import { ConfigProvider } from 'antd'
import AppRouter from './routes/AppRouter'

const App = () => (
   <ConfigProvider
      theme={{
         token: {
            colorPrimary: '#00a64f',
            colorPrimaryHover: '#00b959',
            borderRadius: 10,
            fontFamily: 'Lato, sans-serif',
         },

         components: {
            Select: {
               colorBgContainer: '#00a64f ',
            },
            Button: {
               colorLink: '#909CB5',
               borderRadius: 10,
            },
         },
      }}
   >
      <AppRouter />
   </ConfigProvider>
)

export default App
