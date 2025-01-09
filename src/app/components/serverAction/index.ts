import { getServerSession } from "next-auth";

export default async function getServerAction() {
  const checkAuth = async () => {
    const session = await getServerSession();
    return session?.user?.name || "Not Logged In";
  };
}
