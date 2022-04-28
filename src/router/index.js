import HNDiscover from '@/pages/discover'
import HNMine from '@/pages/mine'
import HNFriend from '@/pages/friend'

const routes = [
    {
        path: "/",
        exact: true,
        component: HNDiscover
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