import ErrorMessage from './ErrorMessage';

type ErrorsKeys =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'password'
  | 'confirmPassword';

export type TIndexable<T, U> = { [key in U as string]: T };

type InputProps = {
  labelText: string;
  inputType: 'text' | 'email' | 'password';
  inputID: string;
  register: CallableFunction;
  errors: TIndexable<{ message?: string }, ErrorsKeys>;
};

export default function Input({
  labelText,
  inputType,
  inputID,
  register,
  errors,
}: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={inputID} className="capitalize">
        {labelText}
      </label>
      <input type={inputType} id={inputID} {...register(inputID)} />
      <ErrorMessage message={errors[inputID]?.message ?? ''} />
    </div>
  );
}
