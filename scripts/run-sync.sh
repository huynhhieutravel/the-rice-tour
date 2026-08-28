#!/bin/bash
mv .env .env.backup
echo "Executing chunk 1..."
npx wrangler d1 execute dulichcoguu-d1 --remote --file=scripts/sql_chunks/chunk_1.sql
echo "Executing chunk 2..."
npx wrangler d1 execute dulichcoguu-d1 --remote --file=scripts/sql_chunks/chunk_2.sql
echo "Executing chunk 3..."
npx wrangler d1 execute dulichcoguu-d1 --remote --file=scripts/sql_chunks/chunk_3.sql
echo "Executing chunk 4..."
npx wrangler d1 execute dulichcoguu-d1 --remote --file=scripts/sql_chunks/chunk_4.sql
echo "Executing chunk 5..."
npx wrangler d1 execute dulichcoguu-d1 --remote --file=scripts/sql_chunks/chunk_5.sql
echo "Executing chunk 6..."
npx wrangler d1 execute dulichcoguu-d1 --remote --file=scripts/sql_chunks/chunk_6.sql
echo "Executing chunk 7..."
npx wrangler d1 execute dulichcoguu-d1 --remote --file=scripts/sql_chunks/chunk_7.sql
echo "Executing chunk 8..."
npx wrangler d1 execute dulichcoguu-d1 --remote --file=scripts/sql_chunks/chunk_8.sql
echo "Executing chunk 9..."
npx wrangler d1 execute dulichcoguu-d1 --remote --file=scripts/sql_chunks/chunk_9.sql
echo "Executing chunk 10..."
npx wrangler d1 execute dulichcoguu-d1 --remote --file=scripts/sql_chunks/chunk_10.sql
echo "Executing chunk 11..."
npx wrangler d1 execute dulichcoguu-d1 --remote --file=scripts/sql_chunks/chunk_11.sql
echo "Executing chunk 12..."
npx wrangler d1 execute dulichcoguu-d1 --remote --file=scripts/sql_chunks/chunk_12.sql
echo "Executing chunk 13..."
npx wrangler d1 execute dulichcoguu-d1 --remote --file=scripts/sql_chunks/chunk_13.sql
mv .env.backup .env
echo "Done!"