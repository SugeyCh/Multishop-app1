import dotentv from "dotenv"
dotentv.config()

const _var = {
  // SERVER
  PORT: process.env.PORT || 5000,

  // DATABASE
  DB_HOST: process.env.HOST,
  DB_USER: process.env.USER,
  DB_PASS: process.env.PASSWORD, 
  DB_NAME: process.env.DB_NAME,

  // ROUTES
  // - Clients
  GET_ALL_USER: process.env.GET_ALL_USER,
  GET_ONE_USER: process.env.GET_ONE_USER,
  GET_FALSE_US: process.env.GET_FALSE,
  GET_NOTIFY:   process.env.GET_NOTIFY,
  FIND_BY_DATE: process.env.FIND_BY_DATE,
  VERIFY_TOKEN: process.env.VERIFY_TOKEN,
  CREATE_USER:  process.env.CREATE_USER,
  LOGIN_USER:   process.env.LOGIN_USER,
  UPDATE_USER:  process.env.UPDATE_USER,
  DELETE_USER:  process.env.DELETE_USER,

  // - Users
  GET_USERS: process.env.GET_ADMINS,
  REG_USER:  process.env.REG_USER,
  LOG_USER:  process.env.LOG_USER,
  DELETE_AD: process.env.DELETE_AD,

  // TOKEN KEY
  TOKEN_KEY: process.env.TOKEN
}

export default _var