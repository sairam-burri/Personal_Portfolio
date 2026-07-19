import type { ProjectEntry } from '../types'
import { profile } from './profile'

export const projects: ProjectEntry[] = [
  {
    id: 'visionai',
    title: 'VisionAI',
    period: 'October 2025 – January 2026',
    description:
      'A cloud-based image analysis system built on AWS (S3, Rekognition, DynamoDB) with a three-tier architecture — a React frontend and a Node.js backend delivering AI-powered image recognition with 95%+ confidence scores.',
    tags: ['React', 'Node.js', 'AWS', 'Rekognition', 'DynamoDB'],
    githubUrl: profile.github,
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    period: 'September 2024 – January 2025',
    description:
      'A fully responsive e-commerce site for kettle products, featuring user authentication, product management, a shopping cart, and a secure checkout flow backed by an optimized relational schema.',
    tags: ['HTML/CSS', 'JavaScript', 'Python', 'MySQL'],
    githubUrl: profile.github,
  },
  {
    id: 'telugu-speech-recognition',
    title: 'Telugu Speech Recognition',
    period: 'November 2023 – February 2024',
    description:
      'A CNN-based speech recognition system that classifies spoken Telugu digits (0–9) from short audio clips using MFCC feature extraction, built with TensorFlow and Librosa.',
    tags: ['Python', 'TensorFlow', 'CNN', 'Librosa'],
    githubUrl: profile.github,
  },
]
