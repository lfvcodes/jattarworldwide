// randomGenerators.js
export const generateRandomDate = () => {
   const randomDate = new Date(Date.now() - Math.floor(Math.random() * 10000000000));
   return randomDate.toLocaleDateString("es-ES", { day: '2-digit', month: 'short', year: 'numeric' });
};

export const generateRandomDuration = () => {
   const totalMinutes = Math.floor(Math.random() * (2 * 60)); // Hasta 2 horas (120 minutos)
   const hours = String(Math.floor(totalMinutes / 60)).padStart(2, '0');
   const minutes = String(totalMinutes % 60).padStart(2, '0');
   return `${hours}:${minutes}`; // Formato "hh:mm"
};

export const generateRandomHour = () => {
   const totalHourMinutes = Math.floor(Math.random() * (24 * 60)); // Hasta 24 horas
   const displayedHours = totalHourMinutes < 720 ? totalHourMinutes % 12 : (totalHourMinutes % 12) || 12; // Ajusta a 12 horas
   const displayedMinutes = String(totalHourMinutes % 60).padStart(2, '0');
   const period = totalHourMinutes < 720 ? 'AM' : 'PM'; // Determina AM o PM
   return `${displayedHours}:${displayedMinutes} ${period}`; // Formato "hh:mm AM/PM"
};
