import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase/config";

const AuthPage = ({setIsAuth}) => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        //oturumun acık oldugunu yönetmek için
        localStorage.setItem("token", res.user.refreshToken);
        //kulanıcı yetkilidir state i ni true cekeecez
        setIsAuth(true)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Odası</h1>
        <p>Lütfen Giriş Yapınız</p>
        <button onClick={handleLogin}>
          <img src="/google-logo.png" alt="google-logo" />
          <span>Google İle Gir</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
