
import { test } from '@japa/runner'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('User', () => {
  test('Deve criar um usuário', async () => {
  const userPayload = { email: 'ian@gmail.com', username: 'IAn', password: '432' }
  await supertest(BASE_URL).post('/users').send(userPayload).expect(201)
  })

})
