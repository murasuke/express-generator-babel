'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    const birth = new Date(now);
    const seeds = []; 
    const subtractYear = ( date, year ) => new Date( date.setYear(date.getFullYear() - year) );

    seeds.push({ name:"name1", birth:subtractYear(birth, 1), email:"mail1@example.com", createdAt: now, updatedAt: now });
    seeds.push({ name:"name2", birth:subtractYear(birth, 1), email:"mail2@example.com", createdAt: now, updatedAt: now });
    seeds.push({ name:"name3", birth:subtractYear(birth, 1), email:"mail3@example.com", createdAt: now, updatedAt: now });
    return await queryInterface.bulkInsert("users",seeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
