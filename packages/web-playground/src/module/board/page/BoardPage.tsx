import { useBoardList } from '../hooks';

const BoardPage: React.FC = () => {
  const { data, isLoading, isError } = useBoardList();
  console.log({ data });

  return (
    <>
      <div id={''}>BoardPage</div>
    </>
  );
};

export default BoardPage;
