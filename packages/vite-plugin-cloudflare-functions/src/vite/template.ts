export const DtsFilename = 'cloudflare.d.ts';

export function getDefaultTsconfig() {
  const tsconfig = {
    compilerOptions: {
      jsx: 'preserve',
      target: 'ESNext',
      module: 'ESNext',
      moduleResolution: 'Node',
      skipLibCheck: true,
      strict: false,
      allowJs: true,
      noEmit: true,
      resolveJsonModule: true,
      allowSyntheticDefaultImports: true,
      baseUrl: '..',
      paths: {}
    },
    include: ['./' + DtsFilename, '../**/*']
  };
  return '// Generated by vite-plugin-cloudflare-functions\n' + JSON.stringify(tsconfig, null, 2);
}

export function getDts() {
  return [
    '// Generated by vite-plugin-cloudflare-functions\n',
    `/// <reference types="@cloudflare/workers-types" />`,
    `/// <reference types="vite-plugin-cloudflare-functions/types" />\n`,
    `export {}`
  ].join('\n');
}
