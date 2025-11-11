import { configureAxe } from 'axe-core';

const axe = configureAxe({
  // Optional configuration options
  rules: [
    {
      id: 'color-contrast',
      enabled: true,
    },
    {
      id: 'image-alt',
      enabled: true,
    },
    // Add more rules as needed
  ],
});

export const runAxe = async (container: HTMLElement) => {
  const results = await axe.run(container);
  return results;
};