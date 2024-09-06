import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import CustomFormField from '../components/CustomFormField';
import { useNavigate } from 'react-router-dom';

const signUpSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup.string().required("Phone number is required"),
  address: yup.string().required("Address is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required("Confirm password is required"),
  gender: yup.string().oneOf(['m', 'f', 'o'], 'Invalid gender selected').required("Gender is required"),
  dob: yup.string().required("Date of birth is required"),
}).required();

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      gender: "m"
    }
  });

  const handleSubmitForm = () => {
    console.log('form submitted');

  };

  const navigate = useNavigate();

  return (
    <form action="" onSubmit={handleSubmit(handleSubmitForm)}
      className=" min-w-full sm:min-w-[30rem] lg:min-w-[45rem] w-fit space-y-4 px-4 sm:px-10 py-10 rounded-2xl  bg-white shadow-md border-t-2 border-slate-50"
    >

      <div className="text-4xl tracking-wider font-bold text-gray-800 ">Register account</div>
      <div className='grid sm:grid-cols-2 gap-4'>
        <CustomFormField
          {...register("firstName")}
          name='firstName'
          label="First Name"
          type="text"
          placeholder="John"
          errorMessage={errors?.firstName?.message}
        />
        <CustomFormField
          {...register("lastName")}
          name='lastName'
          label="Last Name"
          type="text"
          placeholder="Doe"
          errorMessage={errors?.lastName?.message}
        />
        <CustomFormField
          {...register("email")}
          name="email"
          label="Email"
          type="email"
          errorMessage={errors?.email?.message}
        />
        <CustomFormField
          {...register('phone')}
          name='phone'
          label="Phone"
          type="number"
          placeholder='98000000000'
          errorMessage={errors?.phone?.message}
        />
        <CustomFormField
          {...register("address")}
          name='address'
          label="Address"
          type="text"
          placeholder='Butwal'
          errorMessage={errors?.address?.message}
        />
        <CustomFormField
          {...register("dob")}
          name='dob'
          label="Date of Birth"
          labelColor='black'
          type="date"
          errorMessage={errors.dob?.message}
        />
        <CustomFormField
          {...register("password")}
          name='password'
          label="Password"
          type="password"
          placeholder="*******"
          errorMessage={errors?.password?.message}
        />
        <CustomFormField
          name='confirmPassword'
          label="Confirm Password"
          type="password"
          {...register("confirmPassword")}
          errorMessage={errors?.confirmPassword?.message}
        />


        <div className="flex flex-col gap-y-2">
          <label className="flex text-lg text-black">Gender</label>
          <div className='flex text-black gap-4'>
            <div className='flex items-center gap-2'>
              <input
                type="radio"
                id="male"
                {...register("gender")}
                value="m"
                className='h-4 w-4'
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type="radio"
                id="female"
                {...register("gender")}
                value="f"
                className='h-4 w-4'
              />
              <label htmlFor="female">Female</label>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type="radio"
                id="other"
                {...register("gender")}
                value="o"
                className='h-4 w-4'
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          {errors.gender && <div className="text-red-500">{errors.gender.message}</div>}
        </div>

      </div>
      <Button type="submit" className="bg-blue-500 w-full text-[1rem] hover:bg-blue-600">Register</Button>

      <p className="text-blue-500 text-center">Already have an account ?</p>
      <Button onClick={() => navigate('/login')} type="button" className="bg-green-500 w-full text-[1rem] hover:bg-green-600">Login</Button>

    </form>
  );

};

const Register = () => {
  return (
    <div id='auth' className='min-h-screen px-4 '>
      <div className='flex flex-col  md:mx-auto max-w-[1120px]'>
        <div className="text-2xl font-bold tracking-tight py-4">
          <h1 className='text-white'>Artist Management System</h1>
        </div>
        <div className='flex justify-center pt-10 sm:pt-0'>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default Register;