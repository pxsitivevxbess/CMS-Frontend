import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
              <header>
                 <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
                 <div><a href="https://www.shiksha.com/" className="navbar-brand">Shiksha College Management</a> </div>
                 </nav>
              </header> 
            </div>
        );
    }
}

export default HeaderComponent;