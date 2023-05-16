import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { FieldInput } from './StylesInput';
import { LabelTitle } from './StylesInput';
import { SubmitButton } from './StylesInput';

const LoginSchema = Yup.object().shape({
  login: Yup.string().required('login is required'),
  password: Yup.string().required('Password is required'),
});
const Auth = () => {
  const handleSubmit = (values, actions) => {
    const apiUrl = 'https://example.com/api/login'; //Здесь нужно будет заменить апи на свое путем импорта

    axios
      .post(apiUrl, values)
      .then((response) => {
        console.log('API response:', response.data);
        actions.setSubmitting(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        actions.setSubmitting(false);
      });
  };

  return (
    <section className=" px-[10vh] py-[8vh] min-h-[90vh] justify-around flex-wrap rounded-lg lg:px-14 lg:justify-between sm:justify-center sm:px-2 sm:grid-flow-row justify-items-center">
      <div>
        <div>
          <h2 className="text-secondary font-bold text-[60px] mt-20 mb-12 bg-backgroundAll md:text-center">Авторизация</h2>
        </div>
        <Formik
          initialValues={{ login: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="rounded-lg bg-[#2020208e] border-2 border-[#2E2E2E] lg:bg-transparent lg:border-none p-8">
                <div className="flex flex-col py-4">
                  <label htmlFor="login" className={LabelTitle}>Логин</label>
                  <Field type="text" name="login" className={FieldInput} />
                  <ErrorMessage name="login" component="div" />
                </div>
                <div className="flex flex-col py-4">
                  <label htmlFor="password" className={LabelTitle}>Пароль</label>
                  <Field type="password" name="password" className={FieldInput} />
                  <ErrorMessage name="password" component="div" />
                </div>

                <button type="submit" disabled={isSubmitting} className={SubmitButton}>
                  Авторизоваться
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section >
  );
};

export default Auth;