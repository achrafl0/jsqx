type SelectProps = {
  table: string;
  columns: string[];
  alias?: string;
};

type WhereProps = {};

type ClauseProps = {
  clause: string;
};

type InClauseProps = {
  column: string;
  items: string[];
};

type SortProps = {
  column: string;
  order: "asc" | "desc";
};

type LimitProps = {
  value: number;
};

type OrderProps = {
  by: string;
  asc?: boolean;
  desc?: boolean;
};

type GroupProps = {
  by: string;
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

/**
 * Builds an "IN" clause like `column in ('a', 'b', 'c')`
 */
function InClause({ column, items }: InClauseProps): string {
  return `${column} in (${items.map((i) => `'${i}'`).join(",")})`;
}

function Sort({ column, order }: SortProps): string {
  return ` SORT BY ${column} ${order}`;
}

function Limit({ value }: LimitProps): string {
  return ` LIMIT ${value}`;
}

/**
 * Builds an "ORDER" statement like `ORDER BY column asc`
 */
function Order({ by, asc, desc }: OrderProps): string {
  return ` ORDER BY ${by} ${asc ? "asc" : ""}${desc ? "desc" : ""}`;
}

/**
 * Builds a "GROUP" statement like `GROUP BY column asc`
 */
function Group({ by }: GroupProps): string {
  return ` GROUP BY ${by}`;
}

export function createElement(
  type: Function,
  props: any,
  ...children: any[]
): string {
  return type(props, children);
}

export { Select, Where, Clause, InClause, Sort, Limit, Group, Order };
