import PageComponent from "../PageComponent";
import { userStateContext } from "../../contexts/ContextProvider";
const Dashboard = () => {
  const { tmpData } = userStateContext();
  return <PageComponent title="Dashboard" data={tmpData} />;
};

export default Dashboard;
