/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL: string
  // more env variables...
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';

declare module 'jsvectormap' {
  const jsVectorMap: any;
  export default jsVectorMap;
}

declare module '*.svg' {
  const content: any;
  export default content;
}
