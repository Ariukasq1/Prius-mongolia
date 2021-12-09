import React, { useState } from "react";
import FormControl from "../../common/form/Control";
import Form from "../../common/form/Form";
import FormGroup from "../../common/form/Group";
import { IButtonMutateProps } from "../../common/types";
import { LOGIN_TYPES } from "../types";
import Icon from "../../common/Icon";
import { LoginFormWrapper } from "../../styles/form";
import ResetPasswordContainer from "../containers/ResetPassword";
import RegisterContainer from "../containers/Register";

type Props = {
  renderButton: (props: IButtonMutateProps) => JSX.Element;
  hasCompany: boolean;
  infoText?: string;
  title?: string;
};

function Login({ renderButton, hasCompany, infoText, title }: Props) {
  const [loginType, changeType] = useState(LOGIN_TYPES.CUSTOMER);
  const [route, changeRoute] = useState("login");

  const onChange = (e) => {
    changeType(e.target.value);
    e.isDefaultPrevented();
  };

  const onRouteChange = (routeType: string) => {
    changeRoute(routeType);
  };

  const renderComp = () => {
    if (route === "forgotPass") {
      return (
        <>
          <h2>Нууц үг сэргээх</h2>
          <Form
            renderContent={(formProps) => (
              <ResetPasswordContainer formProps={formProps} />
            )}
          />
        </>
      );
    }

    if (route === "register") {
      return (
        <>
          <h2>Бүртгүүлэх</h2>
          <Form
            renderContent={(formProps) => (
              <RegisterContainer
                formProps={formProps}
                onRouteChange={onRouteChange}
              />
            )}
          />
        </>
      );
    }

    return (
      <>
        <h2>{title ? title : "Sign in"}</h2>
        {infoText && (
          <div className="info">
            <Icon icon="info-circle" size={18} /> &nbsp; {infoText}
          </div>
        )}
        <Form renderContent={renderContent} />
      </>
    );
  };

  const renderContent = (formProps) => {
    const { values, isSubmitted } = formProps;

    return (
      <>
        {hasCompany && (
          <FormGroup>
            <FormControl componentClass="select" onChange={onChange}>
              <option value={LOGIN_TYPES.CUSTOMER}>Customer</option>
              <option value={LOGIN_TYPES.COMPANY}>Company</option>
            </FormControl>
          </FormGroup>
        )}

        <FormGroup>
          <FormControl
            {...formProps}
            name="email"
            placeholder="Хэрэглэгчийн имэйл / утасны дугаар"
            required={true}
          />
        </FormGroup>

        <FormGroup>
          <FormControl
            {...formProps}
            name="password"
            type="password"
            placeholder="Хэрэглэгчийн нууц үг"
            required={true}
          />
          <i
            className="forgot-password"
            onClick={() => onRouteChange("forgotPass")}
          >
            Нууц үг мартсан?
          </i>
        </FormGroup>

        <span>
          Хэрэв та бүртгэлгүй бол{" "}
          <a onClick={() => onRouteChange("register")}>ЭНД</a> дарж бүртгүүлнэ
          үү.
        </span>

        <div className="flex flex-center">
          {renderButton({
            values: hasCompany ? { ...values, loginType } : values,
            isSubmitted,
          })}
        </div>
      </>
    );
  };

  return <LoginFormWrapper>{renderComp()}</LoginFormWrapper>;
}

export default Login;
