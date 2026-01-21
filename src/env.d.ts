/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type Locale = 'th' | 'en';

interface ImportMetaEnv {
  readonly DB_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace App {
  interface Locals {
    locale: Locale;
    t: (key: string) => string;
    admin?: {
      username: string;
    };
  }
}
