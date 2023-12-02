// async function obterLocalizacao() {
//     return new Promise<Position>((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
//   }
  
//   export async function atualizarLocalizacoes(iteracoes: number) {
//     for (let i = 0; i < iteracoes; i++) {
//       try {
//         const position = await obterLocalizacao();
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
  
//         console.log(`Iteração ${i + 1}: Latitude: ${latitude}, Longitude: ${longitude}`);
//       } catch (error) {
//         console.error('Erro ao obter a localização:', error);
//       }
  
//       await new Promise(resolve => setTimeout(resolve, 5000)); // Aguarda 5 segundos entre as iterações
//     }
//   }
  



// 'use client'
// interface CustomPosition {
//     coords: {
//       latitude: number;
//       longitude: number;
//     };
//   }
  
//   async function obterLocalizacao(): Promise<CustomPosition> {
//     return new Promise<CustomPosition>((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const customPosition: CustomPosition = {
//             coords: {
//               latitude: position.coords.latitude,
//               longitude: position.coords.longitude,
//             },
//           };
//           resolve(customPosition);
//         },
//         reject
//       );
//     });
//   }
  
//   export async function atualizarLocalizacoes(iteracoes: number) {
//     for (let i = 0; i < iteracoes; i++) {
//       try {
//         const position = await obterLocalizacao();
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
  
//         console.log(`Iteração ${i + 1}: Latitude: ${latitude}, Longitude: ${longitude}`);
//       } catch (error) {
//         console.error('Erro ao obter a localização:', error);
//       }
  
//       await new Promise(resolve => setTimeout(resolve, 5000)); // Aguarda 5 segundos entre as iterações
//     }
//   }
  