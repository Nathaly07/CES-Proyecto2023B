import React from 'react';

const StockTable = ({ stocks, onDelete }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 ring-gray-200 dark:ring-gray-700 rounded-md ">
      <thead className="bg-gray-50 dark:bg-slate-900">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider rounded-tl-xl">Nombre de la Acción</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider">Fecha de la Compra</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider">Precio de Compra por Acción</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider">Cantidad de Acciones</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider rounded-tr-xl">Costo Total de Compra</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider">Acciones</th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200">
        {stocks.map((stock) => (
          <tr key={stock.id}>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">{stock.stockName}</td>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">{stock.purchaseDate }</td>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">
              ${stock.purchasePricePerShare.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </td>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">{stock.quantityOfShares}</td>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">
              {stock.totalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </td>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">
            
              <button style={{maxWidth: '100%'}} className="btn btn-danger btn-xs" onClick={() => onDelete(stock.id)}>Borrar</button>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
