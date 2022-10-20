import 'dotenv/config'
import LoginHelper from "../helpers/login.helper";


before(async function(){
  const loginHelper = new LoginHelper()
  await loginHelper.login(process.env.EMAIL, process.env.PASSWORD)
  process.env['TOKEN'] = loginHelper.response.body.payload.token
})





