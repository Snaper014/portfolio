"use client";
import React, { useState } from "react";
import { DiGithubBadge } from "react-icons/di";
import { AiOutlineMail } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RxCrossCircled, RxCross1 } from "react-icons/rx";

function Contact() {
  const [message, setmessage] = useState(false);
  const [notification, setnotification] = useState({
    display: false,
    sucess: false,
    error: false,
  });
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    textarea: "",
  });
  const handleParam = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch(`${process.env.NEXT_PUBLIC_HOST}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
          if(response.redirected === false){
            setnotification({ display: true, sucess: false, error: true });
          }
          else{
            setQuery({ name: "", email: "", phone: "", textarea: "" });
            setnotification({ display: true, sucess: true, error: false });
          }
      })
      .catch((error) => {
        console.log(error);
        setnotification({ display: true, sucess: false, error: true });
      });
  };

  return (
    <section id="Contact" className="w-full mb-14 flex flex-col items-center">
      <h1 className="text-[#10BD99] text-[48px] text-[700] self-center mb-4">
        Contact
      </h1>
      <div className="flex flex-grow flex-nowrap gap-2 mb-4 max-md:gap-10">
        <a
          href="https://github.com/Snaper014"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link towards website github"
        >
          <DiGithubBadge color="black" fontSize={40} />
        </a>
        <CopyToClipboard text="nelson.vico@gmail.com">
          <button
            onClick={() => setmessage(true)}
            className="flex flex-row gap-1"
            aria-label="Copy email"
          >
            <AiOutlineMail fontSize={40} />
          </button>
        </CopyToClipboard>
      </div>
      {message ? (
        <span className="mb-8 text-[#10BD99] font-[700] tracking-wide">
          L'email a été copier avec succès.
        </span>
      ) : null}
      <div className="mb-8 text-xl">OU</div>
      <form
        onSubmit={formSubmit}
        className="w-[500px] max-md:w-full max-md:justify-center max-md:items-center flex flex-col gap-4"
      >
        <label className="max-md:self-start max-md:px-2 text-[1.4em] text-[700]">Nom :</label>
        <input
          type="text"
          name="name"
          required
          value={query.name}
          onChange={(e) => handleParam(e)}
          className="rounded-sm max-md:px-2 h-[48px] w-[500px] max-md:w-[97%]"
          placeholder="Veuillez entrez votre nom"
        />
        <label className="max-md:self-start max-md:px-2 px-text-[700] text-[1.4em]">
          email :
        </label>
        <input
          type="email"
          name="email"
          required
          value={query.email}
          onChange={(e) => handleParam(e)}
          className="rounded-sm h-[48px] w-[500px] max-md:w-[97%]"
          placeholder="Veuillez entrez votre email"
        />
        <label className="max-md:self-start max-md:px-2 text-[700] text-[1.4em]">
          téléphone (optionnel) :
        </label>
        <input
          type="tel"
          name="phone"
          value={query.phone}
          onChange={(e) => handleParam(e)}
          className="rounded-sm h-[48px] w-[500px] max-md:w-[97%]"
          placeholder="Veuillez entrez votre numéro de téléphone"
        />
        <label className="max-md:self-start max-md:px-2 text-[700] text-[1.4em]">message: </label>
        <textarea
          type="text"
          name="textarea"
          required
          value={query.textarea}
          onChange={(e) => handleParam(e)}
          className="rounded-sm h-[150px] w-[500px] mb-3 max-md:w-[97%]"
          minLength="1"
          maxLength="700"
          placeholder="Veuillez entrez votre message"
        />
        <button
          type="submit"
          name="submit"
          aria-label="submit form"
          className="self-center bg-[#10BD99] text-[#F8F8F8] rounded-[40px] w-[120px] h-[50px]"
        >
          Envoyer
        </button>
      </form>
      {notification.display ? (
        <>
          <div className="fixed z-50 left-0 top-0 right-0 bottom-0 h-full w-full bg-transparent flex items-center justify-center">
            <div className="w-[350px] rounded-lg shadow-sm h-[250px] max-sm:w-full bg-white grid grid-rows-[15%_85%]">
              <div className="flex items-center justify-end">
                <RxCross1
                  onClick={() =>
                    setnotification({
                      display: false,
                      sucess: false,
                      error: false,
                    })
                  }
                  className="flex self-end p-2 cursor-pointer"
                  color="black"
                  fontSize={40}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                {notification.sucess ? (
                  <AiOutlineCheckCircle color="#38c9c6 " fontSize={35} />
                ) : (
                  <RxCrossCircled color="#E13232" fontSize={35} />
                )}
                <p className="w-full text-center mb-4">
                  {notification.sucess
                    ? "Vos informations on bien été envoyées"
                    : "Une erreur s'est produit lors de l'envoie des vos informations, veuillez essayez ultérieument."}
                </p>
                <button
                  aria-label="confirmation"
                  onClick={() =>
                    setnotification({
                      display: false,
                      sucess: false,
                      error: false,
                    })
                  }
                  className={`text-white 
                  ${notification.sucess ? "bg-[#10BD99]" : "bg-[#E13232]"}
                   rounded-md p-1 w-24`}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-background"></div>
        </>
      ) : null}
    </section>
  );
}

export default Contact;
