//write the discription of functions here
//example description

const functionDescription = [
  {
    name: "getUsersAi",
    description:
      "Get Applicant's details score in interview, email, name, phoneNo., Disclamer: don't send password",
  },
  {
    name: "email",
    description:
      "takes emails from database of applicants and sends the email to the asked applicant",
    parameters: {
      type: "object",
      properties: {
        subject: {
          type: "string",
          description: "subject of the email",
        },
        emailAddress: {
          type: "string",
          description:
            "get email from getUsersAi function (be specific no examples)",
        },

        Body: {
          type: "string",
          description:
            "body of the email that user wants to write and enhace the body, add your content too.",
        },
      },
    },
    required: ["Body", "email", "subject"],
  },
  {
    name: "getAllVacancies",
    description:
      "Search for vacancies which are open for applicants note don't send application id. Unit of Expected Salary: is Rs ",
  },
  // {
  //   name: "docVacancy",
  //   description:
  //     "this function is called to find relevant jobs for when document is sent",
  // },
  // {
  //   name : "findRelevantJob",
  //   description: "Search for vacancies then resend relevent vancancy when asked ",
  //   type : "object",
  //   properties: {
  //       title: {
  //         type: "String",
  //         description: "Title is required",
  //       },
  //       description: {
  //         type: "String",
  //         description: "Description is required",
  //       },
  //       requirements: {
  //         type: [String],
  //         required: [true, "Requirements are required"],
  //       },
  //       responsibilities: {
  //         type: [String],
  //         required: [true, "Responsibilities are required"],
  //       },
  //       location: {
  //         type: String,
  //         required: [true, "Location is required"],
  //       },
  //       expectedSalary: {
  //         minSalary: {
  //           type: Number,
  //           required: [true, "Minimum salary is required"],
  //         },
  //         maxSalary: {
  //           type: Number,
  //           required: [true, "Maximum salary is required"],
  //         },
  //       },
  //       benefits: {
  //         type: [String],
  //       },
  //       skillsRequired: {
  //         type: [String],
  //         required: [true, "Skills required are required"],
  //       },
  //       // Reference to the CompanySchema
  //       company: {
  //         type: Schema.Types.ObjectId,
  //         ref: "Company",
  //         required: [true, "Company is required"],
  //       },
  //       status: {
  //         type: String,
  //         enum: ["open", "closed"],
  //         default: "open",
  //       },
  //       numberOfVacanciesAvailable: {
  //         type: Number,
  //         required: [true, "Number of vacancies available is required"],
  //       }
    
  
];

export { functionDescription };
