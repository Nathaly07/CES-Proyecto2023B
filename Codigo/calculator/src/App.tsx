import ThemeSwitcher from "./components/ThemeSwitcher";
import ThemeColorSwitcher from "./components/ThemeColorSwitcher";
import Calculator from "./components/Calculator";



function App() {
  return (
    <main className="bg-white dark:bg-black relative">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <ThemeSwitcher />

          <div className="mx-auto max-w-2xl sm:text-center">
            <ThemeColorSwitcher />
            <h2 className="text-3xl font-bold tracking-tight text-brand sm:text-4xl text-center">
              Calculadora de Ventas de Acciones
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white text-center">
            Optimiza los precios de tus acciones para maximizar tus beneficios al identificar los precios de venta más efectivos.
            </p>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl mt-6">
            Registra una acción
          </h3>
          <Calculator />  
          
        </div>
      </div>
      
    </main>
  );
}

export default App;
