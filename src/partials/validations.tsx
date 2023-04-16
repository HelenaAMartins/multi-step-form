import * as yup from "yup";

export const Validate = (
  schema: yup.Schema,
  values: any,
  setError: Function,
  callback: () => void
) => {
  schema
    .validate(values, { abortEarly: false })
    .then(() => {
      return callback();
    })
    .catch((err: { inner: yup.ValidationError[] }) => {
      return err?.inner?.forEach((error) => {
        setError(error.path, { message: `${error.message}` });
      });
    });
};

export const Step1Validation = yup.object({
  name: yup.string().required("Required field"),
  email: yup
    .string()
    .email("Email should be a valid email")
    .required("Required field"),
  phone: yup.string().required("Required field"),
});

export const Step2Validation = yup.object({
  plan: yup.object({
    title: yup.string().required("Please, choose a plan."),
  }),
});

export const Step3Validation = yup.object({});
export const Step4Validation = yup.object({});
