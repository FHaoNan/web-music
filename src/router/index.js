import React from 'react'

import HNDiscover from '@/pages/discover'
import HNRecommend from '../pages/discover/c-pages/recommend'
import HNRanking from '../pages/discover/c-pages/ranking'
import HNSongs from '../pages/discover/c-pages/songs'
import HNDjradio from '../pages/discover/c-pages/djradio'
import HNArtist from '../pages/discover/c-pages/artist'
import HNAlbum from '../pages/discover/c-pages/album'

import HNMine from '@/pages/mine'
import HNFriend from '@/pages/friend'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to={"/discover"}/>
        )
    },
    {
        path: "/discover",
        component: HNDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to={"/discover/recommend"}/>
                )
            },
            {
                path: "/discover/recommend",
                component: HNRecommend
            },
            {
                path: "/discover/ranking",
                component: HNRanking
            },
            {
                path: "/discover/songs",
                component: HNSongs
            },
            {
                path: "/discover/djradio",
                exact: true,
                component: HNDjradio
            },
            {
                path: "/discover/artist",
                component: HNArtist
            },
            {
                path: "/discover/album",
                component: HNAlbum
            }
        ]
    },
    {
        path: "/mine",
        component: HNMine
    },
    {
        path: "/friend",
        component: HNFriend
    },

]

export default routes