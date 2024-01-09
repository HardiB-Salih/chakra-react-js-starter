import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoadingScreen from '../pages/LoadingScreen';
import Layout from '../layout/Layout';

const Loadable = Component => props => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />

        {/* Add the rest of other pages here */}
      </Route>
      <Route path="404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default Router;

const HomePage = Loadable(lazy(() => import('../pages/Home')));
const AboutUsPage = Loadable(lazy(() => import('../pages/AboutUs')));

const Page404 = Loadable(lazy(() => import('../pages/Page404')));
