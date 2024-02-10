import styles from "./LoginPage.module.css";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import OrLine from "./components/OrLine";
import Input from "./components/Input/Input";

//Giriş Sayfası
const LoginPage = () => {
  console.log(styles);
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div className={styles.topContainer}>
          <h1>Giriş Yap</h1>
          <Input title="Kullanıcı Adı" placeHolder="Kullanıcı adınızı girin" />
          <Input title="Şifre" placeHolder="Şifrenizi girin" />
          <p className={styles.forgot}>Şifreni mi unuttun?</p>
          <button className={styles.button}>Giriş Yap</button>
        </div>
        <div className={styles.bottomContainer}>
          <OrLine />
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
