export async function adminAuth(req) {
  const accessToken = req.cookies.get("accessToken");
  const refreshToken = req.cookies.get("refreshToken");
  const {
    data,
  } = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}user/profile`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `${accessToken?.name} = ${accessToken?.value}; ${refreshToken?.name} = ${refreshToken?.value}`,
    },
  }).then((response) => response.json());

  const isAdmin = data?.user?.isAdmin ? true : false;
  return isAdmin;
}
