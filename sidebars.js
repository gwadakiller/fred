module.exports = {
  tutorialSidebar: [
    'intro',
    'installation',
    {
      type: 'category',
      label: 'Backend',
      collapsible: true,
      collapsed: true,

      items: [
        'backend/server',
        'backend/api',
      ],
    },

    {
      type: 'category',
      label: 'Frontend',
      collapsible: true,
      collapsed: true,

      items: [
        'frontend/ui',
        'frontend/components',
      ],
    },
  ],
};