import CreateUserForm from "./form/CreateUserForm";
import PageHeading from "./PageHeading";


const CreateUser = () => {

  return (
    <div>
      <PageHeading
        pageTitle='Create new user'
        nextPageLink='/users'
        nextPageText='View all users'
      />
      <CreateUserForm />
    </div>
  );
};

export default CreateUser;