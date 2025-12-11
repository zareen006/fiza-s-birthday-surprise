export const getAssetPath = (path: string): string => {
  const basePath = import.meta.env.BASE_URL || '/';
  return `${basePath}${path}`.replace(/\/+/g, '/');
};