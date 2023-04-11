import * as yup from "yup";

export const Validate = (
  schema: any,
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
      err?.inner?.forEach((error) => {
        setError(error.path, { message: `${error.message}` });
      });
    });
};

export const Step1Validation = yup.object({
  name: yup.string().required("Required field"),
  email: yup.string().required("Required field"),
  phoneNumber: yup.string().required("Required field"),
});
