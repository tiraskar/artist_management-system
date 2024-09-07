import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomPagination from "./CustomPagination";
import { Delete, Edit } from 'lucide-react';
import SearchUserForm from './form/SearchUserForm';
import PageHeading from './PageHeading';

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(0);

  const fetchUserList = async () => {
    setUserData(users);
    setLimit(10);
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <div>
      <PageHeading
        pageTitle='User list - 10'
        nextPageLink='/users/create'
        searchComponent={<SearchUserForm />}
        nextPageText='Create new user'
      />

      <Table>
        <TableHeader>
          <TableRow className='bg-slate-200'>
            <TableHead>Full name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Date of birth</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData.slice(0, limit).map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.fullname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.dob}</TableCell>
              <TableCell>
                {user.gender === "O" ? "Other" : user.gender === "F" ? "Female" : "Male"}
              </TableCell>

              <TableCell className="flex gap-2">
                <Edit size={20} color='blue' className='cursor-pointer' />
                <Delete size={20} color='red' className='cursor-pointer' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={1} className="text-right">
              Showing {((currentPage - 1) * limit) + 1} to {Math.min(currentPage * limit, users.length)} of {users.length} entries
            </TableCell>
            <TableCell colSpan={6} className="justify-end">
              <CustomPagination
                totalPages={Math.ceil(users.length / limit)}
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

const users = [
  { "id": 1, "fullname": "John Doe", "email": "john.doe@example.com", "phone": "123-456-7890", "gender": "M", "address": "123 Main St", "dob": "2000-08-24" },
  { "id": 2, "fullname": "Jane Smith", "email": "jane.smith@example.com", "phone": "234-567-8901", "gender": "F", "address": "456 Elm St", "dob": "2000-02-24" },
  { "id": 3, "fullname": "Alice Johnson", "email": "alice.johnson@example.com", "phone": "345-678-9012", "gender": "F", "address": "789 Pine St", "dob": "1999-06-15" },
  { "id": 4, "fullname": "Bob Brown", "email": "bob.brown@example.com", "phone": "456-789-0123", "gender": "M", "address": "101 Maple St", "dob": "1988-11-12" },
  { "id": 5, "fullname": "Carol Davis", "email": "carol.davis@example.com", "phone": "567-890-1234", "gender": "F", "address": "202 Oak St", "dob": "1990-09-30" },
  { "id": 6, "fullname": "David Wilson", "email": "david.wilson@example.com", "phone": "678-901-2345", "gender": "M", "address": "303 Birch St", "dob": "1992-03-25" },
  { "id": 7, "fullname": "Eva Harris", "email": "eva.harris@example.com", "phone": "789-012-3456", "gender": "F", "address": "404 Cedar St", "dob": "1985-07-21" },
  { "id": 8, "fullname": "Frank Miller", "email": "frank.miller@example.com", "phone": "890-123-4567", "gender": "M", "address": "505 Walnut St", "dob": "1978-12-10" },
  { "id": 9, "fullname": "Grace Lee", "email": "grace.lee@example.com", "phone": "901-234-5678", "gender": "F", "address": "606 Spruce St", "dob": "1989-05-14" },
  { "id": 10, "fullname": "Henry Clark", "email": "henry.clark@example.com", "phone": "012-345-6789", "gender": "M", "address": "707 Fir St", "dob": "1991-10-05" },

];