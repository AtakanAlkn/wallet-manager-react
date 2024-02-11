import styles from "./LoginPage.module.css";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import OrDivider from "./components/OrDivider";
import Input from "./components/Input/Input";
import logo from "../../assets/images/logo.png";

//Giriş Sayfası
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <img src={logo} className={styles.img} />
        <div className={styles.topContainer}>
          <h1>Giriş Yap</h1>
          {/*Form Validation*/}
          <Input />
          <p className={styles.forgot}>Şifreni mi unuttun?</p>
        </div>
        <div className={styles.bottomContainer}>
          <OrDivider />
          <div className={styles.iconContainer}>
            <FcGoogle size={30} />
            <FaFacebook size={30} color=" #316FF6." />
            <BsTwitter size={30} color="#1DA1F2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
