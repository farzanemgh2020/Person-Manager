import React from 'react';
import PersonCard from '../components/personcard';
import { Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function PersonList({persons, errors,loading, deletePerson}){
  const cards = () => {
    return persons.map(person => {
      return (
        <div key={person._id} className="divpersonlist">
          <PersonCard key={person._id} person={person} deletePerson={deletePerson} />
        </div>
      )
    })
  }

  const personList = (
    <div className="divlistcards">
      { cards() } 
      </div>
  )
  const loadingMessage = (
    <Message icon info>
      <Icon name='circle notched' loading />
      <Message.Content>
         <Message.Header>Just one second</Message.Header>
         We are fetching persons List for you.
     </Message.Content>
    </Message>
  )
  const emptyListMessage =(
    <Message icon info>
      <Icon name='warning circle'/>
      <Message.Content>
         <Message.Header>No Persons Found</Message.Header>
         <p>Add some new persons to get started.</p>
         <Link to={'/persons/new'} className="ui button primary">Add New Person</Link>
     </Message.Content>
    </Message>
  )
  const timeoutMessage = (
    <Message icon negative>
      <Icon name='wait' />
      <Message.Content>
         <Message.Header>{errors.global}</Message.Header>
         Is the backend server running?
     </Message.Content>
    </Message>
  )
  return (
    <div>
      { loading && loadingMessage }
      { persons.length === 0  && !loading && !errors.global && emptyListMessage }
      { errors.global && timeoutMessage }
      { persons.length > 0 && personList }
    </div>
  )
}
