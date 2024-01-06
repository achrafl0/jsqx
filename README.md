# JSQX

A cursed librairy to create SQL queries using JSX

## License

YOU CAN ONLY USE THIS LIBRAIRY IN PURELY COMMERCIAL PROJECTS.
I want to see this in prod
(for legal reasons this is a joke, you can use this whatever you want, just you know, a bit of credit would be nice)

## USAGE

```typescript

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

// With TypeORM
const rawData = await manager.query(query);

// With Prisma

const result = await prisma.$queryRaw(
  Prisma.sql`${query}`
)


```

## Testing
Didn't test, don't care, don't @ me
