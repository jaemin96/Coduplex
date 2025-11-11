import { DataTable } from '@shared/components/ui';
import { useBoardList } from '../hooks';
import { boardColumns } from '../columns/boardColumn';

const BoardPage: React.FC = () => {
  const { data, isLoading, isError } = useBoardList();

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error!</div>;

  return (
    <>
      <div className="container mx-auto py-10 pr-3">
        <DataTable columns={boardColumns && boardColumns} data={data ?? []} />
      </div>
    </>
  );
};

export default BoardPage;
