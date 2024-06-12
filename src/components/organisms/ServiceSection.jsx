
// import ServiceCard from '../molecules/ServiceCard';

// const services = [
//   {
//     icon: 'wrench', // Nombre del icono
//     title: 'Cambio de Piezas',
//     description: 'Reemplazo de piezas dañadas o desgastadas de tus dispositivos.',
//   },
//   {
//     icon: 'microchip', // Nombre del icono
//     title: 'Reparaciones de Placa',
//     description: 'Reparación de la placa base y componentes electrónicos.',
//   },
//   {
//     icon: 'software', // Nombre del icono
//     title: 'Soluciones de Software',
//     description: 'Instalación y configuración de software, eliminación de virus y más.',
//   },
// ];

// const ServiceSection = () => (
//   <section className="services-section mt-8">
//     <h2 className="text-2xl font-bold mb-4 text-primary-purple dark:text-dark-text text-center">Nuestros Servicios</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {services.map((service, index) => (
//         <ServiceCard 
//           key={index} 
//           icon={service.icon} 
//           title={service.title} 
//           description={service.description} 
//         />
//       ))}
//     </div>
//   </section>
// );

// export default ServiceSection;



import ServiceCard from '../molecules/ServiceCard';

const services = [
  {
    icon: 'wrench', // Nombre del icono
    title: 'Cambio de Piezas',
    description: 'Reemplazo de piezas dañadas o desgastadas de tus dispositivos.',
  },
  {
    icon: 'microchip', // Nombre del icono
    title: 'Reparaciones de Placa',
    description: 'Reparación de la placa base y componentes electrónicos.',
  },
  {
    icon: 'software', // Nombre del icono
    title: 'Soluciones de Software',
    description: 'Instalación y configuración de software, eliminación de virus y más.',
  },
];

const ServiceSection = () => (
  <section className="services-section mt-8 mb-8 pt-20 pb-32"> 



    <h2 className="text-3xl  font-bold mb-12 text-primary-purple dark:text-dark-text text-center">Nuestros Servicios</h2>  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard 
          key={index} 
          icon={service.icon} 
          title={service.title} 
          description={service.description} 
        />
      ))}
    </div>
  </section>
);

export default ServiceSection; 
