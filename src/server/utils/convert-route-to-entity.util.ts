const mapping: Record<string, string> = {
  organizations: 'organization',
  projects: 'project',
  tasks: 'task',
  users: 'user',
  'user-projects': 'user_project',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
