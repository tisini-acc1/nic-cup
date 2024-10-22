import RegisterForm from "@/components/forms/register-form";
import React from "react";

const RegisterPage = () => {
  return (
    <main className="bg-hero bg-center bg-no-repeat bg-cover relative">
      <div className="bg-sky-400 absolute w-full h-full opacity-80"></div>
      <section className="py-36 h-screen container mx-auto z-10 relative">
        <div className="flex items-center justify-center">
          <RegisterForm />
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
