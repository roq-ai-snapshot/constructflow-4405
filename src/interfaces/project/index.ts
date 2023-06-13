import { TaskInterface } from 'interfaces/task';
import { UserProjectInterface } from 'interfaces/user-project';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  start_date: any;
  end_date: any;
  status: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  user_project?: UserProjectInterface[];
  organization?: OrganizationInterface;
  _count?: {
    task?: number;
    user_project?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  organization_id?: string;
}
