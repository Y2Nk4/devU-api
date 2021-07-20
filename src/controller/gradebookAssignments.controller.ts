import { Request, Response, NextFunction } from 'express'

import GradebookAssignmentService from '../services/gradebookAssignment.service'

import { GenericResponse, NotFound, Updated } from '../utils/apiResponse.utils'

import { serialize } from '../utils/serializer/users.serializer'

export async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const gradebookAssignments = await GradebookAssignmentService.list()
    const response = gradebookAssignments.map(serialize)

    res.status(200).json(response)
  } catch (err) {
    next(err)
  }
}

export async function detail(req: Request, res: Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id)
    const gradebookAssignment = await GradebookAssignmentService.retrieve(id)

    if (!gradebookAssignment) return res.status(404).json(NotFound)

    const response = serialize(gradebookAssignment)

    res.status(200).json(response)
  } catch (err) {
    next(err)
  }
}

export async function post(req: Request, res: Response, next: NextFunction) {
  try {
    const gradebookAssignment = await GradebookAssignmentService.create(req.body)
    const response = serialize(gradebookAssignment)

    res.status(201).json(response)
  } catch (err) {
    res.status(400).json(new GenericResponse(err.message))
  }
}

export async function put(req: Request, res: Response, next: NextFunction) {
  try {
    req.body.id = parseInt(req.params.id)
    const results = await GradebookAssignmentService.update(req.body)

    if (!results.affected) return res.status(404).json(NotFound)

    res.status(200).json(Updated)
  } catch (err) {
    next(err)
  }
}

export async function _delete(req: Request, res: Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id)
    const results = await GradebookAssignmentService._delete(id)

    if (!results.affected) return res.status(404).json(NotFound)

    res.status(204).send()
  } catch (err) {
    next(err)
  }
}

export default { get, detail, post, put, _delete }
