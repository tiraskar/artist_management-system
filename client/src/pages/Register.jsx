import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import CustomFormField from '../components/CustomFormField';
import { useNavigate } from 'react-router-dom';

const signUpSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phone: yup.number().required(),
  address: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  gender: yup.string().required(),
  dob: yup.string().required()

}).required();

const SignUpForm = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(signUpSchema)
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
          name='firstName'
          label="First Name"
          labelColor='black'
          type="text"
          control={register("firstName")}
          placeholder="John"
          className=""
        />
        <CustomFormField
          name='lastName'
          label="Last Name"
          labelColor='black'
          type="text"
          control={register("lastName")}
          placeholder="Doe"
          className=""
        />
        <CustomFormField
          name='email'
          label="Email"
          labelColor='black'
          type="email"
          control={register("email")}
          placeholder="example@example.com"
          className=""
        />
        <CustomFormField
          name='phone'
          label="Phone"
          labelColor='black'
          type="number"
          control={register('phone')}
          placeholder='98000000000'
        />
        <CustomFormField
          name='address'
          label="Address"
          labelColor='black'
          type="text"
          control={register("address")}
          placeholder='Butwal'

        />
        <CustomFormField
          name='dob'
          label="Date of Birth"
          labelColor='black'
          type="date"
        />
        <CustomFormField
          name='password'
          label="Password"
          labelColor='black'
          type="password"
          control={register("password")}
          className=""
        />
        <CustomFormField
          name='confirmPassword'
          label="Confirm Password"
          labelColor='black'
          type="password"
          control={register("confirmPassword")}
          className=""
        />

        <div className="flex flex-col gap-y-2">
          <label className={`flex text-lg text-black`}>
            Gender
          </label>
          <div className='flex text-black gap-4 '>
            <div className='flex items-center gap-2'>
              <input type="radio"
                name='male'
                value='male'
                className='h-4 w-4'
              />
              <label htmlFor="">Male</label>
            </div>
            <div className='flex items-center gap-2'>
              <input type="radio"
                name='female'
                value='female'
                className='h-4 w-4'
              />
              <label htmlFor="">Female</label>
            </div>
            <div className='flex items-center gap-2'>
              <input type="radio"
                name='other'
                value='other'
                className='h-4 w-4'
              />
              <label htmlFor="">Other</label>
            </div>
          </div>

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