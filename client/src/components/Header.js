import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href={'/auth/google'}>Connectez-vous avec Google</a>
          </li>
        );
      default:
        return [
          <li key="3" style={{ margin: '0 10px' }}>
            <Link to="/blogs">Mes blogs</Link>
          </li>,
          <li key="2">
            <a href={'/auth/logout'}>Déconnexion</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="indigo">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/blogs' : '/'}
            className="left brand-logo"
            style={{ marginLeft: '10px' }}
          >
            BUT S5 BLOG
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
