import { yupResolver } from "@hookform/resolvers/yup";
import "./App.css";
import Container from "./partials/Container";
import Content from "./partials/Content";
import Menu from "./partials/Menu";
import { FormProvider, useForm } from "react-hook-form";
import { Step1Validation } from "./partials/validations";
import Form from "./partials/Form";
import { useStore } from "./store/useStore";

function App() {
  const { changeStep, step } = useStore();

  const methods = useForm({
    defaultValues: {
      type: "monthly",
      addons: [],
    },
    resolver: yupResolver(Step1Validation),
  });

  const onSubmit = (data: any) => {
    changeStep("thanks");
    console.log(data);
  };

  return (
    <div className="App">
      <Container>
        <FormProvider {...methods}>
          {step !== "dataTable" && <Menu />}
          <Content>
            <Form onSubmit={methods.handleSubmit(onSubmit)} />
          </Content>
        </FormProvider>
      </Container>
    </div>
  );
}

export default App;
