import nodemailer from "nodemailer"
import { EMAIL, EMAIL_PASS } from "@/constants"

const email = EMAIL
const pass = EMAIL_PASS

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
})

export const mailOptions = (data) => {
  return {
    from: data,
    to: email,
  }
}
