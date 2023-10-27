import { test } from '@japa/runner'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Remedios', () => {
  test('Deve criar um remedio', async () => {
  const remedyPayload = { name: 'zolpiden', value: 60.05, category: 'dormir' }
  await supertest(BASE_URL).post('/remedies').send(remedyPayload).expect(201)
  })

})
