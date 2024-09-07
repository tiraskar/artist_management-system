import CreateArtistForm from "./form/CreateArtistForm";
import PageHeading from "./PageHeading";


const CreateUser = () => {

  return (
    <div>
      <PageHeading
        pageTitle='Create artist'
        nextPageLink='/artist'
        nextPageText='View all artist'
      />
      <CreateArtistForm />
    </div>
  );
};

export default CreateUser;