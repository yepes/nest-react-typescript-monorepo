import React from 'react';
import './App.css';
import { Contact, Phone } from '@monorepo/common';
import { createValidator } from 'class-validator-formik';
import { validate } from 'class-validator';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import A from './components/A';

const contactDefaultValues = new Contact();
contactDefaultValues.subject = 'too small';
contactDefaultValues.email = 'an@email.com';

function App() {
  const testValidator = () => {
    const c = new Contact();

    c.subject = 'too short';
    c.email = 'incorrect email';

    validate(c).then((errors) => {
      console.log(errors);
    });
  };

  return (
    <div>
      <A />
    </div>
  );
}

export default App;
