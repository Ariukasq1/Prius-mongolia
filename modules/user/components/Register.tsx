import React, { useState } from 'react';
import { LoginFormWrapper } from '../../styles/form';
import FormControl from '../../common/form/Control';
import Form from '../../common/form/Form';
import FormGroup from '../../common/form/Group';
import Button from '../../common/Button';
import { IButtonMutateProps } from '../../common/types';
import { LOGIN_TYPES } from '../types';

type Props = {
  renderButton: (props: IButtonMutateProps) => JSX.Element;
  hasCompany: boolean;
};

function Register({ renderButton, hasCompany }: Props) {
  const [type, changeType] = useState(LOGIN_TYPES.CUSTOMER);

  const onChange = e => {
    changeType(e.target.value);
    e.isDefaultPrevented();
  };

  const renderContent = formProps => {
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

        {type === LOGIN_TYPES.CUSTOMER ? (
          <>
            <FormGroup>
              <FormControl
                {...formProps}
                name="firstName"
                placeholder={'First name'}
                required={true}
              />
            </FormGroup>

            <FormGroup>
              <FormControl
                {...formProps}
                name="lastName"
                placeholder={'Last name'}
                required={true}
              />
            </FormGroup>

            <FormGroup>
              <FormControl {...formProps} name="phone" placeholder={'Phone'} />
            </FormGroup>
          </>
        ) : (
          <>
            <FormGroup>
              <FormControl
                {...formProps}
                name="companyName"
                placeholder={'Company name'}
                required={true}
              />
            </FormGroup>

            <FormGroup>
              <FormControl
                {...formProps}
                name="companyRegistrationNumber"
                placeholder={'Company registration number'}
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
            placeholder={'registered@email.com'}
            required={true}
          />
        </FormGroup>

        <FormGroup>
          <FormControl
            {...formProps}
            name="password"
            type="password"
            placeholder={'password'}
            required={true}
          />
        </FormGroup>

        <FormGroup>
          <Button href="/">Home</Button>

          {renderButton({
            values: { ...values, type },
            isSubmitted
          })}
        </FormGroup>
      </>
    );
  };

  return (
    <LoginFormWrapper>
      <h2>{'Register'}</h2>
      <Form renderContent={renderContent} />
    </LoginFormWrapper>
  );
}

export default Register;
