export const setCookiesToRequest = (cookies) => {
    const accessToken = cookies.get("accessToken")
    const refreshToken = cookies.get("refreshToken");
    if (accessToken && refreshToken) {
        return {
            method: 'GET',
            withCredentials: true,
            headers:{
                Cookie:`${accessToken.name}=${accessToken.value};${refreshToken.name}=${refreshToken.value}`
            }
        }
    }
}