import { gql, useMutation } from "@apollo/client";
import React from "react";
import ResetPassword from "../components/ResetPassword";
import mutations from "../graphql/mutations";
import { IButtonMutateProps } from "../../common/types";
import ButtonMutate from "../../common/ButtonMutate";

function ResetPasswordContainer(formProps) {
  const [getVerificationCode] = useMutation(gql(mutations.getCode));

  const handleCode = (phone: string) => {
    getVerificationCode({
      variables: { phone },
    }).then((data) => {
      console.log("sent verification code");
    });
  };

  const renderButton = ({ values, isSubmitted }: IButtonMutateProps) => {
    const callbackResponse = () => (window.location.href = "/");

    return (
      <ButtonMutate
        mutation={mutations.resetPassword}
        variables={values}
        callback={callbackResponse}
        isSubmitted={isSubmitted}
        type="submit"
        btnStyle="warning"
        successMessage="Амжилттай илгээлээ"
        icon={false}
      >
        Нууц үг сэргээх
      </ButtonMutate>
    );
  };

  const updatedProps = {
    formProps,
    handleCode,
    renderButton,
  };

  return <ResetPassword {...updatedProps} />;
}

export default ResetPasswordContainer;
