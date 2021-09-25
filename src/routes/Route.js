import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  isAdmin,
  isCustomer,
  isProducer,
  isCooperative,
  ...rest
}) {
  const { user } = store.getState().auth;

  if(isCustomer) {
    if(!user) {
      return <Redirect to="/login/cliente" />
    }
    if(user.type !== 'Cliente') {
      return <Redirect to="/login/cliente" />
    }
  }

  if(isAdmin) {
    if(!user) {
      return <Redirect to="/admin" />
    }
    if(user.type !== 'Administrador') {
      return <Redirect to="/admin" />
    }
  }

  if(isProducer) {
    if(!user) {
      return <Redirect to="/" />
    }
    if(user.type !== 'Produtor') {
      return <Redirect to="/" />
    }
  }

  if(isCooperative) {
    if(!user) {
      return <Redirect to="/" />
    }
    if(user.type !== 'Cooperativa') {
      return <Redirect to="/" />
    }
  }
  
  return (
    <Route
      {...rest}
      render={props => (
        <Component {...props} />
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
