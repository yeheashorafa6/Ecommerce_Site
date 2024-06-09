"use client"
import Image from "next/image";
import { FaPhone  , FaWhatsapp , FaArrowRightLong} from "react-icons/fa6";
import { useState } from "react";
// export const metadata = {
//   title: "Contact Us",
//   description: "Ecommerce Site Contact Us Page",
// };
function ContactUsPage() {
  const [result, setResult] = useState("");

  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    message: "",
  });

  const misInput =
    formInput.username == "" ||
    formInput.email == "" ||
    formInput.message == "";

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.ACCESS_KEY);

    if (!misInput) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("SomeThing Error ! Try Agine ...");
      event.target.reset();
      // result.target.value.reset();
    // setResult(" ");

    }
    
  };
  return (
    <section className="relative flex flex-wrap lg:items-center">
      <div className="w-full px-4 py-8 sm:px-6 sm:py-8 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl text-primary">Sens Us A Message</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form onSubmit={onSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
                value={formInput.email}
                onChange={(event) => {
                  setFormInput({ ...formInput, email: event.target.value });
                }}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="username" className="sr-only">
              User Name
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter username"
                value={formInput.username}
                onChange={(event) => {
                  setFormInput({ ...formInput, username: event.target.value });
                }}
              />
            </div>
          </div>
          <div>
            <label htmlFor="username" className="sr-only">
              User Name
            </label>

            <div className="relative">
              <textarea
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Subject"
                value={formInput.message}
                onChange={(event) => {
                  setFormInput({ ...formInput, message: event.target.value });
                }}
              ></textarea>
            </div>
          </div>
          <button type="submit" className="flex bg-teal-500 text-white p-3 text-md rounded-lg">
          Submit Now
          <span className="mt-1 mx-2 hover:mx-5 transition-all duration-500"><FaArrowRightLong/></span>
          </button>
        </form>
        <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <span className={misInput ? "text-red-600" : "text-green-600"}>{result}</span>
          </div>
        <div className="text-center my-8">
          <h1 className="text-lg text-primary">Our You Can Contact Us With</h1>
        </div>
        <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <h2 className="flex  text-gray-400"><span className="tx-[18px] mt-1 mx-4 text-black"><FaPhone/></span>: +1 234 567 89</h2>
          <h2 className="flex text-gray-400"><span className="tx-[18px] mt-1 mx-4 text-black"><FaWhatsapp/></span>: +972569353191</h2>
        </div>
      </div>

      <div className="relative   w-full sm:h-96 lg:h-full lg:w-1/2">
        <Image
          alt="contact"
          height={200}
          width={250}
          src={"/contact.png"}
          className="w-full h-["
        />
      </div>
    </section>
  );
}

export default ContactUsPage;
