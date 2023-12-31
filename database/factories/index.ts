import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'

// Criando uma Factory de usuario.

export const UserFactory = Factory.define(User, ({ faker }) => {

  return {

  username: faker.internet.userName(),

  email: faker.internet.email(),

  password: faker.internet.password(),

  avatar: faker.internet.url(),

  }

  }).build()
