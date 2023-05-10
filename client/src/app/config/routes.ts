import IRoute from '../interfaces/route'
import UserLayout from '../layouts/ProfileLayout'
import AuthPage from '../pages/AuthPage'
import FeedPage from '../pages/FeedPage'
import FriendsPage from '../pages/FriendsPage'

const routes: IRoute[] = [
  {
    path: '/users/:user?',
    component: UserLayout,
    exact: true,
  },
  {
    path: '/feed',
    component: FeedPage,
    exact: true,
  },
  {
    path: '/friends',
    component: FriendsPage,
    exact: true,
  },
  {
    path: '/auth',
    component: AuthPage,
    exact: true,
  },
]

export default routes
