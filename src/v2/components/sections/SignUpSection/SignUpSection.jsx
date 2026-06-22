import styles from "./SignUpSection.module.css";

const SignupSection = () => {
  return (
    <section className={styles.wrapper} id="sign-up">
      <div className={styles.signupBox}>
        <h2 className={styles.title}>SIGN UP FOR ADVICE</h2>

        <form className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.input}
          />

          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupSection;