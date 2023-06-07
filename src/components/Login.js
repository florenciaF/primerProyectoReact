import { Field, Form, Formik } from 'formik'
import React from 'react'

export const Login = () => {

  const initialValues = {
    email:'',
    password:''
  }

  const handleForm = (values) => {
    console.log('values:', values)
  }
 
  return (
    <div>
      <div className='row justify-content-center'> 
        <div className='col-md-6'>
        <h1>Inicio de sesion</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleForm}
        >
          <Form> 
                <div className="form-floating">
                  <Field 
                    type="email" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="name@example.com"
                    name='email'
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <Field 
                    type="password" 
                    className="form-control" 
                    id="floatingPassword" 
                    placeholder="Password" 
                    name='password'
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleForm}>Sign in</button>
          </Form>
        </Formik>
      </div>
    </div> 
    </div>
  )
}




// import React from 'react'
// import { Formik, Form, Field, ErrorMessage } from 'formik'

// export const Login = () => {
//   const initialValues = { 
//     email: '', 
//     password: ''
//   }

//   const handleSubmit = (values) => {
//     console.log(values)
//   }

//   const validateForm = (values) => {
//     const errors = {};

//     if (!values.email) {
//       errors.email = 'Campo requerido';
//       console.log('email requerido')

//     }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//       console.log('email invalido')
//     }
    
//     if (!values.password) {
//       console.log('pass requerido')
//       errors.password = 'Campo requerido';
//     }

//     return errors;
//   };
  
//   return (
//     <div>
//       <div className='row justify-content-center'>
//         <div className='col-md-6'>
//           <h2>Iniciar Sesion</h2>

//           <Formik 
//             initialValues={initialValues} 
//             onSubmit={handleSubmit}
//             validate={validateForm}
//           >
//             <Form>
//               <div className="form-floating">
//                 <Field 
//                   type="email" 
//                   id="email" 
//                   name='email'
//                   className='form-control' 
//                   placeholder="name@example.com"
//                 />
//                 <ErrorMessage name="email" component="div" />

//                 <label for="floatingInput">Email</label>
//               </div>
//               <div className="form-floating">
//                 <Field 
//                   type="password" 
//                   id='password' 
//                   name='password' 
//                   className='form-control' 
//                   placeholder="Password"
//                 />
//                 <ErrorMessage name="password" component="div" />

//                 <label for="floatingPassword">Password</label>
//               </div>
//               <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>  
//             </Form>
//           </Formik>
//         </div>
//       </div>
//     </div>
//   )
// }
