import React from 'react';
import { connect } from 'react-redux';
import PersonList from '../components/personlist';
import { fetchPersons, deletePerson } from '../redux/actions/person-actions';

class PersonListPage extends React.Component{

  componentDidMount() {
    this.props.fetchPersons();
  }
  render(){
    return (
        <div style={{width:"100%"}}>
          {/* <h2 style={{marginTop:"1em", paddingLeft:"25px"}}>List of Persons</h2> */}
          <PersonList persons={this.props.persons} loading={this.props.loading} errors={this.props.errors} deletePerson={this.props.deletePerson}/>
        </div>
      )
    }
  }
  
  // Make persons  array available in  props
  function mapStateToProps(state) {
    return {
      persons: state.personStore.persons,
      errors: state.personStore.errors,
      loading: state.personStore.loading,
    }
  }
  
  export default connect(mapStateToProps, {fetchPersons, deletePerson})(PersonListPage);
  
