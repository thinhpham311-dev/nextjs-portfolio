import { transporter, mailOptions } from "../../config/nodemailer"
import { generateTemplateEmail } from "../../utils"

const handler = async (req, res) => {
  if ((req.method = "POST")) {
    const data = req.body
    try {
      await transporter.sendMail({
        subject: data.subject,
        ...mailOptions(data.email),
        ...generateTemplateEmail(data),
      })
      return res.status(200).json({ success: true })
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
  return res.status(400).json({ message: "Bad Request" })
}

export default handler
