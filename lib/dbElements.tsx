type SelectProps = {
  table: string;
  columns: string[];
  alias?: string;
};

type WhereProps = {};

type ClauseProps = {
  clause: string;
};

type SortProps = {
  column: string;
  order: "asc" | "desc";
};

type LimitProps = {
  value: number;
};

function Select(
  { table, columns, alias }: SelectProps,
  children: string,
): string {
  const columnsString = columns.join(", ");
  const aliasString = alias ? ` AS ${alias}` : "";
  return `SELECT ${columnsString} FROM ${table}${aliasString}${children}`;
}

function Where(props: WhereProps, children: string[]): string {
  return ` WHERE ${children.join(" AND ")}`;
}

function Clause({ clause }: ClauseProps): string {
  return `${clause}`;
}

function Sort({ column, order }: SortProps): string {
  return ` SORT BY ${column} ${order}`;
}

function Limit({ value }: LimitProps): string {
  return ` LIMIT ${value}`;
}

export function createElement(
  type: Function,
  props: any,
  ...children: any[]
): string {
  return type(props, children);
}

export { Select, Where, Clause, Sort, Limit };
