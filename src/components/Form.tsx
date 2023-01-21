import { useState } from 'react';
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    setUserFormData(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[500px] text-neutral-900 bg-neutral-100"
      >
        <Title text="Login" />

        <section className="flex flex-col p-8 gap-2">
          <div className="flex justify-between items-center w-full">
            <Input
              labelText="First Name"
              inputID={'firstName'}
              register={register}
              errors={errors}
            />

            <Input
              labelText="Last Name"
              inputID={'lastName'}
              register={register}
              errors={errors}
            />
          </div>

          <Input
            labelText="Email"
            inputID={'email'}
            register={register}
            errors={errors}
          />

          <Input
            labelText="Password"
            inputID={'password'}
            register={register}
            errors={errors}
          />

          <Input
            labelText="Confirm Password"
            inputID={'confirmPassword'}
            register={register}
            errors={errors}
          />

          <ButtonSubmit />
        </section>
      </form>

      {isSubmitSuccessful ? <SubmitSuccess /> : <></>}
    </>
  );
}
