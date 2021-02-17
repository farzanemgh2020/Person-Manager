import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default function PersonCard({person, deletePerson}) {

    return (
      <Card>
      <Card.Content>
        <Card.Header>
          <p name="user">
           <Icon name='user outline'/>{person.firstName} {person.lastName}
           </p>
        </Card.Header>
        <Card.Description>
          <p name="phone"><Icon name='phone'/>{person.phone}</p>
          <p name="mail"><Icon name='mail outline'/>{person.email}</p>
          <p name="gender"><Icon name='venus mars'/>{person.gender}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/persons/edit/${person._id}`} className="ui basic button green">Edit</Link>
          <Button basic color="red" onClick={() =>{if (window.confirm('Are you sure you wish to delete this person?')) deletePerson(person._id)}}>Delete</Button>
        </div>
      </Card.Content>
    </Card>
      )
    }
    
    
    
    