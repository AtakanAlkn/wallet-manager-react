import React from "react";
import styles from "./Input.module.css";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Bu alan boş bırakılamaz";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Geçersiz mail adresi";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const { email, password } = values;
          if (email === "johndoe@gmail.com" && password === "john123") {
            // Başarılı giriş durumunda ana sayfaya yönlendir
            navigate("/home");
          } else {
            // Başarısız giriş durumunda hata mesajı göster
            alert("Geçersiz e-posta veya şifre");
          }
          setSubmitting(false);
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
          <form onSubmit={handleSubmit} className={styles.container}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email && (
              <p className={styles.errorMessage}>{errors.email}</p>
            )}
            <label className={styles.label} htmlFor="password">
              Şifre
            </label>
            <input
              className={styles.input}
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.button}
            >
              Giriş Yap
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Input;
