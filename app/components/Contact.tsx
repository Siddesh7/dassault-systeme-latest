"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {useSession} from "next-auth/react";
interface formData {
  firstName: string;
  lastName?: string;
  email: string;
  organization: string;
  message: string;
}
const Contact = () => {
  const {data: session} = useSession();
  const [formData, setFormData] = useState<formData>({
    firstName: "",
    lastName: "",
    email: session?.user?.email || "",
    organization: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const sendForm = () => {
    setLoading(true);

    fetch("/api/sheets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [
          formData.firstName,
          formData.lastName,
          formData.email,
          formData.organization,
          formData.message,
        ],
        sheetName: "form-responses",
      }),
    }).then((res) => {
      if (res.status === 200) {
        setLoading(false);
        setFormData((prev) => ({...prev, message: ""}));
      } else {
        alert("Error submitting form");
      }
    });
  };

  useEffect(() => {
    setFormData({...formData, email: session?.user?.email || ""});
  }, [session]);
  return (
    <div
      className="py-[60px] "
      style={{
        background:
          "linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%)",
      }}
    >
      <div className="flex flex-col w-[80%] m-auto py-[60px] md:flex-row gap-12">
        <div className="w-[40vw] absolute opacity-40 top-50 left-[60%] md:top-0 md:left-0 md:opacity-100  md:relative animate-up-down">
          <Image src="/contact-img.svg" alt="" width={500} height={500} />
        </div>
        <div className="w-full lg::w-[50%]">
          <h3 className="text-5xl font-bold">Get in touch!</h3>
          <div className="flex flex-col w-full text-black gap-2 my-6">
            <div className="flex flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="input placeholder-[white] w-full bg-opacity-10 backdrop-blur-xl bg-white/30"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({...formData, firstName: e.target.value})
                }
                required
              />{" "}
              <input
                type="text"
                placeholder="Last Name"
                className="input placeholder-[white] w-full bg-opacity-10 backdrop-blur-xl bg-white/30"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({...formData, lastName: e.target.value})
                }
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="input placeholder-[white] w-full bg-opacity-10 backdrop-blur-xl bg-white/30"
              value={formData.email}
              onChange={(e) =>
                setFormData({...formData, email: e.target.value})
              }
              required
            />{" "}
            <input
              type="text"
              placeholder="Organization or Institution"
              className="input placeholder-[white] w-full bg-opacity-10 backdrop-blur-xl bg-white/30"
              value={formData.organization}
              onChange={(e) =>
                setFormData({...formData, organization: e.target.value})
              }
              required
            />
            <textarea
              className="input placeholder-[white] w-full bg-opacity-10 backdrop-blur-xl bg-white/30 pt-4 min-h-[100px]"
              placeholder="Message or feedback"
              value={formData.message}
              onChange={(e) =>
                setFormData({...formData, message: e.target.value})
              }
              required
            ></textarea>
            <button
              className="btn btn-primary"
              onClick={sendForm}
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-ring loading-lg"></span>
              ) : (
                `Send`
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
