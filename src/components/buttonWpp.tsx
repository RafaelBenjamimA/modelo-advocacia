import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5534999999999" // Coloque o número do cliente aqui
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_0_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
    >
      {/* Efeito de Pulso Contínuo */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
      />
      
      {/* Ícone Oficial do WhatsApp (Vetor SVG limpo) */}
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12.031 0C5.405 0 0 5.4 0 12.015c0 2.128.552 4.197 1.6 6.012L.15 23.4l5.526-1.446c1.764.954 3.766 1.458 5.855 1.458h.005C18.16 23.412 24 18.016 24 11.4 24 5.4 18.625 0 12.031 0zm.005 21.442c-1.8 0-3.564-.482-5.11-1.398l-.367-.217-3.797.994 1.013-3.692-.238-.378a9.49 9.49 0 0 1-1.448-5.044c0-5.234 4.267-9.5 9.5-9.5 2.535 0 4.916.985 6.707 2.775 1.79 1.787 2.777 4.167 2.777 6.698 0 5.234-4.266 9.498-9.497 9.498h-.04zm5.21-7.118c-.285-.143-1.69-.835-1.953-.93-.262-.095-.453-.143-.644.143-.19.285-.738.93-.905 1.12-.167.19-.334.214-.62.072-1.344-.668-2.39-1.558-3.266-2.905-.226-.347.224-.316.784-1.436.095-.19.048-.356-.024-.5-.072-.143-.644-1.552-.882-2.124-.23-.553-.464-.478-.644-.486-.167-.008-.358-.008-.55-.008-.19 0-.5.072-.762.357-.262.285-1 .978-1 2.383 0 1.405 1.024 2.762 1.167 2.952.143.19 2.012 3.072 4.872 4.306 1.398.604 2.186.745 3.024.908.857.168 1.69.112 2.19.027.568-.096 1.69-.69 1.93-1.356.238-.667.238-1.238.166-1.357-.072-.119-.262-.19-.548-.333z" />
      </svg>
    </motion.a>
  );
}