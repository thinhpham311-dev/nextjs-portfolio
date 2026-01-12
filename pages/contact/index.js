import { useState } from "react"

//components
import MetaData from "@/components/MetaData"
import { Input, InputArea } from "@/components/Input"
import Button from "@/components/Button"
import Message from "@/components/Message"

//icons
import { BsSendFill } from "react-icons/bs"

//animation
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

import { sendContactForm, validate } from "../../utils"

const initialFields = {
  fullname: "",
  subject: "",
  email: "",
  note: "",
}

const Contact = () => {
  const [setting, setSetting] = useState({ loading: false, error: "", status: "" })
  const [inputFields, setInputFields] = useState(initialFields)
  const [validates, setValidates] = useState([])

  const inputChangeHandler = (event) => {
    const { name, value } = event.target
    setInputFields({ ...inputFields, [name]: value })
    setValidates({ ...validates, [name]: "" })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validateErrors = validate(inputFields)
    if (Object.keys(validateErrors).length > 0) {
      setValidates(validateErrors)
      return
    }
    try {
      await sendContactForm(inputFields)
      setSetting({ loading: true, status: "success", error: "Send to successfully" })
    } catch (error) {
      setSetting({ loading: false, status: "error", error: error.message })
    } finally {
      setTimeout(() => {
        setSetting({ loading: false, status: "", error: "" })
      }, 1000)
    }
  }

  const { loading, error, status } = setting

  return (
    <>
      <MetaData
        title="My Portfolio | Contact"
        description="Reach out to Thinh Pham for collaboration, project inquiries, or professional connections in web development."
      />
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="flex w-[90%] flex-col justify-center rounded-lg bg-[rgba(65,47,123,0.15)] px-10 py-10 xl:w-[30%]">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-1 text-center"
          >
            Contact
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-5 text-center text-white/60"
          >
            Thank you for giving me your information
          </motion.p>
          {error && error !== "" ? <Message msgStatus={`bg-${status}`}>{error}</Message> : <></>}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="relative mb-5">
              <Input
                type="text"
                label="Fullname*"
                value={inputFields.fullname}
                placeholder="Enter Fullname"
                inputChangeHandler={inputChangeHandler}
                name="fullname"
              />
              {validates && (
                <p className="absolute -bottom-5 left-0 text-sm text-accent">
                  {validates.fullname}
                </p>
              )}
            </div>
            <div className="relative mb-5">
              <Input
                type="text"
                label="Subject*"
                value={inputFields.subject}
                placeholder="Enter Subject"
                inputChangeHandler={inputChangeHandler}
                name="subject"
              />
              {validates && (
                <p className="absolute -bottom-5 left-0 text-sm text-accent">{validates.subject}</p>
              )}
            </div>
            <div className="relative mb-5">
              <Input
                type="text"
                label="Email*"
                value={inputFields.email}
                placeholder="Enter Email"
                inputChangeHandler={inputChangeHandler}
                name="email"
              />
              {validates && (
                <p className="absolute -bottom-5 left-0 text-sm text-accent">{validates.email}</p>
              )}
            </div>
            <div className="mb-5">
              <InputArea
                label="Note"
                value={inputFields.note}
                placeholder="Enter Note"
                inputChangeHandler={inputChangeHandler}
                name="note"
              />
            </div>
            <div className="mb-5 w-full">
              <Button
                type="submit"
                isDisabled={loading}
                isLoading={loading}
                className={"w-full"}
                variant="default"
              >
                {" "}
                Send <BsSendFill className="ml-2" />
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  )
}

export default Contact
