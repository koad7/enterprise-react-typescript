import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './views/pages/Home';
import AboutPage from './views/pages/AboutPage';
import NotFoundPage from './views/pages/NotFoundPage';
import DashboardDefaultContent from './views/dashboard/dashboard-default-content';
import SettingsAndPrivacy from './views/dashboard/settings-and-privacy';
import { LinearProgress } from '@mui/material';

const Routes = () => {
  return (
    <Suspense fallback={<LinearProgress style={{ margin: '10rem' }} />}>
      <Switch>
        {/*eager loading */}
        <Route exact path="/" component={Home} />
        {/*lazy loading */}
        <Route exact path="/about" component={AboutPage} />
        {/*lazy loadings*/}
        <Route
          exact
          path={'/about'}
          component={lazy(() => import('./views/pages/AboutPage'))}
        />
        <Route
          exact
          path={'/dashboard'}
          render={({ match: { path } }) => (
            <DashboardDefaultContent>
              <Switch>
                <Route
                  path={path + '/'}
                  component={lazy(() =>
                    import('./views/dashboard/dashboard-default-content'),
                  )}
                />
                <Route
                  exact
                  path={path + '/settings-and-privacy'}
                  component={SettingsAndPrivacy}
                />
              </Switch>
            </DashboardDefaultContent>
          )}
        ></Route>
        <Route exact path="/not-found" component={NotFoundPage} />
        <Redirect from={'*'} to={'/not-found'} exact />
      </Switch>
    </Suspense>
  );
};
export default Routes;
