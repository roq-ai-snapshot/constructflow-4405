import * as yup from 'yup';
import { taskValidationSchema } from 'validationSchema/tasks';
import { userProjectValidationSchema } from 'validationSchema/user-projects';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable().required(),
  task: yup.array().of(taskValidationSchema),
  user_project: yup.array().of(userProjectValidationSchema),
});
