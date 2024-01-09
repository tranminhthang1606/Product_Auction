import {
  ArrowTopRightOnSquareIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import TButton from "../core/TButton";

const ExchangeListTickets = ({ ticket }) => {
  function onClickDelete() {
    console.log("delte");
  }
  return (
    <div className="w-full h-48" key={ticket.id}>
      <h1 className="mt-4 text-lg font-bold">
        {ticket.title} - {ticket.id}
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: ticket.title }}
        className="overflow-hidden flex-1"
      ></div>

      <div className="flex justify-between items-center mt-3">
        <TButton to={`exchanges/${ticket.id}`}>
          <PencilIcon className="w-5 h-5 mr-2" />
          Edit
        </TButton>

        <div className="flex items-center">
          <TButton href={`/view/exchanges/${ticket.id}`} circle link>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </TButton>

          {ticket.id && (
            <TButton onClick={onClickDelete} circle link color="red">
              <TrashIcon className="w-5 h-5" />
            </TButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExchangeListTickets;
