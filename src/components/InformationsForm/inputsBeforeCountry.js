const dataInputs = [
  {
    id: 1,
    name: "firstname",
    type: "text",
    placeholder: "Firstname",
    errorMessage:
      "Please enter a valid name. Your firstname must contain only letters.",
    label: "Firstame(s)*",
    pattern: "^[a-zA-Z0-9]+$",
  },
  {
    id: 2,
    name: "lastname",
    type: "text",
    placeholder: "Lastname",
    errorMessage:
      "Please enter a valid name. Your lastname must contain only letters.",
    label: "Lastname(s)*",
    pattern: "^[a-zA-Z]+$",
  },
  {
    id: 3,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Please enter a valid email address.",
    label: "Email*",
  },
  {
    id: 4,
    name: "phone",
    type: "tel",
    placeholder: "Phone",
    errorMessage:
      "Please enter a valid phone number. It must contain 9 - 15 digits.",
    label: "Phone*",
    pattern: "[0-9]{9,15}",
  },
];
export default dataInputs;
