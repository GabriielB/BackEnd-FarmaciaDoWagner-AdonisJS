// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";
import Remedy from "App/Models/Remedy";

export default class RemediesController {
  public async create({request, response}: HttpContext){
    const remedyPayload = request.only(['name', 'value', 'category'])
    const remedy = await Remedy.create(remedyPayload)
    return response.created({remedy})
  }
  public async getAll(){
    const remedies = Remedy.all()
    return remedies
  }

  public async update({request, params} : HttpContext){
    const updateData = request.all()
    const remedy = await Remedy.findOrFail(params.id)

    remedy.merge(updateData)

    await remedy.save()
  }

  public async delete({params} : HttpContext){
    const remedy = await Remedy.findOrFail(params.id)
    await remedy.delete()
    return remedy
  }
}
