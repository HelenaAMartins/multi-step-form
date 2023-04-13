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
      console.log(values);
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
  email: yup.string().required("Required field"),
  phoneNumber: yup.string().required("Required field"),
});

export const Step2Validation = yup.object({
  plan: yup.object({
    title: yup.string().required("Please, choose a plan."),
  }),
});

export const Step3Validation = yup.object({});
