import React, { useState } from "react";
import FormControl from "../../common/form/Control";
import FormGroup from "../../common/form/Group";
import { IButtonMutateProps } from "../../common/types";

type Props = {
  handleCode: (phone: string) => void;
  renderButton: (props: IButtonMutateProps) => JSX.Element;
  formProps: any;
};

function ResetPassword({ renderButton, handleCode, formProps }: Props) {
  const [phone, changePhone] = useState("");

  const onChange = (e) => {
    changePhone(e.target.value);
    e.isDefaultPrevented();
  };

  const { values, isSubmitted } = formProps;

  return (
    <>
      <FormGroup>
        <FormControl
          {...formProps}
          name="phone"
          placeholder={"Утас"}
          onChange={onChange}
        />
      </FormGroup>

      <FormGroup>
        <FormControl
          {...formProps}
          name="code"
          type="code"
          placeholder="Код"
          required={true}
        />
      </FormGroup>

      <FormGroup>
        <FormControl
          {...formProps}
          name="password"
          type="password"
          placeholder={"Шинэ нууц үг"}
          required={true}
        />
      </FormGroup>

      <div className="flex flex-center">
        {renderButton({
          values,
          isSubmitted,
        })}
      </div>
    </>
  );
}

export default ResetPassword;
