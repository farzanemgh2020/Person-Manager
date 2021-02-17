import React from 'react';
import { reduxForm,Field } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';
import './components.css';
import classnames from 'classnames';


const validate = (values) => {
  const errors = {};
  if(!values.firstName) {
    errors.firstName = {
      message: 'You need to provide a First Name'
    }
  }
  if(!values.phone) {
    errors.phone = {
      message: 'You need to provide a Phone number'
    }
  } else if(!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone)) {
    errors.phone = {
      message: 'Phone number must be in International format'
    }
  }
  if(!values.email) {
    errors.email = {
      message: 'You need to provide an Email address'
    }
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = {
      message: 'Invalid email address'
    }
  }
  if(!values.gender){
    errors.gender = {
      message: 'You need to provide Gender'
    }
  }
  return errors;
}

class PersonForm extends React.Component{
   
    componentWillReceiveProps = (nextProps) => { 
        const { person } = nextProps;
        if(person._id !== this.props.person._id) { 
          this.props.initialize(person);
        }
        
   }
   renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error" style={{color:'red'}}>{error.message}</span>}
    </Form.Field>
  )
   
    render(){ 
    
      const { handleSubmit, pristine, submitting, loading, person, reset} = this.props
        return(
            <div className="containerForm">
              {/* <h2 className="title"> { person._id ? 'Edit Person' : 'Add New Person'}</h2> */}
              <Form onSubmit={handleSubmit} loading={loading}  className="formContent">
               <Form.Group widths='equal'>
                <Field name="firstName" type="text" component={this.renderField} label="First Name"/>
                <Field name="lastName" type="text" component={this.renderField} label="Last Name"/>
              </Form.Group>
              <Field name="phone" type="text" component={this.renderField} label="Phone"/>
              <Field name="email" type="text" component={this.renderField} label="Email"/>
              <div className="field radiogroup">
                <label>Gender</label>
                <div className="ui radio genderField">
                  <Field name="gender" type="radio" component={this.renderField}  label='Male' value="male"/>
                  <Field name="gender" type="radio" component={this.renderField}  label='Female' value="female"/>
                </div>
              </div>
              <div>
                  <Button primary type='submit' disabled={pristine || submitting} >Save</Button>
                  { person._id ?  <Button onClick={reset} >Cancel</Button> : ""}
               </div>
              </Form>
          </div>
        )   
    }
  }
    export default reduxForm({form: 'person', validate})(PersonForm);

 
