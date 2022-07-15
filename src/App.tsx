import {
  Heading,
  Container,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Button,
  Tbody
} from "@chakra-ui/react";
import "./styles.css";

export default function App() {
  return (
    <Container paddingTop={5}>
      <Heading textAlign={"center"}>Shabad Raagis</Heading>
      <TableContainer>
        <Table variant={"striped"} colorScheme="purple" size="sm">
          <Thead>
            <Tr>
              <Th>
                <Checkbox>All</Checkbox>
              </Th>
              <Th>Last Checked</Th>
              <Th>Name</Th>
              <Th>
                <Button disabled size="sm">
                  Edit
                </Button>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Th>
                <Checkbox />
              </Th>
              <Th>16/12/2008</Th>
              <Th>Bhai Gagandeep Singh Ji</Th>
              <Th>
                <Button size="sm">Edit</Button>
              </Th>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}
