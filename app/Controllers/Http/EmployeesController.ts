
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";
import Employee from "App/Models/Employee";


export default class EmployeesController {
  public async create({request, response}: HttpContext){
    const employeePayload = request.only(['name', 'cpf', 'office'])
    const employee = await Employee.create(employeePayload)
    return response.created({employee})
  }

  public async getAll(){
    const employees = await Employee.all()
    return employees
  }

  public async update({request, params} : HttpContext){
    const updateData = request.all()
    const employee = await Employee.findOrFail(params.id)

    employee.merge(updateData)

    await employee.save()
  }

  public async delete({params} : HttpContext){
    const employee = await Employee.findOrFail(params.id)
    await employee.delete()
    return employee
  }
}
