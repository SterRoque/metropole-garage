import { VehicleCard } from './components/vehicle-card';

export default function App() {
   return (
      <div className='flex h-full w-screen flex-wrap justify-center gap-4 bg-neutral-900 p-4'>
         <VehicleCard />
         <VehicleCard />
         <VehicleCard />
         <VehicleCard />
         <VehicleCard />
         <VehicleCard />
         <VehicleCard />
         <VehicleCard />
      </div>
   );
}
