import React from 'react';

const PricingTable = () => {
  return (
    <>
      <section className='mt-10 overflow-x-auto w-full'>
        <table className='min-w-full table-auto border-collapse '>
          <thead className='border-b border-(--subTitle-color)'>
            <tr>
              <th className=' px-6 py-4 text-left'>Features</th>
              <th className=' px-6 py-4 text-left'>Basic Plan</th>
              <th className=' px-6 py-4 text-left'>Business Plan</th>
              <th className=' px-6 py-4 text-left'>Enterprise Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-(--subTitle-color)'>
              <td className=' px-6 py-4'>Basic Features</td>
              <td className=' px-6 py-4'>✔️</td>
              <td className=' px-6 py-4'>✔️</td>
              <td className=' px-6 py-4'>✔️</td>
            </tr>
            <tr className='border-b border-(--subTitle-color)'>
              <td className=' px-6 py-4'>Users</td>
              <td className=' px-6 py-4'>1</td>
              <td className=' px-6 py-4'>5</td>
              <td className=' px-6 py-4'>Unlimited</td>
            </tr>
            <tr className='border-b border-(--subTitle-color)'>
              <td className=' px-6 py-4'>Individual Data</td>
              <td className=' px-6 py-4'>500 MB</td>
              <td className=' px-6 py-4'>5 GB</td>
              <td className=' px-6 py-4'>50 GB</td>
            </tr>
            <tr className='border-b border-(--subTitle-color)'>
              <td className=' px-6 py-4'>Support</td>
              <td className=' px-6 py-4'>✔️</td>
              <td className=' px-6 py-4'>✔️</td>
              <td className=' px-6 py-4'>✔️</td>
            </tr>
            <tr className='border-b border-(--subTitle-color)'>
              <td className=' px-6 py-4'>Automated Workflow</td>
              <td className=' px-6 py-4'>⸺</td>
              <td className=' px-6 py-4'>✔️</td>
              <td className=' px-6 py-4'>✔️</td>
            </tr>
            <tr className='border-b border-(--subTitle-color)'>
              <td className=' px-6 py-4'>200+ integrations</td>
              <td className=' px-6 py-4'>⸺</td>
              <td className=' px-6 py-4'>✔️</td>
              <td className=' px-6 py-4'>✔️</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default PricingTable;
