import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from './store'

// import { IRootState } from './store'
// import store from './store'

// type GetStateFnType =typeof store.getState
// type IRootState = ReturnType<GetStateFnType>
function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual //状态浅比较
  )

  return (
    <div className="App">
      <div className="nav">
        <Link to="discover">发现音乐</Link>
        <Link to="mine">我的音乐</Link>
        <Link to="focus">我的关注</Link>
        <Link to="download">下载客户端</Link>
      </div>
      <h2>当前计数：{count}</h2>
      <h2>{message}</h2>
      <Suspense fallback={<div>loading...</div>}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
