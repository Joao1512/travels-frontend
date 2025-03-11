interface Environment {
    production: boolean;
    apiUrl: string;
    stadiaApiKey: string;
    // Adicione mais variáveis de ambiente conforme necessário
}

export const environment: Environment = {
    production: false,
    apiUrl: 'http://localhost:8080',
    stadiaApiKey: process.env['STADIAMAPS_API_KEY'] || '',
};
