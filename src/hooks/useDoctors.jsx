import { useQuery } from "@tanstack/react-query";

const useDoctors = () => {

    const { data: doctors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            const res = await fetch('https://doc-house-server-shakilkhan80.vercel.app/doctor');
            return res.json();
        }
    })
    return [doctors, loading, refetch]
}
export default useDoctors;