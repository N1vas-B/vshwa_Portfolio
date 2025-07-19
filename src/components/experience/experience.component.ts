import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  skills: string[];
  keyAchievements?: string[];
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      id: 1,
      title: 'Web Development Intern',
      company: 'Tech Solutions Inc.',
      duration: 'Dec 2023 - June 2024',
      description: 'During my internship at Tech Solutions Inc., I gained hands-on experience in full-stack web development, working with modern frameworks and implementing modern web development best practices. The internship provided me with a solid foundation in web development fundamentals and enhanced my problem-solving skills in a professional environment.',
      achievements: [
        'Completed 30-day intensive web development internship with 100% attendance and task completion rate',
        'Reduced page load time by 40% through optimization of CSS and JavaScript resources',
        'Implemented mobile-responsive design ensuring compatibility across 5 different device types',
        'Achieved 98% compliance with web accessibility standards in all delivered projects'
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'Git'],
      keyAchievements: [
        'Improved page load time by 40% through code optimization',
        'Implemented responsive design for 5 key landing pages'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer Intern',
      company: 'The Developers Arena',
      duration: 'Dec 2024 - June 2025',
      description: 'I successfully completed a 6-month intensive internship at The Developers Arena, where I worked on cutting-edge web applications using modern technologies. This experience significantly enhanced my full-stack development skills and provided exposure to enterprise-level project development.',
      achievements: [
        'Built and deployed 3 full-stack web applications using React and Node.js',
        'Collaborated with a team of 5 developers using Agile methodology',
        'Implemented RESTful APIs serving over 1000 daily active users',
        'Optimized database queries resulting in 60% faster response times',
        'Mentored 2 junior interns in JavaScript and React development'
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'AWS'],
      keyAchievements: [
        'Successfully delivered 3 production-ready applications',
        'Improved application performance by 60% through optimization',
        'Led a team of 2 junior developers'
      ]
    }
  ];
}