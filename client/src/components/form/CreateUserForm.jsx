import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '../ui/button'; 
import CustomFormField from '../CustomFormField';


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
  role: yup.string().required()
  // ('super_admin', 'artist_manager', "artist")
}).required();


const CreateUserForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      gender: "m"
    }
  });

  const submitForm = async (data) => {
    console.log(data);

  };

  return (

    <form onSubmit={handleSubmit(submitForm)}>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
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

        <div className='space-y-1'>
          <label className="text-sm font-normal">Role</label>
          <Select className="rounded-2xl text-sm">
            <SelectTrigger>
              <SelectValue placeholder="Select a role" className='text-lg' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="super_admin">Super Admin</SelectItem>
              <SelectItem value="artist_manager">Artist Manager</SelectItem>
              <SelectItem value="artist">Artist</SelectItem>
            </SelectContent>
          </Select>
        </div>

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
        </div>
      </div>

      <div className='flex space-x-2 pt-10'>
        <Button type="submit" className="bg-blue-500 hover:bg-blue-600">Create User</Button>
        <Button className="bg-red-500 hover:bg-red-600">Cancel</Button>
      </div>
    </form>
  );
};

export default CreateUserForm;