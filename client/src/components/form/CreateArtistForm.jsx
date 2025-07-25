import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import CustomFormField from '../CustomFormField';
import { useDispatch, useSelector } from 'react-redux';
import { createArtist } from '@/redux/slices/artistSlice';
import { useEffect } from 'react';

const artistSchema = yup.object({
  name: yup.string().required('Full name is required'),
  address: yup.string().required('Address is required'),
  dob: yup.string().required('Date of birth is required'),
  gender: yup.string().oneOf(['m', 'f', 'o'], 'Invalid gender selected').required('Gender is required'),
  no_of_albums_released: yup.number().notRequired(),
  first_release_year: yup.number().notRequired(),
})

const CreateArtistForm = () => {
  const dispatch = useDispatch();
  const { loading, isArtistSaved } = useSelector(state => state.artist);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(artistSchema),
    defaultValues: {
      gender: 'm',
    },
    mode: "onSubmit"
  });


  const submitForm = async (data) => {
    dispatch(createArtist(data));
  };

  const handleCancel = () => {
    reset();
  };

  useEffect(() => {
    if (isArtistSaved) {
      handleCancel();
    }
  }, [isArtistSaved])



  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
        <CustomFormField
          {...register('name')}
          name='name'
          label='Full Name'
          type='text'
          placeholder='John Doe'
          errorMessage={errors?.name?.message}
        />

        <CustomFormField
          {...register('address')}
          name='address'
          label='Address'
          type='text'
          placeholder='Butwal'
          errorMessage={errors?.address?.message}
        />

        <CustomFormField
          {...register('dob')}
          name='dob'
          label='Date of Birth'
          labelColor='black'
          type='date'
          errorMessage={errors.dob?.message}
        />

        <CustomFormField
          {...register('first_release_year')}
          name='first_release_year'
          label='First release year'
          labelColor='black'
          type='number'
          min={0}
        />

        <CustomFormField
          {...register('no_of_albums_released')}
          name='no_of_albums_released'
          label='No of Albums released'
          labelColor='black'
          type='number'
          min={0}
        />

        <div className='flex flex-col gap-y-2'>
          <label className='flex text-lg text-black'>Gender</label>
          <div className='flex text-black gap-4'>
            <div className='flex items-center gap-2'>
              <input
                type='radio'
                id='male'
                {...register('gender')}
                value='m'
                className='h-4 w-4'
              />
              <label htmlFor='male'>Male</label>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type='radio'
                id='female'
                {...register('gender')}
                value='f'
                className='h-4 w-4'
              />
              <label htmlFor='female'>Female</label>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type='radio'
                id='other'
                {...register('gender')}
                value='o'
                className='h-4 w-4'
              />
              <label htmlFor='other'>Other</label>
            </div>
          </div>
        </div>
      </div>

      <div className='flex space-x-2 pt-10'>
        <Button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600'
          disable={loading}
        >
          {loading ? 'Saving...' : "Create Artist"}
        </Button>
        <Button
          disable={loading}
          type='button' className='bg-red-500 hover:bg-red-600' onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default CreateArtistForm;
