import { useRef, userRouter } from "react";
import classes from "./LoginForms.module.css";

export default function LoginForm(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const router = useRouter();

  function login(props, user) {
    if(props.user.map((user) =>
      this.user.email === user.email && this.user.password === user.password;
        router.push('/Foods');
      )  
    )
  }


  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const user = {
      email: enteredEmail,
      password: enteredPassword,
    };

    login(props, user);
  }

  return (
    <div className={classes.content}>
      <form >
        <div className={classes.contentInputs}>
          <img className={classes.image} src="../assets/logo.png" width="100%" height="44px"/>
          <label className={classes.label} htmlFor="email">
            Email
          </label>
          <input
            className={classes.inputs}
            type="email"
            required
            id="email"
            placeholder="seunome@email.com"
            ref={emailInputRef}
          />
          <label className={classes.label} htmlFor="password">
            Password
          </label>
          <input className={classes.inputs}
            type="password"
            required
            id="password"
            placeholder="Password"
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.showPass}>
          <input type="checkbox" required id="checkbox-forget-password" />
          <h3>Mostrar a senha.</h3>
        </div>
        <div className={classes.forgetAccount}>
          <h4>Problemas para acessar sua conta</h4>
        </div>
        <div>
          <button className={classes.btnLogin} onClick={submitHandler}>
            Acessar
          </button>
        </div>
        <div className={classes.betweenBtns}>
          <div className={classes.line}></div>
          <p>ou</p>
          <div className={classes.line}></div>
        </div>
        <div>
          <button className={classes.btnCadastrar}>Cadastrar</button>
        </div>
        <div className={classes.politics}>
          <h5>Termo de uso</h5>
          <div className={classes.point}></div>
          <h5>Politica de privacidade</h5>
        </div>
      </form>
    </div>
  );
}

export async function getStaticProps() {
  const server = "http://localhost:1337/users";

  const res = await fetch(server);
  const user = await res.json();

  return {
    props: { user },
  };
}