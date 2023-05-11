import IRoute from '../interfaces/route'
import UserLayout from '../layouts/UserLayout'
import FeedLayout from '../layouts/FeedLayout'
import AuthPage from '../pages/AuthPage'
import FriendsLayout from '../layouts/FriendsLayout'
import LogoutLayout from '../layouts/LogoutLayout'

const routes: IRoute[] = [
  {
    path: '/users/:userId?',
    component: UserLayout,
    exact: true,
    isProtected: true,
  },
  {
    path: '/feed',
    component: FeedLayout,
    exact: true,
    isProtected: true,
  },
  {
    path: '/friends',
    component: FriendsLayout,
    exact: true,
    isProtected: true,
  },
  {
    path: '/auth',
    component: AuthPage,
    exact: true,
    isProtected: false,
  },
  {
    path: '/logout',
    component: LogoutLayout,
    exact: true,
    isProtected: true,
  },
]

export default routes
