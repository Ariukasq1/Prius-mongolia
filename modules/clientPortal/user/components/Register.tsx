import React, { useState } from "react";
import FormControl from "../../common/form/Control";
import FormGroup from "../../common/form/Group";
import { IButtonMutateProps } from "../../common/types";
import { LOGIN_TYPES } from "../types";

type Props = {
  renderButton: (props: IButtonMutateProps) => JSX.Element;
  hasCompany: boolean;
  formProps: any;
  onRouteChange: (routeType: string) => void;
};

function Register({
  renderButton,
  hasCompany,
  formProps,
  onRouteChange,
}: Props) {
  const [type, changeType] = useState(LOGIN_TYPES.CUSTOMER);

  const onChange = (e) => {
    changeType(e.target.value);
    e.isDefaultPrevented();
  };

  const { values = {} as any, isSubmitted } = formProps || {} as any;

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

      {type === LOGIN_TYPES.CUSTOMER ? (
        <>
          <FormGroup>
            <FormControl
              {...formProps}
              name="lastName"
              placeholder={"Хэрэглэгчийн овог"}
              required={true}
            />
          </FormGroup>

          <FormGroup>
            <FormControl
              {...formProps}
              name="firstName"
              placeholder={"Хэрэглэгчийн нэр"}
              required={true}
            />
          </FormGroup>

          <FormGroup>
            <FormControl
              {...formProps}
              name="phone"
              placeholder={"Хэрэглэгчийн утасны дугаар"}
            />
          </FormGroup>
        </>
      ) : (
        <>
          <FormGroup>
            <FormControl
              {...formProps}
              name="companyName"
              placeholder={"Company name"}
              required={true}
            />
          </FormGroup>

          <FormGroup>
            <FormControl
              {...formProps}
              name="companyRegistrationNumber"
              placeholder={"Company registration number"}
              required={true}
              type="number"
            />
          </FormGroup>
        </>
      )}

      <FormGroup>
        <FormControl
          {...formProps}
          name="email"
          placeholder={"Хэрэглэгчийн и-мэйл хаяг"}
          required={true}
        />
      </FormGroup>

      <FormGroup>
        <FormControl
          {...formProps}
          name="password"
          type="password"
          placeholder={"Нууц үг"}
          required={true}
        />
      </FormGroup>

      <span>
        Хэрэв та бүртгэлтэй бол{" "}
        <a onClick={() => onRouteChange("login")}>ЭНД</a> дарж нэвтэрнэ үү.
      </span>

      <div className="flex flex-center">
        {renderButton({
          values: { ...values, type },
          isSubmitted,
        })}
      </div>
    </>
  );
}

export default Register;
