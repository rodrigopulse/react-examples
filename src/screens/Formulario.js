import React from 'react'

import { Formik } from 'formik';
import * as Yup from 'yup';

// Styles
import { Container } from '../assets/styles/GridStyles'
import { Botao } from '../assets/styles/BotaoSyles'

// Components
import Titulo from '../components/Titulo'

import { Input, Label, ErrorForm, ContainerForm } from '../assets/styles/FormStyles'

const SignupSchema = Yup.object().shape({
  nome: Yup.string()
    .min(5, 'Preencha com um nome válido')
    .required('Campo obrigatório')
})

const Formulario = () => {

  return (

    <Container>

      <Formik
        initialValues = {{ nome: '' }}

        validationSchema={SignupSchema}

        onSubmit = {(values, { setSubmitting }) => {
          console.log(values)
          setSubmitting(false)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (

        <ContainerForm>

          <Titulo titulo="Formulário" />

          <form onSubmit = { handleSubmit } >

            <Label>Nome:</Label>

            <Input
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nome}
            />
            { errors.nome && touched.nome && <ErrorForm>{ errors.nome }</ErrorForm> }

            <Botao type="submit">Enviar</Botao>

          </form>

          </ContainerForm>

       )}

     </Formik>

    </Container>

  )

}

export default Formulario
