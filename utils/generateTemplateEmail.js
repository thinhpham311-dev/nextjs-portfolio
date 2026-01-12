import { CONTACT_MESSAGE_EMAIL } from "@/constants"

const msg = CONTACT_MESSAGE_EMAIL

export const generateTemplateEmail = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) => (str += `${msg[key]}: \n${val} \n \n`),
    "",
  )

  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `<li><span class="font-bold">${msg[key]}:</span>${" "}${val}</li>`),
    "",
  )

  return {
    text: stringData,
    html: `
        <!DOCTYPE html>
        <html>
        <head>
        <title>Page Title</title>
        </head>
        <body>
            ${htmlData}
        </body>
        </html>
        `,
  }
}
