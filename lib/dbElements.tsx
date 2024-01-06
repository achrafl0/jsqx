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

// Custom JSX factory
export function createElement(
  type: Function,
  props: any,
  ...children: any[]
): string {
  if (typeof type === "function" && type.prototype.isJSXRenderer) {
    // Call the render method for JSX elements created by the library
    return type(props, children);
  }

  // Default behavior for non-library JSX elements
  const childrenString = children.join("");
  return `<${type}${props
      ? " " +
      Object()
        .entries(props)
        .map(([key, value]) => `${key}="${value}"`)
        .join(" ")
      : ""
    }>${childrenString}</${type}>`;
}

createElement.prototype.isJSXRenderer = true;
Select.prototype.isJSXRenderer = true;
Where.prototype.isJSXRenderer = true;
Limit.prototype.isJSXRenderer = true;
Sort.prototype.isJSXRenderer = true;
Clause.prototype.isJSXRenderer = true;

export { Select, Where, Clause, Sort, Limit };
