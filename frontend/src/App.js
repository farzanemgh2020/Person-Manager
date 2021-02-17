import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Dropdown,Menu , Container } from 'semantic-ui-react';
import PersonListPage from './pages/PersonListPage';
import PersonFormPage from './pages/PersonFormPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage'
import './App.css';


class App extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.props
    return (
      <Container>
        <div>
          <Menu inverted pointing  >
            <Menu.Item
              name='HomePage' 
              href="/"
              active={activeItem === 'HomePage'}
              onClick={this.handleItemClick}
            />
             <Dropdown item text='PersonManagement'>
                <Dropdown.Menu>
                  <Dropdown.Item icon='add' text='New Person' href="/persons/new" />
                  <Dropdown.Item icon='list' text='List  of Persons' href="/persons"  />
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item
              name='Search' 
              href="/search"
              active={activeItem === 'Search'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>
        <Route exact path="/" component={props => <HomePage {...props}/>}/>
    <Route exact path="/persons" component={props => <PersonListPage {...props}/>}/>
        <Route path="/persons/new" component={props => <PersonFormPage {...props}/>}/>
        <Route path="/persons/edit/:_id" component={props => <PersonFormPage {...props}/>}/>
        <Route path="/persons/search" component={props => <SearchPage {...props}/>}/>
      </Container>
    );
  }
}
export default App;