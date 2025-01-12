import { useReactTable, createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { H2 } from '../../ui-library/Typography/Headings';
import { styles } from '../../ui-library/DesignLanguage';

type MedicalDocument = {
  id: string;
  date: Date;
  type: string;
  doctor: string;
  description: string;
};

const documents: MedicalDocument[] = [
  {
    id: '1',
    date: new Date('2023-01-15'),
    type: 'Lab Results',
    doctor: 'Dr. Smith',
    description: 'Blood work analysis - Complete Blood Count'
  },
  {
    id: '2',
    date: new Date('2023-03-22'),
    type: 'Prescription',
    doctor: 'Dr. Johnson',
    description: 'Amoxicillin 500mg - Dental infection'
  },
  {
    id: '3',
    date: new Date('2023-04-05'),
    type: 'X-Ray Report',
    doctor: 'Dr. Williams',
    description: 'Dental panoramic radiograph'
  },
  {
    id: '4',
    date: new Date('2023-05-18'),
    type: 'Treatment Plan',
    doctor: 'Dr. Smith',
    description: 'Dental implant procedure planning'
  },
  {
    id: '5',
    date: new Date('2023-06-30'),
    type: 'Consultation Notes',
    doctor: 'Dr. Brown',
    description: 'Initial implant consultation'
  },
  {
    id: '6',
    date: new Date('2023-07-15'),
    type: 'Lab Results',
    doctor: 'Dr. Davis',
    description: 'Bone density scan results'
  },
  {
    id: '7',
    date: new Date('2023-08-02'),
    type: 'Surgical Report',
    doctor: 'Dr. Johnson',
    description: 'Implant placement - Lower right molar'
  },
  {
    id: '8',
    date: new Date('2023-09-10'),
    type: 'Follow-up Notes',
    doctor: 'Dr. Johnson',
    description: 'Post-surgical healing check'
  },
  {
    id: '9',
    date: new Date('2023-10-05'),
    type: 'X-Ray Report',
    doctor: 'Dr. Williams',
    description: 'Post-implant placement verification'
  },
  {
    id: '10',
    date: new Date('2023-11-20'),
    type: 'Treatment Plan',
    doctor: 'Dr. Smith',
    description: 'Crown fitting schedule'
  },
  {
    id: '11',
    date: new Date('2023-12-15'),
    type: 'Procedure Notes',
    doctor: 'Dr. Brown',
    description: 'Crown placement and adjustment'
  },
  {
    id: '12',
    date: new Date('2024-01-05'),
    type: 'Follow-up Notes',
    doctor: 'Dr. Smith',
    description: 'Final implant restoration check'
  }
];

const columnHelper = createColumnHelper<MedicalDocument>();

export const MedicalHistory = () => {
  const navigate = useNavigate();
  const columns = [
    columnHelper.accessor('date', {
      cell: (info) => format(info.getValue(), 'dd/MM/yyyy'),
      header: 'Date'
    }),
    columnHelper.accessor('type', {
      header: 'Document Type'
    }),
    columnHelper.accessor('doctor', {
      header: 'Doctor'
    }),
    columnHelper.accessor('description', {
      header: 'Description'
    })
  ];

  const table = useReactTable({
    data: documents,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className="p-8 bg-white rounded-xl shadow-lg max-w-7xl mx-auto">
      <H2>
        Medical History
      </H2>
      <div className={`overflow-x-auto rounded-lg shadow-sm border ${styles.ACCENT.border}`}>
        <table className="w-full border-collapse bg-white">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className={styles.ACCENT.background}>
                {headerGroup.headers.map(header => (
                  <th 
                    key={header.id} 
                    className={`px-6 py-4 text-left text-sm font-semibold ${styles.ACCENT.textDark} border-b-2 ${styles.ACCENT.border} uppercase tracking-wider`}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className={`divide-y ${styles.ACCENT.border}`}>
            {table.getRowModel().rows.map(row => (
              <tr 
                key={row.id} 
                className={`transition-colors ${styles.ACCENT.backgroundHover} cursor-pointer`}
                onClick={() => navigate(`/medical-history/${row.original.id}`)}
              >
                {row.getVisibleCells().map(cell => (
                  <td 
                    key={cell.id} 
                    className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};