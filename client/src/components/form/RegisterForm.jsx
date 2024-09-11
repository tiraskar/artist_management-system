import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import CustomFormField from '../CustomFormField';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { registerUser } from '@/redux/slices/authSlice';

const signUpSchema = yup.object({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  phone: yup.string().required("Phone number is required").matches(/^[0-9]{10,}$/, "Phone number must be at least 10 digits"),
  address: yup.string().required("Address is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required("Confirm password is required"),
  gender: yup.string().oneOf(['m', 'f', 'o'], 'Invalid gender selected').required("Gender is required"),
  dob: yup.string().required("Date of birth is required"),
}).required();


const RegisterForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      gender: "m"
    }
  });

  const handleSubmitForm = async (data) => {
    const { confirmPassword, ...rest } = data;
    dispatch(registerUser(rest));
  };

  return (
    <form action="" onSubmit={handleSubmit(handleSubmitForm)}
      className=" min-w-full sm:min-w-[30rem] lg:min-w-[45rem] w-fit space-y-4 px-4 sm:px-10 py-10 rounded-2xl  bg-white shadow-md border-t-2 border-slate-50"
    >

      <div className=" text-3xl md:text-4xl tracking-wider font-bold text-gray-800 ">Register account</div>
      <div className='grid sm:grid-cols-2 gap-4'>
        <CustomFormField
          {...register("first_name")}
          name='first_name'
          label="First Name"
          type="text"
          placeholder="John"
          errorMessage={errors?.firstName?.message}
        />
        <CustomFormField
          {...register("last_name")}
          name='last_name'
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
          {...register("confirmPassword")}
          name='confirmPassword'
          label="Confirm Password"
          type="password"
          placeholder="*******"
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

export default RegisterForm;