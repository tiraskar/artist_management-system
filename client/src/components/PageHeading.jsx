
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const PageHeading = ({ pageTitle, nextPageLink, nextPageText, searchComponent, buttonColor }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <h1 className="text-lg font-semibold ">
        {pageTitle}
      </h1>
      {searchComponent}
      <Link to={nextPageLink}>
        <Button className={`${buttonColor}`}>
          {nextPageText}
        </Button>
      </Link>
    </div>
  );
};

PageHeading.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  nextPageLink: PropTypes.string.isRequired,
  nextPageText: PropTypes.string.isRequired,
  searchComponent: PropTypes.node,
  buttonColor: PropTypes.string,
};

export default PageHeading;