import { getAllComment } from "@/services/commentService";
import { setCookiesToRequest } from "@/utils/setCookiesToRequest";
import { cookies } from "next/headers";

export default async function CommentsPage() {
  const cookiesStore = await cookies();
  const option = setCookiesToRequest(cookiesStore);
  const { comments } = await getAllComment(option);
  return (
    <div className="overflow-y-scroll lg:overflow-y-hidden hide-scrollbar">
      <table className="min-w-[640px]">
        <thead>
          <tr className="text-subcontent lg:text-md">
            {["نام", "متن کامنت", "جواب کامنت"].map((tableHead, index) => (
              <th key={index + 1}>{tableHead}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr
              key={comment._id}
              className="text-subcontent lg:text-md text-secondary-900"
            >
              <TdComments {...comment} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TdComments({ content: { text }, user: { name }, answers }) {
  return (
    <>
      <td>{name}</td>
      <td>{text}</td>
      {answers.length ? (
        <td>
          <div className="flex flex-col gap-y-3">
            {answers.map((awnser, index) => (
              <span key={index + 1}>{awnser.content.text}</span>
            ))}
          </div>
        </td>
      ) : (
        <td>جوابی ندارد</td>
      )}
    </>
  );
}
