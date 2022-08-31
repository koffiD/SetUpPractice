import{Builder,By,Capabilities,until,WebDriver} from 'selenium-webDriver'

const chromedriver = require("chromedriver")
const driver:WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

import {employeeMPage} from './employeeManagerTest'

const employeepage =new employeeMPage(driver)

describe("practicing abstraction", () => {
beforeEach(async () =>{
    await employeepage.navigate()
})
afterAll(async () => {
    await employeepage.driver.quit()
})
test('adding an employee name', async () => {
    await employeepage.click(employeepage.addEmployee)
    await employeepage.click(employeepage.newEmployee)
    await employeepage.setInput(employeepage.nameField,"Bob the Builder")
    await employeepage.click(employeepage.saveBtn)
})
})
