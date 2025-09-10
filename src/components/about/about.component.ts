import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Skills {
  name: string;
  img: string;
  progress: number;
}
@Component({
  selector: 'app-about',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  skillsCategories = ['Web', 'Programming', 'Tools', 'Others'];
  activeCategory = 'Web';

  skills: { [key: string]: Skills[] } = {
    Web: [
      { name: 'HTML5', img: 'assets/images/html5.svg', progress: 90 },
      { name: 'CSS3', img: 'assets/images/css3.svg', progress: 85 },
      { name: 'JavaScript', img: 'assets/images/JS.svg', progress: 80 },
      { name: 'React.js', img: 'assets/images/react.svg', progress: 80 },
      { name: 'Angular.js', img: 'assets/images/angularjs.svg', progress: 75 },
      { name: 'TypeScript', img: 'assets/images/typescript.svg', progress: 80 },
      { name: 'Bootstrap', img: 'assets/images/bootstrap.svg', progress: 85 },
      { name: 'Tailwind CSS', img: 'assets/images/tailwind.png', progress: 90 },
      { name: 'Figma', img: 'assets/images/figma.svg', progress: 70 },
      { name: 'Responsive Design', img: 'assets/images/design.webp', progress: 85 },
      { name: 'Material UI', img: 'assets/images/material.svg', progress: 80 }
    ],

    Programming: [
      { name: 'Java', img: 'assets/images/java.svg', progress: 85 },
      { name: 'Spring Boot', img: 'assets/images/spring.svg', progress: 80 },
      { name: 'REST APIs', img: 'assets/images/api.webp', progress: 85 },
      { name: 'JWT Auth', img: 'assets/images/jwt.svg', progress: 80 },
      { name: 'Swagger', img: 'assets/images/swagger.svg', progress: 75 },
      { name: 'C#', img: 'assets/images/csharp.svg', progress: 70 },
      { name: 'Node.js', img: 'assets/images/nodejs.svg', progress: 75 },
      { name: 'Express.js', img: 'assets/images/exjs.webp', progress: 70 },
      { name: 'MongoDB', img: 'assets/images/mongodb.svg', progress: 75 },
      { name: 'MySQL', img: 'assets/images/mysql.svg', progress: 80 },
      { name: 'Data Structures & Algorithms', img: 'assets/images/algorithm.png', progress: 70 }
    ],

    Tools: [
      { name: 'Eclipse', img: 'assets/images/eclipse.png', progress: 70 },
      { name: 'Postman', img: 'assets/images/postman.webp', progress: 85 },
      { name: 'Git & GitHub', img: 'assets/images/git.svg', progress: 80 },
      { name: 'VS Code', img: 'assets/images/vscode.svg', progress: 90 },
      { name: 'Netlify', img: 'assets/images/netlify.png', progress: 75 },
      { name: 'Vercel', img: 'assets/images/vercel.png', progress: 75 },
      { name: 'Canva', img: 'assets/images/canva.webp', progress: 70 },
      { name: 'ChatGPT', img: 'assets/images/gpt.png', progress: 85 },
      { name: 'CodePen', img: 'assets/images/codepen.webp', progress: 70 },
      { name: 'Chrome DevTools', img: 'assets/images/tools.jpg', progress: 80 }
    ],

    Others: [
      { name: 'Communication', img: 'assets/images/conversation.png', progress: 90 },
      { name: 'Teamwork', img: 'assets/images/team.png', progress: 85 },
      { name: 'Problem Solving', img: 'assets/images/think.png', progress: 80 },
      { name: 'Time Management', img: 'assets/images/time.png', progress: 75 },
      { name: 'Leadership', img: 'assets/images/leadership.png', progress: 80 }
    ]
  };

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }
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
    { icon: '🌍', title: 'Exploring Tech Cultures Globally' }
  ];

  hobbies = [
    { icon: '📷', title: 'Photography' },
    { icon: '🧘‍♂️', title: 'Meditation' },
    { icon: '✈️', title: 'Traveling' },
    { icon: '♟️', title: 'Chess' },
    { icon: '📚', title: 'Reading Books' },
    { icon: '👨‍🍳', title: 'Cooking' }
  ];

}
