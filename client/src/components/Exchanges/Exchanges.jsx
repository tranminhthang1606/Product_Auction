import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { userStateContext } from "../../contexts/ContextProvider";
import PageComponent from "../PageComponent";
import TButton from "../core/TButton";

const ExchangesPage = () => {
  const { tmpData } = userStateContext();

  return (
    <PageComponent
      title={"Exchanges"}
      data={tmpData}
      btns={
        <TButton color="green" to="/exchanges/create">
          <PlusCircleIcon className="h-6 w-6 mr-2" />
          Create New
        </TButton>
      }
    />
  );
};

export default ExchangesPage;
