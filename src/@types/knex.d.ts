// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      amount: number
      created_at: string
      id: string
      session_id?: string
      title: string
    }
  }
}
