import { Button, DataTable } from '@shared/components/ui';
import { useBoardList, useCreateBoard } from '../hooks';
import { boardColumns } from '../columns/boardColumn';
import { PlusCircle } from 'lucide-react';

const BoardPage: React.FC = () => {
  const { data, isLoading, isError } = useBoardList();

  const { mutate } = useCreateBoard(() => {
    console.log('add');
  });

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error!</div>;

  const addBoard = () => {
    mutate();
  };

  return (
    <>
      <div className="container mx-auto py-10 pr-3">
        <Button variant={'outline'} onClick={addBoard}>
          <PlusCircle color="gray" />
        </Button>
        <DataTable columns={boardColumns && boardColumns} data={data ?? []} />
      </div>
    </>
  );
};

export default BoardPage;
