import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

// import Discover from '@/pages/discover'
// import Download from '@/pages/download'
// import Focus from '@/pages/focus'
// import Mine from '@/pages/mine'
// import Artist from '@/pages/discover/c-pages/artist'
// import Djradio from '@/pages/discover/c-pages/djradio'
// import Ranking from '@/pages/discover/c-pages/ranking'
// import Recommend from '@/pages/discover/c-pages/recommend'
// import Songs from '@/pages/discover/c-pages/songs/songs'
// import Album from '@/pages/discover/c-pages/album'

const Discover = lazy(() => import('@/pages/discover'))
const Download = lazy(() => import('@/pages/download'))
const Focus = lazy(() => import('@/pages/focus'))
const Mine = lazy(() => import('@/pages/mine'))

const Recommend = lazy(() => import('@/pages/discover/c-pages/recommend'))
const Ranking = lazy(() => import('@/pages/discover/c-pages/ranking'))
const Songs = lazy(() => import('@/pages/discover/c-pages/songs/songs'))
const Artist = lazy(() => import('@/pages/discover/c-pages/artist'))
const Djradio = lazy(() => import('@/pages/discover/c-pages/djradio'))
const Album = lazy(() => import('@/pages/discover/c-pages/album'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  }
]

export default routes
