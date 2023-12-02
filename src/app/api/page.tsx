// pages/index.tsx (ou outro arquivo)

import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('/api/nextapiresponse');
    console.log(response.data);
  } catch (error) {
    console.error('Erro na solicitação da API:', error);
  }
};

fetchData();
