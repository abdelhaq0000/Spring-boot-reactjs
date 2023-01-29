import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = (WrappedComponent, allowedRoles) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        role: null,
        isAuthenticated: false
      };
    }

    componentDidMount() {
      const token = localStorage.getItem('jwtToken');
      if (token) {
        try {
          const role=  localestorage.getitems("role");
          this.setState({ role , isAuthenticated: true });
        } catch (err) {
          console.log(err);
        }
      }
    }

    render() {
      const { isAuthenticated, role } = this.state;
      if (!isAuthenticated) {
        return <Redirect to="/" />;
      }
      if (!allowedRoles.includes(role)) {
        return <Redirect to="/" />;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};