import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import routes from './router'

import HNAppHeader from '@/components/app-header'
import HNAppFooter from '@/components/app-footer'
import { HashRouter } from 'react-router-dom'


export default memo(function App() {
  return (
    <HashRouter>
      <HNAppHeader/>
      {renderRoutes(routes)}
      <HNAppFooter/>
    </HashRouter>
  )
})
