import IRoute from '../interfaces/route'
import UserLayout from '../layouts/ProfileLayout'
import AuthPage from '../pages/AuthPage'
import FeedPage from '../pages/FeedPage'
import FriendsPage from '../pages/FriendsPage'

const routes: IRoute[] = [
  {
    path: '/users/:userId?',
    component: UserLayout,
    exact: true,
    isProtected: true,
  },
  {
    path: '/feed',
    component: FeedPage,
    exact: true,
    isProtected: true,
  },
  {
    path: '/friends',
    component: FriendsPage,
    exact: true,
    isProtected: true,
  },
  {
    path: '/auth',
    component: AuthPage,
    exact: true,
    isProtected: false,
  },
]

export default routes
