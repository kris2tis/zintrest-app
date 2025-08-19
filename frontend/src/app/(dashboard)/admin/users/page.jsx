import { getAllUsers } from "@/services/authService";
import TrPost from "@/ui/TrPost";
import { setCookiesToRequest } from "@/utils/setCookiesToRequest";
import { cookies } from "next/headers";

export const metadata = {
  title: "کاربران",
  description: "مدریت کاربران سایت",
};

export default async function UsersPage() {
  const cookiesStore = await cookies();
  const option =  setCookiesToRequest(cookiesStore);
  const { users } = await getAllUsers(option);
  return (
    <div className="overflow-y-scroll lg:overflow-y-hidden hide-scrollbar">
      <table className="min-w-[640px]">
        <thead>
          <tr className="text-sm lg:text-md">
            {["نام", "ایمیل"].map((tableHead, index) => (
              <th key={index + 1}>{tableHead}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user , index) => (
            <tr key={user._id} className="text-sm lg:text-md text-secondary-900">
              <TdUsers {...user} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TdUsers({ name, email }) {
  return (
    <>
      <td>{name}</td>
      <td>{email}</td>
    </>
  );
}
