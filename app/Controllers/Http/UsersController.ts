// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { HttpContext } from "@adonisjs/core/build/standalone";

export default class UsersController{
  public async create({request, response } :HttpContext){
    const userPayload = request.only(['email', 'username', 'password',])
    const user = await User.create(userPayload)

    return response.created({ user })
  }

  public async getAll(){
    const users = await User.all()
    return users
  }

  public async update({request, params} : HttpContext){
    const updateData = request.all()
    const user = await User.findOrFail(params.id)

    user.merge(updateData)

    await user.save()
  }

  public async delete({params} : HttpContext){
    const user = await User.findOrFail(params.id)
    await user.delete()
    return user
  }
}
