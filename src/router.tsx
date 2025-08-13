import { createBrowserRouter } from 'react-router';

import Layout from './components/Layout/Layout.tsx';
import Intro from './components/Intro/Intro.tsx';
import NotFound from './components/NotFound/NotFound.tsx';

const basename = process.env.NODE_ENV === 'production' ? '/only-test' : '/';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Intro /> },
            { path: '*', element: <NotFound /> }
        ]
    }
],
    { basename }
);

export default router;
