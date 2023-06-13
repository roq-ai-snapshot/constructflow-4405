import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['BusinessOwner'];
  const roles = ['BusinessOwner', 'BusinessOwner', 'TeamMember', 'Manager'];
  const applicationName = 'ConstructFlow';
  const tenantName = 'organization';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `User Story 1:
As a BusinessOwner, I want to create an organization in ConstructFlow so that I can manage my construction projects and teams within the platform.

User Story 2:
As a BusinessOwner, I want to invite TeamMembers and Managers to join my organization in ConstructFlow so that they can access and contribute to the projects.

User Story 3:
As a Manager, I want to create and manage construction projects within my organization so that I can track progress, equipment usage, staff scheduling, and cost estimation.

User Story 4:
As a Manager, I want to assign TeamMembers to specific projects so that they can collaborate and contribute to the project's success.

User Story 5:
As a TeamMember, I want to view and update my assigned tasks and project progress so that I can keep my Manager informed about my work.

User Story 6:
As a Manager, I want to view and update the project timeline so that I can ensure the project stays on schedule.

User Story 7:
As a Manager, I want to access compliance documentation for each project so that I can ensure all regulations and requirements are met.

User Story 8:
As a BusinessOwner, I want to view the overall progress and status of all projects within my organization so that I can make data-driven decisions and allocate resources effectively.

User Story 9:
As a Manager, I want to receive AI-driven predictions about potential delays and cost overruns so that I can take proactive measures to keep the project on track and within budget.

User Story 10:
As a TeamMember, I want to collaborate with other TeamMembers, Managers, and stakeholders (e.g., architects, contractors, clients) within the platform so that we can work together efficiently and effectively.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="20px" bottom="20px" zIndex={3}>
      <Popover placement="top">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody maxH="400px" overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application. Feel free to remove this tutorial with the{' '}
              <Box as="span" bg="yellow.300" p={1}>
                NEXT_PUBLIC_SHOW_BRIEFING
              </Box>{' '}
              environment variable.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
