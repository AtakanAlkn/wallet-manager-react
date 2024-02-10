import { useRouteError } from "react-router-dom";

//Hata Sayfası
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Hata!</h1>
      <p>Üzgünüz, beklenmeyen bir hata oluştu.</p>
      <p>
        <i>{error.status + error.statusText}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
