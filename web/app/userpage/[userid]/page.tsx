import { Card, Title, Text } from '@tremor/react';
import { PrismaClient } from '@prisma/client';
import Search from './search';
import UsersTable from './table';
import { getServerSession } from 'next-auth';
export const dynamic = 'force-dynamic';
const prisma = new PrismaClient();

export default async function IndexPage({
  searchParams, params,
}: {
  searchParams: { q: string };
  params: { userid: string };
}) {
  const session = await getServerSession();
  console.log(session)
  const search = searchParams.q ?? '';
  const users = await prisma.shownUser.findMany({
    where: {
      name: {
        contains: search
      }
    }
  })

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>
        {"User page: " + params?.userid}
      </Text>
      <Text>
        {"User name: " + session?.user?.name}
      </Text>
      <Text>
        {"User email: " + session?.user?.email}
      </Text>
      <Text>
        A list of users retrieved from a MySQL database.
      </Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
