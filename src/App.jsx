import { ConfigProvider, App as AntdApp } from 'antd'
import { HashRouter } from 'react-router-dom'
import Router from './routes'

function App() {

  return (
    <HashRouter>
      <ConfigProvider>
        <AntdApp>
          <Router />
        </AntdApp>
      </ConfigProvider>
    </HashRouter>
  )
}

export default App
