export const validate = (values) => {
  // we are going to store errors for all fields
  // in a signle array
  const errors = {}
  if (values.fullname.length === 0) {
    errors["fullname"] = "Full name can't be empty"
  }
  if (values.email.length < 5) {
    errors["email"] = "Email should be at least 5 charcters long"
  } else if (values.email.split("").filter((x) => x === "@").length !== 1) {
    errors["email"] = "Email should contain a @"
  } else if (values.email.indexOf(".") === -1) {
    errors["email"] = "Email should contain at least one dot"
  }
  if (values.subject.length === 0) {
    errors["subject"] = "subject can't be empty"
  }

  return errors
}
