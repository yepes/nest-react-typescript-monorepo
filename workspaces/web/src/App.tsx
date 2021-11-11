import React from "react";
import "./App.css";
import { Contact, Phone } from "@monorepo/common";
import { createValidator } from "class-validator-formik";
import { validate } from "class-validator";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";

const contactDefaultValues = new Contact();
contactDefaultValues.subject = "too small";
contactDefaultValues.email = "an@email.com";

function App() {
  const testValidator = () => {
    const c = new Contact();

    c.subject = "too short";
    c.email = "incorrect email";

    validate(c).then((errors) => {
      console.log(errors);
    });
  };

  return (
    <div>
      <p>
        Clicking Test Validator should validate a Contact class a display the
        errors on the browser's console
      </p>
      <button onClick={testValidator}>Test validator</button>

      <Formik
        initialValues={contactDefaultValues}
        validate={createValidator(Contact)}
        onSubmit={(d) => {
          validate(d).then((errors) => console.log(errors));
        }}
      >
        {({ values }) => (
          <Form>
            <p>
              This is a form using formik. Using the class defined using
              class-validator as the validation schema{" "}
            </p>
            <p>
              Phones are a nested array of objects with their own validation
            </p>

            <p>
              <label htmlFor="subject">Contact Subject</label>
              <Field id="subject" name="subject" placeholder="subject" />
              <ErrorMessage name="subject" />
            </p>

            <p>
              <label htmlFor="subject">Contact Email</label>
              <Field id="email" name="email" placeholder="email" />
              <ErrorMessage name="email" />
            </p>

            <h2>Phones</h2>
            <FieldArray
              name="phones"
              render={(arrayHelpers) => (
                <div>
                  {values.phones && values.phones.length > 0 ? (
                    values.phones.map((phone, index) => (
                      <div key={index}>
                        <h3>Phone {index + 1}</h3>
                        <Field
                          id={`phones[${index}].prefix`}
                          name={`phones[${index}].prefix`}
                        />
                        <ErrorMessage name={`phones[${index}].prefix`} />

                        <Field name={`phones[${index}].number`} />
                        <ErrorMessage name={`phones[${index}].number`} />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            arrayHelpers.insert(index, new Phone())
                          }
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button
                      type="button"
                      onClick={() => arrayHelpers.push(new Phone())}
                    >
                      Add a phone
                    </button>
                  )}
                </div>
              )}
            />
            <p>
              <button type="submit">Submit</button>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
