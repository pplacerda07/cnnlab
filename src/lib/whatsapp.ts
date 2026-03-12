export const WHATSAPP_NUMBER = "5511999999999"; // Substituir pelo número real

export function generateWhatsAppLink(message: string) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function getDefaultWhatsAppLink() {
    return generateWhatsAppLink("Olá! Gostaria de falar com um especialista da CannaLab.");
}
