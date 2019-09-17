import LogInSignUp from './Pages/LogInSignUp';
import Home from './Pages/Home';
import HowItWorks from './Pages/HowItWorks';
import PastTrials from './Pages/PastTrials';

export const ROUTES_CONFIG = [
  {
    component: LogInSignUp,
    name: 'log-in-sign-up',
    path: '/log-in-sign-up',
  },
  {
    component: Home,
    name: 'home',
    path: '/',
  },
  {
    component: HowItWorks,
    name: 'how-it-works',
    path: '/how-it-works',
  },
  {
    component: PastTrials,
    name: 'past-trials',
    path: '/past-trials',
  },
];
