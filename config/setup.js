import 'dotenv/config'
import LoginHelper from "../helpers/login.helper";
import supertest from "supertest";

// const baseUrl = process.env.BASE_URL

before(async function(){
  const loginHelper = new LoginHelper()
  await loginHelper.login(process.env.EMAIL, process.env.PASSWORD)
  process.env['TOKEN'] = loginHelper.response.body.payload.token
})

after(async function(){
  await supertest(process.env.BASE_URL)
    .delete('/config')
    .set('Authorization', `${process.env.TOKEN}`)
})