import CreateMusicForm from "./form/CreateMusicForm";
import PageHeading from "./PageHeading";


const CreateMusic = () => {

  return (
    <div>
      <PageHeading
        pageTitle='Create new music'
        nextPageLink='/music'
        nextPageText='View music list'
      />
      <CreateMusicForm />
    </div>
  );
};

export default CreateMusic;