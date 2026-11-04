import emailjs from '@emailjs/browser';

export const TARGET_EMAIL = 'nissrinmahan02@gmail.com';

// ─────────────────────────────────────────────
// 🔧 REMPLACEZ CES 3 VALEURS PAR VOSS IDENTIFIANTS EMAILJS
//    Dashboard EmailJS → Email Services  → Service ID
//    Dashboard EmailJS → Email Templates → Template ID
//    Dashboard EmailJS → Account         → Public Key
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_9of2zn5';
const EMAILJS_TEMPLATE_ID = 'template_3qu7hmq';
const EMAILJS_PUBLIC_KEY  = 'p3Ubdwh8vGhUWxugS';

/**
 * Envoie les données du formulaire via EmailJS (aucun backend requis).
 */
export async function sendContactMessage({ name, email, message, service, project }) {
  const templateParams = {
    from_name: name,   // utilisé dans le Subject : {{from_name}}
    name:      name,   // utilisé dans le Body    : {{name}}
    reply_to:  email,  // utilisé dans Reply To   : {{reply_to}}
    message:   message,
    service:   project || service || 'Contact direct',
  };

  const result = await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_PUBLIC_KEY
  );

  if (result.status !== 200) {
    throw new Error("Échec de l'envoi du message. Veuillez réessayer.");
  }

  return result;
}

/**
 * Génère un lien mailto de secours en cas d'erreur réseau
 */
export function getMailtoFallback({ name, email, message, subject = 'Nouveau message Portfolio' }) {
  const body = [
    '========================================',
    '📌 COORDONNÉES DU VISITEUR :',
    '========================================',
    `Nom : ${name}`,
    `Email : ${email}`,
    '',
    '----------------------------------------',
    '💬 MESSAGE :',
    '----------------------------------------',
    message,
    '========================================',
  ].join('\n');

  return `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
