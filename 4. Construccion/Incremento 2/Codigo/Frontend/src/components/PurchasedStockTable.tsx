import React, { useEffect, useState } from 'react';

const PurchasedStockTable = ( {actualStocks}) =>{
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    async function getStocks() {
      try {
        const response = await fetch('http://localhost:4000/api/stocks');
        const responseData = await response.json();
  
        if (response.ok) {
          setStocks(responseData.stocks); // Accede al array de acciones dentro del objeto de respuesta
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    getStocks();
    return;
  }, []);

  const handleDelete = async (stock) => {
    try {
      const response = await fetch(`http://localhost:4000/api/stocks/${stock._id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setStocks(stocks.filter((s) => s._id !== stock._id));
      } else {
        console.error('Error deleting stock:', response.status);
      }
    } catch (error) {
      console.error('Error deleting stock:', error);
    }
  };

  const handleFilter = async (filterType) => { // Accepts filter type as an argument
    try {
      const baseUrl = 'http://localhost:4000/api/stocks';
      const endpoint = filterType === 'price' ? '/price' : ''; // Construct endpoint based on filterType
      const url = `${baseUrl}${endpoint}`;
  
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        setStocks(data.stocks);
        console.log(stocks);
      } else {
        console.error('Error filtering stocks:', response.status);
      }
    } catch (error) {
      console.error('Error filtering stocks:', error);
    }
  };

  return (
    <>
    
    <div className="flex justify-start">
      <button
        className="btn btn-primary btn-xs mx-auto w-1/5 my-3"
        onClick={() => handleFilter('price')} // Pass filter type ('price')
      >
        Filtrar por Precio
      </button>
      <button
        className="btn btn-primary btn-xs mx-auto w-1/5 my-3"
        onClick={() => handleFilter('name')}  // Pass filter type ('name')
      >
        Filtrar por Nombre
      </button>
    </div>

    <table className="min-w-full divide-y divide-gray-200 ring-gray-200 dark:ring-gray-700 rounded-md ">
      <thead className="bg-gray-50 dark:bg-slate-900">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider rounded-tl-xl">Nombre de la Acción</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider">Fecha de la Compra</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider">Precio de Compra por Acción</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider">Cantidad de Acciones</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider rounded-tr-xl">Costo Total de Compra</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider rounded-tr-xl">Cambio</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider rounded-tr-xl">Ganancia/Perdida</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider">Acciones</th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200">
        {stocks && stocks.map((stock) => (
          <tr key={stock._id}>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">{stock.symbol}</td>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">{stock.purchaseDate }</td>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">
              {stock.pricePerShare.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </td>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">{stock.quantity}</td>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">
              {stock.purchasePrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </td>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">
              {actualStocks.find((stockItem) => stockItem.symbol === stock.symbol) ? (
                <span className="text-green-500">
                  {actualStocks.find((stockItem) => stockItem.symbol === stock.symbol).change}
                </span>
              ) : (
                <span className="text-red-500">Sin datos</span>
              )}
            </td>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">
              {actualStocks.find((stockItem) => stockItem.symbol === stock.symbol) ? (
                <span className="text-green-500">
                  {(actualStocks.find((stockItem) => stockItem.symbol === stock.symbol).price - stock.pricePerShare).toFixed(2) }
                </span>
              ) : (
                <span className="text-red-500">Sin datos</span>
              )}
            </td>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">
            
              <button style={{maxWidth: '100%'}} className="btn btn-danger btn-xs" onClick={() => handleDelete(stock)}>Borrar</button>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
    
    </>
  );
}

export default PurchasedStockTable;