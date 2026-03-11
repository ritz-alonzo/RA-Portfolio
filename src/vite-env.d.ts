/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  // add any other vars you read, e.g.:
  // readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}