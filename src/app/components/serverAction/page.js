import { getServerSession } from "next-auth";

export default async function getServerAction() {
  const checkAuth = async () => {
    const session = await getServerAction();
    return session?.user?.name || "Not Logged In";
  };
}
