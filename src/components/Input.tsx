import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

type TInputProps = {
  labelText: string;
  register: UseFormRegister<{
    firstName: string;
    email: string;
    password: string;
    lastName: string;
    confirmPassword: string;
  }>;
  errors: Partial<
    FieldErrorsImpl<{
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      confirmPassword: string;
    }>
  >;
};

export default function Input({ labelText, register, errors }: TInputProps) {
  const str = labelText.split('');

  console.log(str);

  return (
    <div className="flex flex-col">
      <label htmlFor="firstName" className="capitalize">
        {str}
      </label>
      <input type="text" id="firstName" {...register('firstName')} />
      <p className="error">{errors?.firstName?.message}</p>
    </div>
  );
}
