import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import TableOne from '../../components/Tables/TableOne';
import TableTwo from '../../components/Tables/TableTwo';
import TableThree from '../../components/Tables/TableThree';

const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
