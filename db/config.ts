import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    resultId: column.number(),
    createdAt: column.date({ default: new Date() }),
  }
});

const Result = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    definition: column.text(),
    strengths: column.text(),
    hrAdvice: column.text(),
  }
});

export default defineDb({
  tables: { User, Result }
});
