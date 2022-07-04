'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
    'Products',
    [
      {
        name: 'Pc Gamer Intel Core I5 3.4ghz 8gb Ssd240gb Lol Freefire',
        value: 1890,
        category:'PC Gamer',
        image: 'https://http2.mlstatic.com/D_NQ_NP_629183-MLB50464838976_062022-O.webp'
      },
      {
        name: 'Cpu Gamer Barato I5 8gb Ssd 240gb Kit Gamer Completo',
        value: 1399,
        category:'PC Gamer',
        image: 'https://http2.mlstatic.com/D_NQ_NP_730738-MLB50510788253_062022-O.webp'
      },
      {
        name: 'Pc Cpu I5 Memória Ram 8gb Hd 1 Tera Placa Rede 1000',
        value: 1615,
        category:'PC Gamer',
        image: 'https://http2.mlstatic.com/D_NQ_NP_872508-MLB49784206648_042022-O.webp'
      },{
        name: 'Kit de teclado e mouse sem fio Sades V2020 Português Brasil de cor rosa',
        value: 207,
        category:'Periféricos',
        image: 'https://http2.mlstatic.com/D_NQ_NP_687681-MLA48380525671_112021-O.webp'
      },
      {
        name: 'Teclado gamer Evolut EG-206RB QWERTY português Brasil cor preto com luz rainbow',
        value: 53,
        category:'Periféricos',
        image: 'https://http2.mlstatic.com/D_NQ_NP_720535-MLA43771584831_102020-O.webp'
      },
      {
        name: 'Monitor gamer LG UltraWide 29WK600 led 29" branco e preto 100V/240V',
        value: 1800,
        category:'Monitor Gamer',
        image: 'https://http2.mlstatic.com/D_NQ_NP_921547-MLA45883799886_052021-O.webp'
      },
      {
        name: 'Monitor gamer LG UltraGear 24GN600 led 24 " preto 100V/240V',
        value: 1.469,
        category:'Monitor Gamer',
        image: 'https://http2.mlstatic.com/D_NQ_NP_907023-MLA46623342061_072021-O.webp'
      },
      {
        name: 'Escrivaninha Notável Móveis Mesa office NT 2010 mdp de 1320mm x 1370mm x 380mm nogal trend',
        value: 255,
        category:'Escritório',
        image: 'https://http2.mlstatic.com/D_NQ_NP_822411-MLA42433229832_072020-O.webp'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {})
  }
};