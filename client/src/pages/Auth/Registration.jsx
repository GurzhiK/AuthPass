import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { FieldInput } from './StylesInput';
import { LabelTitle } from './StylesInput';
import { SubmitButton } from './StylesInput';
import { API_URL } from '../../api/api';

const Registration = () => {
  return (
    <section className="px-[10vh] py-[8vh] justify-around flex-wrap rounded-lg min-h-[90vh] lg:px-14 lg:justify-between sm:justify-center sm:px-2 sm:grid-flow-row justify-items-center">
      <Formik
        initialValues={{
          login: '',
          password: '',
          repeatPassword: '',
          firstName: '',
          lastName: '',
          phone: '',
        }}
        validationSchema={Yup.object({
          login: Yup.string()
            .required('Не введено')
            .min(3, 'Логин должен состоять как минимум из 3 символов'),
          password: Yup.string()
            .required('Не введено')
            .min(6, 'Пароль должен состять как минимум из 6 символов'),
          repeatPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Пароль не совпадает')
            .required('Не введено'),
          firstName: Yup.string().required('Обязательно к заполнению'),
          lastName: Yup.string().required('Обязательно к заполнению'),
          phone: Yup.string()
            .matches(/^[+]\d{11}$/, 'Номер телефона должен начинаться с "+"')
            .required('Обязательно к заполнению'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log('Form data:', values);
            axios.post(`${API_URL}/users`, JSON.stringify(values), {
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then((response) => response.json())
              .then((data) => {
                console.log('API response:', data);
                setSubmitting(false);
              })
              .catch((error) => {
                console.error('API error:', error);
                setSubmitting(false);
              });
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <h2 className="text-secondary font-bold text-[60px] mt-20 mb-12 bg-backgroundAll md:text-center">Регистрация</h2>
            </div>
            <div className="rounded-lg bg-[#2020208e] border-2 border-[#2E2E2E] lg:bg-transparent lg:border-none p-8">
              <div className="flex flex-col py-4">

                <label htmlFor="login" className={LabelTitle}>Логин</label>
                <Field type="text" name="login" className={FieldInput} />
                <ErrorMessage name="login" className='text-main' />
              </div>

              <div className="flex flex-col py-4">
                <label htmlFor="password" className={LabelTitle}>Пароль</label>
                <Field type="password" name="password" className={FieldInput} />
                <ErrorMessage name="password" />
              </div>

              <div className="flex flex-col py-4">
                <label htmlFor="repeatPassword" className={LabelTitle}>Повторите пароль</label>
                <Field type="password" name="repeatPassword" className={FieldInput} />
                <ErrorMessage name="repeatPassword" className="text-white" />
              </div>

              <div className="flex flex-col py-4">
                <label htmlFor="firstName" className={LabelTitle}>Фамилия</label>
                <Field type="text" name="firstName" className={FieldInput} />
                <ErrorMessage name="firstName" />
              </div>

              <div className="flex flex-col py-4">
                <label htmlFor="lastName" className={LabelTitle}>Имя</label>
                <Field type="text" name="lastName" className={FieldInput} />
                <ErrorMessage name="lastName" />
              </div>

              <div className="flex flex-col py-4">
                <label htmlFor="phone" className={LabelTitle}>Номер телефона</label>
                <Field type="text" name="phone" className={FieldInput} />
                <ErrorMessage name="phone" />
              </div>

              <button type="submit" disabled={isSubmitting} className={SubmitButton}>
                Зарегистрироваться
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  )
}

export default Registration;