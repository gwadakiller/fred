module.exports = {
  tutorialSidebar: [
    // Les pages simples (sans sous-section)
    'intro',
    'installation',
    
    // Une grande section "Développement"
    {
      type: 'category',
      label: 'Développement',
      collapsed: false, // false = la section est ouverte par défaut
      items: [
        // Sous-section Frontend
        {
          type: 'category',
          label: 'Frontend',
          items: [
            'frontend', // Ton fichier actuel
            // Tu pourras ajouter 'frontend/react', 'frontend/css' plus tard ici
          ],
        },
        // Sous-section init
        {
          type: 'category',
          label: 'initiation au Markdown',
          items: [
            'backend',
            'server',
          ],
        },
      ],
    },
  ],
};