import type { ColumnDef } from '@tanstack/react-table';
import { Button, Checkbox } from '@shared/components/ui';
import { ArrowUpDown } from 'lucide-react';

export type Board = {
  id: string;
  title: string;
  content: string;
};

export const boardColumns: ColumnDef<Board>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    cell: ({ row }) => {
      const title = row.getValue('title');
      return (
        <div className="text-left font-medium">
          <span>{title as string}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'content',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          content
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
