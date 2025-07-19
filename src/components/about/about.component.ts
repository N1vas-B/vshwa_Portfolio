import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterModule,CommonModule],
  standalone:true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


services = [
  {
    icon: 'bi-pencil-square', 
    title: 'UI/UX Design',
    number: '01',
    description: 'Designed intuitive UI/UX interfaces, focusing on user-centric design principles to optimize usability and satisfaction'
  },
  {
    icon: 'bi-laptop',
    title: 'Web Developer',
    number: '02',
    description: 'Crafting digital experiences, one line of code at a time, to shape the future of the web.'
  },
  {
    icon: 'bi-brush',
    title: 'Web Design',
    number: '03',
    description: 'Transforming visions into captivating digital landscapes, where creativity meets functionality.'
  },
  {
    icon: 'bi-camera',
    title: 'Photography',
    number: '04',
    description: 'Capturing moments, shaping memories, and painting stories with light — this is the artistry of photography.'
  },
  {
    icon: 'bi-camera-reels',
    title: 'Video Editor',
    number: '05',
    description: 'Skilled in video editing techniques, ensuring high-quality productions through precise cuts, color correction, and captivating storytelling.'
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Product Strategy',
    number: '06',
    description: 'Elevating products from conception to success with strategic insight and meticulous planning.'
  }
];

workSteps = [
  {
    number: '01',
    icon: 'bi-pencil-square', // You can customize these icons
    title: 'Project Planning',
    description: 'Every project begins with clear goals and smart planning. I take time to understand your vision, define milestones, and set the foundation for success.'
  },
  {
    number: '02',
    icon: 'bi-gear',
    title: 'Development Phase',
    description: 'I bring ideas to life with clean, scalable code — ensuring functionality, performance, and a smooth user experience at every step.'
  },
  {
    number: '03',
    icon: 'bi-search',
    title: 'Testing & QA',
    description: 'Before launch, everything is rigorously tested for bugs, performance, and responsiveness — so you get a solution that works flawlessly.'
  },
  {
    number: '04',
    icon: 'bi-rocket',
    title: 'Launch & Support',
    description: 'Once live, I’m here to support and scale — whether it’s updates, optimization, or future enhancements. I build relationships, not just products.'
  }
];

  careerGoals = [
    {
      icon: '🚀',
      title: 'Technical Expertise',
      description: 'Master advanced Java frameworks and cloud technologies to architect scalable solutions'
    },
    {
      icon: '🌐',
      title: 'Full Stack Mastery',
      description: 'Develop expertise in both frontend and backend technologies for end-to-end development'
    },
    {
      icon: '👥',
      title: 'Leadership',
      description: 'Grow into technical leadership roles to mentor junior developers'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Contribute to open-source projects and build innovative applications'
    }
  ];

  personalInterests = [
    { icon: '🎵', title: 'Music' },
    { icon: '🚴', title: 'Cycling' },
    { icon: '📗', title: 'Technical Blogging' },
    { icon: '👨‍💻', title: 'Open Source Contribution' },
    { icon: '🏆', title: 'Coding Competitions' },
    { icon: '🎮', title: 'Game Development' },
    { icon: '🌍', title:'Exploring Tech Cultures Globally'}
  ];

  hobbies = [
    { icon: '📷', title: 'Photography' },
    { icon: '🧘‍♂️', title: 'Meditation' },
    { icon: '✈️', title: 'Traveling' },
    { icon: '♟️', title : 'Chess'},
    { icon: '📚', title: 'Reading Books' }
  ];

}
