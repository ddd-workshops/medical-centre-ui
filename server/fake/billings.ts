import { faker } from "@faker-js/faker"

import { randomFromArray } from "./utils"
import { Billing } from "../contract/types"

export const generateFakeBilling = (): Billing => ({
  amount: parseFloat(faker.commerce.price()),
  status: randomFromArray(['PENDING', 'PAID', 'CANCELLED'] as const)
})
