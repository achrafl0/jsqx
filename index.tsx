import {
  createElement,
  Select,
  Where,
  Clause,
  Sort,
  Limit,
} from "./lib/dbElements";

const author = {
  id: 123,
  isAdmin: true,
};

const query = (
  <Select table="Users" columns={["*"]} alias="u">
    <Where>
      <Clause clause={`u.id = ${author.id}`} />
      <Clause clause={`u.isAdmin = ${author.isAdmin}`} />
    </Where>
    <Sort column="createdAt" order="asc" />
    <Limit value={100} />
  </Select>
);

console.log(query);
