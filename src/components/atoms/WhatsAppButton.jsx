
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/1234567890', '_blank'); // Reemplaza 1234567890 con tu número de WhatsApp
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 focus:outline-none"
    >
      <FaWhatsapp size={24} />
    </button>
  );
};

export default WhatsAppButton;
