import Contributions from "./Contributions";

import Breakline from "@/common/components/elements/Breakline";
import { GITHUB_ACCOUNTS } from "@/common/constants/github";


const Dashboard = () => {
  return (
    <>
      <Breakline className="my-8" />
      <Contributions endpoint={GITHUB_ACCOUNTS.endpoint} />
      <Breakline className="my-8" />
      <Breakline className="my-8" />
      {/* <Breakline className="my-8" /> */}
      
    </>
  );
};

export default Dashboard;
