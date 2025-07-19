import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  selectedProject: any = null;

  projects = [
  {
      title: 'Task Management System',
      shortDescription: 'A full-stack app to manage team tasks.',
      description: `The goal of this project is to create a task management application where users can 
        create projects, assign tasks, set due dates, track their progress, and communicate with team members 
        about the status of tasks. The system should provide the following features such as:
        Create Projects: Users can create and manage multiple projects.
        Create and Assign Tasks: Users can create tasks, assign them to themselves or others, and set due dates, priorities, and status.
        User Authentication: Only authenticated users can access the system, with different roles (Admin, User).
        Collaborate: Team members can collaborate and track task progress.`,
      technologies: 'React, Material UI, Axios or Fetch API, Springboot, JWT (JSON Web Tokens), MongoDB',
      thumbnail: 'assets/images/task.jpg',
      image: 'assets/images/task.jpg',
      github: 'https://github.com/N1vas-B/TaskApplication.git'
      },
      {
      title: 'Mobile Shopping Platform',
      shortDescription: 'A responsive, user-friendly, and visually appealing site for browsing mobile products.',
      description: `The project involved developing a digital catalog for a mobile shop owner to showcase their products online. 
      The primary goal was to build a responsive, user-friendly, and visually appealing frontend where customers could browse 
      various categories of mobile products, view detailed information, and explore product images. 
      The platform enhances the customer experience by providing a seamless and intuitive interface.`,
      technologies: 'Angular, TypeScript, Material UI, Bootstrap',
      thumbnail: 'assets/images/catlog.png',
      image: 'assets/images/catlog.png',
      github: 'https://github.com/N1vas-B/Intern.git'
    },
    {
      title: 'Online Bookstore',
      shortDescription: 'A Online Bookstore website.',
      description: `A front-end web application that displays book categories, products, and supports dynamic image loading. 
      It provides a user-friendly interface for browsing and viewing books, simulating an online bookstore experience.`,
      technologies: 'C#, .NET Web API, SQL Server, JWT (JSON Web Tokens), Swagger',
      thumbnail: 'assets/images/bookstore.png',
      image: 'assets/images/bookstore.png',
      github: 'https://github.com/yourusername/ecom-site'
    }
  ];

  openProjectModal(project: any) {
    this.selectedProject = project;
  }

  closeProjectModal() {
    this.selectedProject = null;
  }
}
