import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactSlice";

export default function ContactForm() {
    const dispatch = useDispatch();
    
    const handleContact = (values, actions) => {
        dispatch(addContact(values)); 
        actions.resetForm();
    };
    
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().trim().min(2, "Too short!").max(50, "Too long!").required("Required"),
        number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number format').required("Required"),
    });

    return (
        <div className={css.contactForm}>
            <Formik onSubmit={handleContact} initialValues={{ name: '', number: '' }} validationSchema={FeedbackSchema}>
                <Form className={css.card}>
                    <label className={css.label}>Name</label>
                    <Field className={css.input} type="text" name="name" placeholder="Enter the name"/>
                    <span className={css.error}>
                        <ErrorMessage  name="name" />
                    </span>

                    <label className={css.label}>Phone</label>
                    <Field
                        id="number"
                        name="number"
                        placeholder="Enter the phone"
                        className={css.input}
                    />
                    <span className={css.error}>
                        <ErrorMessage  name="number" />
                    </span>

                    <button className={css.button} type="submit" >Add Contact</button>
                </Form>
            </Formik>
        </div>
    );
}
