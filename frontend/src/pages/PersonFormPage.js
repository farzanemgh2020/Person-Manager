import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newPerson, savePerson, fetchPerson, updatePerson} from '../redux/actions/person-actions';
import PersonForm from '../components/personform';


class PersonFormPage extends Component {
    state = {
    redirect: false
  }

  componentDidMount = () => {
    const { _id } = this.props.match.params;
    if(_id){
      this.props.fetchPerson(_id)
    } 
    else {
      this.props.newPerson();
    }
  }

  submit = (person) => {
    if(!person._id) {
      return this.props.savePerson(person)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    } else {
      return this.props.updatePerson(person)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    }
  }
  handelclick=()=>{
    return (
      <div>
      {
        <Redirect to="/persons" /> 
      }
    </div>
    )
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ? <Redirect to="/persons" /> : 
          <PersonForm person={this.props.person} loading={this.props.loading} onSubmit={this.submit} onclick={this.handelclick} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    person: state.personStore.person,
    errors: state.personStore.errors,
  }
}

export default connect(mapStateToProps, {newPerson, savePerson, fetchPerson, updatePerson})(PersonFormPage);
