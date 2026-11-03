export const TARGET_EMAIL = 'nissrinmahan02@gmail.com';

/**
 * Envoie les données du formulaire directement à l'adresse email cible.
 * Formaté sous forme textuelle et soignée (SANS TABLEAU), avec soulignement
 * et mise en évidence claire des éléments essentiels.
 */
export async function sendContactMessage({ name, email, message, service, project }) {
  const currentDate = new Date().toLocaleString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const subject = project
    ? `[Portfolio] ✉️ Nouveau message de ${name} — Projet : ${project}`
    : `[Portfolio] ✉️ Nouveau message de ${name}${service ? ` (${service})` : ''}`;

  // Texte soigné avec soulignement des sections clés
  const formattedMessage = [
    '====================================================',
    '📌 INFORMATIONS ESSENTIELLES (EXPÉDITEUR)',
    '====================================================',
    `• Nom complet : ${name}`,
    `• Email de réponse : ${email}`,
    project ? `• Projet concerné : ${project}` : `• Besoin / Service : ${service || 'Contact direct'}`,
    `• Date & Heure : ${currentDate}`,
    '',
    '----------------------------------------------------',
    '💬 CONTENU DU MESSAGE :',
    '----------------------------------------------------',
    message,
    '====================================================',
  ].join('\n');

  // Remarque : aucun champ utilisateur ne doit commencer par '_'
  // car FormSubmit traite les clés commençant par '_' comme des configurations cachées et les ignore.
  const payload = {
    _template: 'box', // Style épuré en encadré (pas de tableau HTML)
    _subject: subject,
    _replyto: email,
    _captcha: 'false',
    'Nom': name,
    'Email': email,
    ...(project ? { 'Projet concerné': project } : {}),
    ...(service ? { 'Besoin / Prestation': service } : {}),
    'Date de réception': currentDate,
    'Message détaillé': formattedMessage,
  };

  const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || (data && data.success === 'false')) {
    throw new Error(data?.message || "Échec de l'envoi du message.");
  }

  return data;
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
