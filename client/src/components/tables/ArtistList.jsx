import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomPagination from "../CustomPagination";
import { Delete, Edit } from "lucide-react";
import PageHeading from "../PageHeading";
import SearchArtistForm from "../form/SearchArtistForm";

const UserList = () => {
  const [artistData, setArtistData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(0);

  const fetchArtistList = async () => {
    setArtistData(artist);
    setLimit(10);
  };

  useEffect(() => {
    fetchArtistList();
  }, []);

  return (
    <div>
      <PageHeading
        pageTitle="Artist list - 10"
        nextPageLink="/artist/create"
        searchComponent={<SearchArtistForm />}
        nextPageText="Create new artist"
      />

      <Table>
        <TableHeader>
          <TableRow className="bg-slate-200">
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>First release year</TableHead>
            <TableHead>No. Albums</TableHead>
            <TableHead>Date of birth</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {artistData.slice(0, limit).map((artist) => (
            <TableRow key={artist.id}>
              <TableCell>{artist.name}</TableCell>
              <TableCell>{artist.address}</TableCell>
              <TableCell>{artist.first_release_year}</TableCell>
              <TableCell>{artist.no_of_albums_released}</TableCell>
              <TableCell>{artist.dob}</TableCell>
              <TableCell>
                {artist.gender === "O"
                  ? "Other"
                  : artist.gender === "F"
                    ? "Female"
                    : "Male"}
              </TableCell>

              <TableCell className="flex gap-2">
                <Edit size={20} color="blue" className="cursor-pointer" />
                <Delete size={20} color="red" className="cursor-pointer" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={1} className="text-right">
              Showing {(currentPage - 1) * limit + 1} to{" "}
              {Math.min(currentPage * limit, artist.length)} of {artist.length}{" "}
              entries
            </TableCell>
            <TableCell colSpan={6} className="justify-end">
              <CustomPagination
                totalPages={Math.ceil(artist.length / limit)}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default UserList;

const artist = [
  {
    id: 1,
    name: "John Doe",
    first_release_year: 2014,
    no_of_albums_released: 4,
    phone: "123-456-7890",
    gender: "M",
    address: "123 Main St",
    dob: "2000-08-24",
  },
  {
    id: 2,
    name: "Jane Smith",
    first_release_year: 2014,
    no_of_albums_released: 4,
    phone: "234-567-8901",
    gender: "F",
    address: "456 Elm St",
    dob: "2000-02-24",
  },
  {
    id: 3,
    name: "Alice Johnson",
    first_release_year: 2014,
    no_of_albums_released: 4,
    phone: "345-678-9012",
    gender: "F",
    address: "789 Pine St",
    dob: "1999-06-15",
  },
  {
    id: 4,
    name: "Bob Brown",
    first_release_year: 2014,
    no_of_albums_released: 4,
    phone: "456-789-0123",
    gender: "M",
    address: "101 Maple St",
    dob: "1988-11-12",
  },
  {
    id: 5,
    name: "Carol Davis",
    first_release_year: 2014,
    no_of_albums_released: 4,
    phone: "567-890-1234",
    gender: "F",
    address: "202 Oak St",
    dob: "1990-09-30",
  },
  {
    id: 6,
    name: "David Wilson",
    first_release_year: 2014,
    no_of_albums_released: 4,
    phone: "678-901-2345",
    gender: "M",
    address: "303 Birch St",
    dob: "1992-03-25",
  },
  {
    id: 7,
    name: "Eva Harris",
    first_release_year: 2014,
    no_of_albums_released: 4,
    phone: "789-012-3456",
    gender: "F",
    address: "404 Cedar St",
    dob: "1985-07-21",
  },
  {
    id: 8,
    name: "Frank Miller",
    first_release_year: 2014,
    no_of_albums_released: 4,
    phone: "890-123-4567",
    gender: "M",
    address: "505 Walnut St",
    dob: "1978-12-10",
  },
  {
    id: 9,
    name: "Grace Lee",
    first_release_year: 2014,
    no_of_albums_released: 4,
    phone: "901-234-5678",
    gender: "F",
    address: "606 Spruce St",
    dob: "1989-05-14",
  },
  {
    id: 10,
    name: "Henry Clark",
    first_release_year: 2014,
    no_of_albums_released: 4,
    phone: "012-345-6789",
    gender: "M",
    address: "707 Fir St",
    dob: "1991-10-05",
  },
];
