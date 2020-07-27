import React,{ lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from './routes';

function Routers() {
  const routerList = routes.map((item, index) => {
    const { path, view } = item;
    return <Route key={index} path={path} component={ lazy(() => view ) } />
  });
  return (
    <div style={{padding: '20px', background: '#fff'}}>
      <Switch>
        {routerList}
        <Redirect from="*" to="/home" />
      </Switch>
    </div> 
  );
}

export default Routers;
