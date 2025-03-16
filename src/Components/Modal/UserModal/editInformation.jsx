import { Form, Formik } from "formik";

const EditInformation = () => {
    return (
      <div>
        <div>
          <h2>Edit information</h2>
          <img />
        </div>

        <div></div>
        <Formik>
          <Form>
            <input type="name" name="name" />
            <input type="email" name="email" />
            <input type="number" name="number" />
          </Form>
        </Formik>

        <button type="submit">Go to profile</button>
      </div>
    );
}

export default EditInformation;