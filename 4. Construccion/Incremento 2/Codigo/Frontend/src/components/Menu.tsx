import StockTable from './StockTable';


function Menu() {
    const stockSymbols = ['AAPL', 'GOOGL', 'MSFT', 'INTC', 'PYPL']; // Agrega más símbolos según tus necesidades


  return (
    <div className="flex flex-col items-center  h-screen">
      <h1 className="text-3xl font-bold tracking-tight text-brand sm:text-4xl text-center">Acciones</h1>
      <div className="flex-col space-x-4">
        <StockTable stockSymbols={stockSymbols} />

        
      </div>
    </div>
  );
}

export default Menu;
