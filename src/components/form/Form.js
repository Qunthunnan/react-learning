import { useState } from "react";
import "./form.scss";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

export const DonationForm = () => {
    const [currencyLabel, setCurrencyLabel] = useState(['none', '']);
    const [ classCurrency, currencySymbol ] = currencyLabel;

    function changeCurrency (value) {
        console.log(value);
        switch (value) {
            case 'USD': 
                setCurrencyLabel(['usd', '$']);
                break;
            case 'UAH':
                setCurrencyLabel(['uah', `₴`]);
                break;
            case 'EUR':
                setCurrencyLabel(['eur', `€`]);
                break;
            case '':
                setCurrencyLabel(['none', '']);
                break;
            default:
                throw new Error('wrong value of currency');
        }
    }
    return (
        <Formik
            initialValues= {{
                    name: '',
                    email: '',
                    amount: 0,
                    currency: '',
                    text: '',
                    terms: false
                }} 
                onSubmit= {values => {
                    console.log(JSON.stringify(values, null, 2));
                }}
                validationSchema= {Yup.object({
                    name: Yup.string().required("Це обов'язкове поле").matches(/^[\p{L} _0-9]*$/u, 'Дозволені символи у імені: букви, цифри пробіл та _').min(2, 'Мінімальна кількість символів для імені: 2').max(256, 'Максимальна кількість симовлів для імені: 256'),
                    email: Yup.string().email('Перевірте, чи правильно написана пошта').required("Це обов'язкове поле"),
                    currency: Yup.string().required('Оберіть валюту внеску'),
                    amount: Yup.number().required("Це обов'язкове поле").positive("Введіть суму більшу за 0").max(10000000, 'Максимальна можлива сума 10 000 000'),
                    text: Yup.string().max(1000, 'Максимальна кількість симовлів для повідомлення: 1000'),
                    terms: Yup.boolean().required('Необхідна ваша згода').oneOf([true], 'Необхідна ваша згода')
                })}>{
                    props => ( 
                    <>
                    <Form className="form">
                        <h2>Відправити пожертву</h2>
                        <label htmlFor="name">Ім'я</label>
                        <Field
                            name="name"
                            type="text"/>
                        <ErrorMessage name="name" className="error" component={'span'}/>
        
                        <label htmlFor="email">Пошта</label>
                        <Field
                            name="email"
                            type="email"/>
                        <ErrorMessage name="email" className="error" component={'span'}/>
        
                        <label htmlFor="amount">Сума пожертви</label>
                        <div className="amount_input_wrapper">
                            <Field
                                name="amount"
                                type="number"/>
                            <span className={`curency_label curency_label--${classCurrency}`}>{currencySymbol}</span>
                        </div>
                        <ErrorMessage name="amount" className="error" component={'span'}/>
        
                        <label htmlFor="currency">Валюта</label>
                        <Field
                            as= 'select'
                            name="currency"
                            onChange={(e) => { console.log(e); props.handleChange(e); changeCurrency(e.target.value) }}
                            >
                                <option value="">Оберіть валюту</option>
                                <option value="USD">USD</option>
                                <option value="UAH">UAH</option>
                                <option value="EUR">EUR</option>
                        </Field>
                        <ErrorMessage name="currency" className="error" component={'span'}/>
        
                        <label htmlFor="text">Повідомлення</label>
                        <Field 
                            as="textarea"
                            name="text"
                            type="textarea"/>
                        <ErrorMessage name="text" className="error" component={'span'}/>
        
                        <label className="checkbox">
                            <Field 
                            type="checkbox"
                            name="terms"/>
                            Згодні з політикою конфіденційності?
                        </label>
        
                        <ErrorMessage name="terms" className="error" component={'span'}/>
        
                        <button type="submit">Відправити</button>
                    </Form>
                    </>
 )}
        </Formik>
    )
}


// import { useState } from "react";
// import "./form.scss";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// export const DonationForm = () => {
//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             email: '',
//             amount: 0,
//             text: '',
//             terms: false
//         },
//         onSubmit: values => {
//             console.log(JSON.stringify(values, null, 2));
//         },
//         validationSchema: Yup.object({
//             name: Yup.string().required("Це обов'язкове поле").matches(/^[\p{L} _0-9]*$/u, 'Дозволені символи у імені: букви, цифри пробіл та _').min(2, 'Мінімальна кількість символів для імені: 2').max(256, 'Максимальна кількість симовлів для імені: 256'),
//             email: Yup.string().email('Перевірте, чи правильно написана пошта').required("Це обов'язкове поле"),
//             amount: Yup.number().required("Це обов'язкове поле").positive("Введіть суму більшу за 0").max(10000000, 'Максимальна можлива сума 10 000 000'),
//             text: Yup.string().max(1000, 'Максимальна кількість симовлів для повідомлення: 1000'),
//             terms: Yup.boolean().required('Необхідна ваша згода').oneOf([true], 'Необхідна ваша згода')
//         })
//     });

//     const { handleSubmit, handleChange, values, errors, touched} = formik;

//     console.log(values);

//     const [currencyLabel, setCurrencyLabel] = useState(['none', '']);
//     const [ classCurrency, currencySymbol ] = currencyLabel;

//     function changeCurrency (value) {
//         console.log(value);
//         switch (value) {
//             case 'USD': 
//                 setCurrencyLabel(['usd', '$']);
//                 break;
//             case 'UAH':
//                 setCurrencyLabel(['uah', `₴`]);
//                 break;
//             case 'EUR':
//                 setCurrencyLabel(['eur', `€`]);
//                 break;
//             case '':
//                 setCurrencyLabel(['none', '']);
//                 break;
//             default:
//                 throw new Error('wrong value of currency');
//         }
//     }

//     return (
//         <form className="form" onSubmit={ handleSubmit }>
//             <h2>Відправити пожертву</h2>
//             <label htmlFor="name">Ім'я</label>
//             <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 onChange={ handleChange }
//                 value={values.name}
//             />

//             {errors.name && touched.name ? ( <span className="error">{errors.name}</span> ) : null}

//             <label htmlFor="email">Пошта</label>
//             <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 onChange={ handleChange }
//                 value={ values.email }
//             />

//             {errors.email && touched.email ? ( <span className="error">{errors.email}</span> ) : null}

//             <label htmlFor="amount">Сума пожертви</label>
//             <div className="amount_input_wrapper">
//                 <input
//                     id="amount"
//                     name="amount"
//                     type="number"
//                     onChange={ handleChange }
//                     value={ values.amount }
//                 />
//                 <span className={`curency_label curency_label--${classCurrency}`}>{currencySymbol}</span>
//             </div>

//             {errors.amount && touched.amount ? ( <span className="error">{errors.amount}</span> ) : null}

//             <label htmlFor="currency">Валюта</label>
//             <select
//                 id="currency"
//                 name="currency"
//                 onChange={(e) => { handleChange(e); changeCurrency(e.target.value) }}
//                 value={ values.currency }>
//                     <option value="">Оберіть валюту</option>
//                     <option value="USD">USD</option>
//                     <option value="UAH">UAH</option>
//                     <option value="EUR">EUR</option>
//             </select>

//             {errors.currency && touched.currency ? ( <span className="error">{errors.currency}</span> ) : null}

//             <label htmlFor="text">Повідомлення</label>
//             <textarea 
//                 id="text"
//                 name="text"
//                 onChange={ handleChange }
//                 value={ values.text }
//             />

//             {errors.text && touched.text ? ( <span className="error">{errors.text}</span> ) : null}

//             <label className="checkbox">
//                 <input 
//                 name="terms" 
//                 type="checkbox"
//                 onChange={ handleChange }
//                 value={ values.terms } />
//                 Згодні з політикою конфіденційності?
//             </label>

//             {errors.terms && touched.terms ? ( <span className="error">{errors.terms}</span> ) : null}

//             <button type="submit">Відправити</button>
//         </form>
//     )
// }