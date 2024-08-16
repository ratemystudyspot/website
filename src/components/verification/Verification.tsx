"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { FaLock, FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

type VerificationFormInputs = {
  name: string;
  email: string;
  password: string;
};

const VerificationForm = () => {
  const [duplicate, setDuplicate] = useState(false);
  const loading = useRef(false);
  const router = useRouter();

  const {
    formState: { errors },
    register: formRegister,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<VerificationFormInputs> = async (data) => {
    if (loading.current) return; // prevent user from spam creating accounts
    loading.current = true;
    console.log(data);
    // const capitalize = (str: string) => {
    //   if (typeof str !== "string" || str.length === 0) {
    //     return "";
    //   }
    //   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    // };

    // const [rawFirstName, rawLastName] = data.name.trim().split(/\s+/);

    // const name = `${capitalize(rawFirstName)} ${capitalize(rawLastName)}`;

    try {
      setDuplicate(false);

      //   await register(name, data.email, data.password);

      // if no error thrown get rid of errors and goto email verification page
      setDuplicate(false);
      router.push("/home");
      // TODO: navigate to a verify page (for future !!!)
      // navigate("/verify/" + email);
    } catch (e: unknown) {
      if ((e as Error).message === "Email duplicate Error") {
        // if register throws a duplicate email error
        setDuplicate(true);
      } else {
        // if register throws an unexpected error
        console.error("An error occurred:", e);
      }
    }
  };

  return (
    <div className="rounded-xl bg-zinc-200 p-4 lg:p-6">
      <form
        className="m-auto flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="">Register</h1>
        {loading.current ? ( // processing request
          <p className="">Loading...</p>
        ) : null}

        {errors.name && <p className="">{errors.name.message}</p>}
        <div className="flex flex-row gap-2">
          <input
            className="rounded-xl p-2"
            type="text"
            placeholder="Full Name"
            autoComplete="off"
            {...formRegister("name", {
              required: true,
              minLength: {
                value: 3,
                message: "Full name must be at least 3 characters long.",
              },
              maxLength: {
                value: 25,
                message: "Full name must be at most 25 characters long.",
              },
              validate: {
                isFullName: (value) =>
                  /^[a-zA-Z]+ [a-zA-Z]+$/.test(value) ||
                  "Please enter your full name.", // will contain only letters and a space
              },
            })} // is required, min length 3, max length 25
          />
          <FaUser className="" />
        </div>

        {errors.email && <p className="">{errors.email.message}</p>}
        {duplicate && (
          <p className="">Email address already in use, please log in.</p>
        )}
        <div className="flex flex-row gap-2">
          <input
            className="rounded-xl p-2"
            type="email"
            placeholder="Email"
            autoComplete="off"
            {...formRegister("email", {
              required: true,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address format.",
              },
            })} // is required, email regex pattern
          />
          <IoMdMail className="" />
        </div>

        {errors.password && <p className="">{errors.password.message}</p>}
        <div className="flex flex-row gap-2">
          <input
            className="rounded-xl p-2"
            type="password"
            placeholder="Password"
            autoComplete="off"
            {...formRegister("password", {
              required: true,
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long.",
              },
            })} // is required, min length 8
          />
          <FaLock className="" />
        </div>

        <button className="" type="submit" disabled={loading.current}>
          Create Account
        </button>
      </form>
      <div className="">
        <p>
          Already have an account?&nbsp;
          <Link href="home">
            <button className="">Log in</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerificationForm;
