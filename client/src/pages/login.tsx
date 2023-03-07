import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../layout/layout";
import styles from "../styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { FC, useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import login_validate from "../../lib/validate";
import { NextRouter, useRouter } from "next/router";

interface Promps {
  email: string;
  password: string;
}

interface FormModal {
  email: string;
  password: string;
}

const Login: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const router: NextRouter = useRouter();
  // formik hook
  const formik = useFormik<FormModal>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });


  
  async function onSubmit(values: any) {
    const status: any = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });

    if (status.ok) router.push(status.url);
  }

  // Google Handler function
  const handleGoogleSignin: () => void  = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  // Github Login
  const handleGithubSignin: () => void = async () => {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  };



  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div
            className={`${styles.input_group} ${
              formik.errors.email && formik.touched.email
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type="email"
              placeholder="Email"
              className={styles.input_text}
              {...formik.getFieldProps("email")}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>}

          <div
            className={`${styles.input_group} ${
              formik.errors.password && formik.touched.password
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type={`${show ? "text" : "password"}`}
              placeholder="password"
              className={styles.input_text}
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>}
          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button
              type="button"
              onClick={handleGoogleSignin}
              className={styles.button_custom}
            >
              Sign In with Google{" "}
              <Image
                src={"/assets/google.svg"}
                width="20"
                height={20}
                alt="image"
              ></Image>
            </button>
          </div>
          <div className="input-button">
            <button
              type="button"
              onClick={handleGithubSignin}
              className={styles.button_custom}
            >
              Sign In with Github{" "}
              <Image
                src={"/assets/github.svg"}
                width={25}
                height={25}
                alt="image"
              ></Image>
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          don't have an account yet?{" "}
          <Link href={"/register"}>
            <span className="text-blue-700">Sign Up</span>
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default Login;
