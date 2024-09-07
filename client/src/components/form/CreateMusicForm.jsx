
import { yupResolver } from '@hookform/resolvers/yup';
import * as  yup from 'yup';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import CustomFormField from '../CustomFormField';
import { useForm } from 'react-hook-form';

const musicSchema = yup.object({
  artist_id: yup.number().required(),
  title: yup.string().required().max(255),
  album_name: yup.string().required().max(255),
  genre: yup
    .string()
    .required()
    .oneOf(['rnb', 'country', 'classic', 'rock', 'jazz']),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
});

const CreateMusicForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(musicSchema),
    mode: "onTouched"
  });


  const onSubmit = (data) => {
    console.log("hello", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>

        <div className='space-y-1 flex-col'>
          <label className="text-sm font-normal">Artist</label>
          <Select
            className="rounded-2xl text-sm">
            <SelectTrigger
              {...register('artist_id')}
            >
              <SelectValue placeholder="Select a artist" className='text-lg' />
            </SelectTrigger>
            <SelectContent >
              {artistList?.map((artist) => {
                return (
                  <SelectItem key={artist.artist_id} value={artist.artist_id}>
                    {artist.name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <CustomFormField
          {...register("title")}
          name='title'
          label="Title"
          type="text"
          placeholder="Timi bina"
          errorMessage={errors?.firstName?.message}
        />
        <CustomFormField
          {...register("album_name")}
          name='album_name'
          label="Album Name"
          type="text"
          placeholder="Rockstar"
          errorMessage={errors?.lastName?.message}
        />

        <div className='space-y-1'>
          <label className="text-sm font-normal">Genre</label>
          <Select className="rounded-2xl text-sm">
            <SelectTrigger {...register('genre')}>
              <SelectValue placeholder="Select genre" className='text-lg' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rnb">RNB</SelectItem>
              <SelectItem value="country">Country</SelectItem>
              <SelectItem value="classic">Classic</SelectItem>
              <SelectItem value="rock">Rock</SelectItem>
              <SelectItem value="jazz">Jazz</SelectItem>
            </SelectContent>
          </Select>
        </div>

      </div>

      <div className='flex space-x-2 pt-10'>
        <Button onClick={() => handleSubmit()} className="bg-blue-500 hover:bg-blue-600">Create music</Button>
        <Button className="bg-red-500 hover:bg-red-600">Cancel</Button>
      </div>
    </form>
  );
};

export default CreateMusicForm;

const artistList = [
  {
    artist_id: 1,
    name: 'Artist 1',
  },
  {
    artist_id: 2,
    name: 'Artist 2',
  },

];