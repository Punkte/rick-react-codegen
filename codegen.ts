import { type CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'https://rickandmortyapi.com/graphql',
  documents: ['src/**/*.{ts, tsx}'],
  generates: {
    './src/gql/': {
      preset: 'client',
      config: {
        avoidOptionals: true,
      }
    }
  }
}
 
export default config