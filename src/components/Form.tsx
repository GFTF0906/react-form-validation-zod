import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Title from './Title';

const ValidationSchema = z
  .object({
    firstName: z.string().min(1, 'First Name is required.'),
    lastName: z.string().min(1, 'Last Name is required.'),
    email: z
      .string()
      .min(1, 'Email is required.')
      .email('Need to be a valid email.'),
    password: z.string().min(1, 'Password is required.'),
    confirmPassword: z.string().min(1, 'Confirm Password is required.'),
  })
  .refine((data) => data.confirmPassword === data.password, {
    path: ['confirmPassword'],
    message: "Passwords don't match.",
  });

type ValidationSchemaType = z.infer<typeof ValidationSchema>;

export default function Form() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(ValidationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchemaType> = (data) => {
    console.log(data);
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
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" {...register('firstName')} />
              <p className="error">{errors.firstName?.message}</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" {...register('lastName')} />
              <p className="error">{errors.lastName?.message}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input id="email" {...register('email')} />
            <p className="error">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register('password')} />
            <p className="error">{errors.password?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword')}
            />
            <p className="error">{errors.confirmPassword?.message}</p>
          </div>
          <button className="w-full mt-4 text-neutral-100 bg-neutral-700 hover:bg-neutral-600">
            Submit
          </button>
        </section>
      </form>

      {isSubmitSuccessful ? (
        <>
          <div className="absolute right-4 bottom-8 flex items-center justify-center p-4 rounded rounded-r-none text-neutral-700 bg-neutral-100">
            Submit Successful!
          </div>
          <div className="absolute right-0 bottom-8 w-4 h-[3.55rem] bg-neutral-600"></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
