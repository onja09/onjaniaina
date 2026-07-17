import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function Message() {
  // validation
  const initial = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
    list_error: [],
  };

  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleInputChange = (e) => {
    if (e.target.value) {
      e.target.classList.add("input-val");
    } else {
      e.target.classList.remove("input-val");
    }
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "! Entrer votre nom";
    if (!form.reply_to) {
      newErrors.reply_to = "! Entrer votre email";
    } else if (!email_pattern.test(form.reply_to)) {
      newErrors.reply_to = "! Entrer un email valide";
    }

    if (!form.message) newErrors.message = "! Entrer votre message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // send
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setMessage(null);

    emailjs
      .sendForm(
        "service_oqj7vi4",
        "template_z6om8ef",
        e.target,
        "rpo5AhVLJIIO-KoPR",
      )
      .then(() => {
        setMessage({ type: "success", text: "Message envoyé avec succès !" });
        setTimeout(() => {
          setMessage("");
        }, 5000);
        e.target.reset();
      })
      .catch((err) => {
        setMessage({ type: "error", text: "Erreur lors de l'envoi." });
        setTimeout(() => {
          setMessage("");
        }, 5000);
        // console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div id="contact" className="w-full">
      <div className="Hero1 h-[80vh] w-full flex items-center justify-center">
        <div className="max-w-[300px]">
          <h1 className="text-4xl text-white font-bold">Contactez-moi</h1>
        </div>
      </div>
      <div className="blocsend xs:py-14 md:py-24 px-6">
        <h2 className="afterTitle1 text-4xl text-center text-blue-400">
          Formulaire de <span className="text-slate-800">contact</span>
        </h2>
        <div className="send mx-auto">
          {message ? (
            <div className={message.type === "success" ? "success" : "error"}>
              {message.text}
            </div>
          ) : (
            <div className="w-full h-12 py-1"></div>
          )}
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              {errors.name && (
                <p className="text-red-400 mb-2">{errors.name}</p>
              )}
              <div className="champ">
                <input
                  className="thisinput"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                />
                <span>Votre nom</span>
              </div>
              {errors.reply_to && (
                <p className="text-red-400 mb-2">{errors.reply_to}</p>
              )}
              <div className="champ">
                <input
                  className="thisinput"
                  type="email"
                  name="reply_to"
                  value={form.reply_to}
                  onChange={handleInputChange}
                />
                <span>Votre email</span>
              </div>
              {errors.message && (
                <p className="text-red-400 mb-2">{errors.message}</p>
              )}
              <div className="champtext">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                ></textarea>
                <span>Votre message</span>
              </div>
              {loading && <div className="loader"></div>}
              <button
                type="submit"
                disabled={loading && "disabled"}
                id="submit-btn"
              >
                Envoyer
              </button>
            </form>
          </div>
          <ul className="list-contacter flex items-center justify-center mt-8 gap-4 text-base text-slate-600 font-semibold overflow-hidden">
            <li>
              <div className="text-base text-slate-800">
                <a
                  href="tel:034 85 897 35"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-3 border-r-2 border-r-slate-900 pr-6">
                    <div className="p-[10px] border-4 border-blue-500 rounded-full bg-blue-500 cursor-pointer envelop">
                      <FaPhone
                        href="tel:034 85 897 35"
                        className="fa_envelop w-[20px] h-[20px] text-white"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="text-base text-slate-800">
                <a
                  href="mailto:onjalahe@gmail.com"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-3 border-l-2 border-l-slate-900 pl-6">
                    <div className="p-[10px] border-4 border-blue-500 rounded-full bg-blue-500 cursor-pointer envelop">
                      <FaEnvelope
                        href="mailto:onjalahe@gmail.com"
                        className="fa_envelop w-[20px] h-[20px] text-white"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Message;
