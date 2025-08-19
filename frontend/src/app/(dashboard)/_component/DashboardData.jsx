

import Count from "./Card";
import dashboardData from "services/dashboardData";

export default async function CountPUC() {
  const { commentsCount, postsCount, usersCount } = await dashboardData();
  const countPUCDetails = [
    {
      id: 1,
      name: "پست ها",
      count: postsCount,
      type: "posts",
    },
    {
      id: 2,
      name: "کاربران",
      count: usersCount,
      type: "users",
    },
    {
      id: 3,
      name: "کامنت ها",
      count: commentsCount,
      type:"comments" ,
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-4">
      {countPUCDetails.map((item) => (
        <Count key={item.id} {...item} />
      ))}
    </div>
  );
}
