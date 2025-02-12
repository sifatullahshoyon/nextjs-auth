import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <>
      {session?.user && (
        <div>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <h4 className="my-5 text-center">
            Logged-In User Email: {session?.user?.email}
          </h4>
          <Image
            src={session.user.image as string}
            alt="user img"
            width="100"
            height="100"
            className="rounded-full mx-auto"
          />
        </div>
      )}
    </>
  );
};

export default DashboardPage;
