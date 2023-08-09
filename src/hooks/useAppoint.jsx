import useAuth from "./useAuth"
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "./useAxiosSecure";

const useAppoint = () => {


    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure(`/bookings?email=${user?.email}`,)
            // console.log('res data', res)
            return res.data;
        },
    })
    return [bookings, refetch]
}
export default useAppoint;