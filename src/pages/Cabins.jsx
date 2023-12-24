import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import AddCabin from "../features/cabins/AddCabin";
import Row from "../Ui/Row";

function Cabins() {
  

  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>Filter / Sort</p>
    </Row>
    <Row>
        <CabinTable />
        <AddCabin/>
    </Row>
    </>
  );
}

export default Cabins;
