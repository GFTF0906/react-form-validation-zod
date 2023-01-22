import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Title from './Title';
import SubmitSuccess from './SubmitSuccess';
import ButtonSubmit from './ButtonSubmit';
import Input from './Input';

import { FormSchemaType, FormSchema } from '../types/FormSchema';

export default function Form() {
  const [userFormData, setUserFormData] = useState<FormSchemaType>(
    {} as FormSchemaType
  );
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    if (isSubmitSuccessful) {
      setIsPopUpVisible((prevState) => !prevState);
      setUserFormData(data);
      reset();
    }

    setTimeout(() => {
      setIsPopUpVisible(false);
    }, 5000);
  };

  return (
    <>
      {isPopUpVisible && (
        <h2 className="text-2xl text-center font-bold mb-6">
          Hello {userFormData.firstName} {userFormData.lastName}!
        </h2>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full text-neutral-900 bg-neutral-100 sm:w-[500px]"
      >
        <Title text="Form Validation" />

        <section className="flex flex-col p-8 gap-2">
          <div className="flex justify-center items-center flex-col w-full sm:justify-between sm:flex-row">
            <Input
              labelText="First Name"
              inputType="text"
              inputID={'firstName'}
              register={register}
              errors={errors}
            />

            <Input
              labelText="Last Name"
              inputType="text"
              inputID={'lastName'}
              register={register}
              errors={errors}
            />
          </div>

          <Input
            labelText="Email"
            inputType="email"
            inputID={'email'}
            register={register}
            errors={errors}
          />

          <Input
            labelText="Password"
            inputType="password"
            inputID={'password'}
            register={register}
            errors={errors}
          />

          <Input
            labelText="Confirm Password"
            inputType="password"
            inputID={'confirmPassword'}
            register={register}
            errors={errors}
          />

          <ButtonSubmit />
        </section>
      </form>

      {isPopUpVisible ? <SubmitSuccess /> : <></>}
    </>
  );
}
