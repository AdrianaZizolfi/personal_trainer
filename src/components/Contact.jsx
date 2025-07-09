import React from "react";
import Button from "../layouts/Button";
import img from "../assets/img/contactImg.jpg";

const Contact = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <div className=" flex flex-col md:flex-row justify-between w-full">
        <form className=" w-full md:w-2/5 space-y-5 pt-20">
          <h1 className="text-5xl font-semibold text-center">Contattami</h1>
          <div className=" flex flex-col">
            <label htmlFor="userName">Nome</label>
            <input
              className=" py-3 px-2 rounded-lg bg-black-50 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="Inserisci il tuo nome"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userEmail">Email</label>
            <input
              className=" py-3 px-2 rounded-lg bg-black-50 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Inserisci email"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userNumber">Telefono</label>
            <input
              className=" py-3 px-2 rounded-lg bg-black-50 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="Inserisci il tuo numero"
            />
          </div>

          <div className=" flex flex-row justify-center">
            <Button title="Invia" />
          </div>
        </form>

        <div className=" flex flex-row items-center w-full md:w-2/4 my-5">
          <img className=" rounded-md" src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
