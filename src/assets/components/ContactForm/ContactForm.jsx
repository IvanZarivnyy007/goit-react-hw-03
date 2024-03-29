import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";

const initialValues = {
  username: " ",
  number: " ",
};

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit(e.target.elements.contacts.value);
    e.target.reset();
  };

  return (
    <Formik initialValues={initialValues}>
      <Form onSubmit={handleSubmit} className="form">
        <div className="container">
          <div className="div-name">
            <label htmlFor={nameId}>Name</label>
            <Field className="input" type="text" name="username" id={nameId} />

            <ErrorMessage name="username" as="span" />
          </div>

          <div className="div-number">
            <label htmlFor={numberId}>Number</label>
            <Field
              className="input"
              type="number"
              name="Number"
              id={numberId}
            />

            <ErrorMessage name="number" as="span" />
          </div>
          <button className="button-Add-contact" type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
