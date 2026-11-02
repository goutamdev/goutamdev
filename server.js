const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));

// API: Profile
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Goutam Chandra Gharami',
    title: 'AI/ML Engineer & Researcher | Edge AI Specialist',
    email: 'dev.goutam05@gmail.com',
    location: 'Dhaka, Bangladesh',
    bio: 'Passionate AI/ML Engineer and Researcher specializing in Computer Vision, Edge AI, and Signal Processing. Currently pursuing M.Sc. at the University of Dhaka, researching Underwater Image Enhancement using Diffusion Transformers (DiT). I create real-world AI systems and share my journey on YouTube.',
    socials: {
      github:    'https://github.com/goutamdevs',
      linkedin:  'https://linkedin.com/in/goutamdevs',
      twitter:   'https://x.com/goutamdevs',
      instagram: 'https://instagram.com/goutamdevs',
      youtube:   'https://youtube.com/@goutamdevs',
    }
  });
});

// API: Education
app.get('/api/education', (req, res) => {
  res.json([
    {
      id: 1,
      degree: 'M.Sc. in Electrical & Electronic Engineering',
      major: 'Communication & Signal Processing (CSP)',
      institution: 'University of Dhaka',
      year: '2024 – Present',
      status: 'Ongoing',
      icon: '🎓',
    },
    {
      id: 2,
      degree: 'B.Sc. in Electrical & Electronic Engineering',
      major: 'EEE',
      institution: 'Gopalganj Science & Technology University (GSTU)',
      year: '2019 – 2023',
      status: 'Graduated',
      icon: '🏛️',
    }
  ]);
});

// API: Certifications
app.get('/api/certifications', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'TensorFlow Developer Certificate',
      provider: 'Google / Coursera',
      icon: '🧠',
    },
    {
      id: 2,
      title: 'Google IT Automation with Python',
      provider: 'Google / Coursera',
      icon: '🐍',
    },
    {
      id: 3,
      title: 'AWS Future AI Programmer Nanodegree',
      provider: 'Udacity',
      icon: '☁️',
    }
  ]);
});

// API: Projects
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Underwater Image Enhancement with DiT',
      category: 'Research',
      description: 'Applying Diffusion Transformers (DiT) to restore underwater images degraded by scattering, color absorption, and turbidity. Targeting AUV navigation and marine biology applications.',
      tags: ['PyTorch', 'Diffusion Transformers', 'Computer Vision', 'Image Restoration'],
      status: 'In Research',
      year: '2024',
      icon: '🌊',
      color: '#0ea5e9',
    },
    {
      id: 2,
      title: 'Edge AI Object Detection Pipeline',
      category: 'Edge AI',
      description: 'Real-time object detection optimized for edge devices via quantization, pruning & TensorRT. Deployed on NVIDIA Jetson Nano and Raspberry Pi for field use.',
      tags: ['TensorFlow Lite', 'TensorRT', 'YOLOv8', 'Jetson Nano', 'Python'],
      status: 'Completed',
      year: '2023',
      icon: '⚡',
      color: '#a855f7',
    },
    {
      id: 3,
      title: 'AI Signal Classification System (AMR)',
      category: 'AI Engineering',
      description: 'Deep learning pipeline for Automatic Modulation Recognition (AMR) using CNN and Transformer architectures on raw I/Q signal data for wireless communications.',
      tags: ['PyTorch', 'CNN', 'Transformer', 'Signal Processing', 'GNU Radio'],
      status: 'Completed',
      year: '2023',
      icon: '📡',
      color: '#10b981',
    },
    {
      id: 4,
      title: 'LLM-Powered EdTech Tool',
      category: 'AI Tools',
      description: 'An AI-driven educational platform leveraging LLMs and workflow automation (N8N) to personalize learning content, auto-generate quizzes, and provide adaptive study paths.',
      tags: ['LLM', 'N8N', 'OpenAI API', 'Node.js', 'Automation'],
      status: 'In Progress',
      year: '2024',
      icon: '📚',
      color: '#f59e0b',
    },
    {
      id: 5,
      title: 'Climate AI Analytics Platform',
      category: 'AI Tools',
      description: 'AI-powered climate data analysis and forecasting tool using LLM-based insights and N8N automation workflows to aggregate satellite and sensor data for environmental monitoring.',
      tags: ['LLM', 'N8N', 'Python', 'Time-Series AI', 'Climate Data'],
      status: 'In Progress',
      year: '2024',
      icon: '🌍',
      color: '#34d399',
    },
    {
      id: 6,
      title: 'IoT Sensor Fusion & Predictive Maintenance',
      category: 'Edge AI',
      description: 'End-to-end IoT pipeline with multi-sensor data collection, on-device ML anomaly detection, and real-time predictive maintenance dashboard.',
      tags: ['TensorFlow', 'MQTT', 'Node.js', 'MongoDB', 'Raspberry Pi'],
      status: 'Completed',
      year: '2023',
      icon: '🔧',
      color: '#ef4444',
    },
    {
      id: 7,
      title: 'MLOps Pipeline & Model Serving',
      category: 'AI Engineering',
      description: 'Complete MLOps workflow covering experiment tracking (MLflow), CI/CD for ML models, containerized model serving via FastAPI, and automated retraining pipelines.',
      tags: ['MLflow', 'Docker', 'FastAPI', 'GitHub Actions', 'Python'],
      status: 'Completed',
      year: '2023',
      icon: '🔄',
      color: '#8b5cf6',
    },
    {
      id: 8,
      title: 'Business AI Automation Suite',
      category: 'AI Tools',
      description: 'AI-driven business process automation using LLMs, N8N workflows, and OpenClaw integrations for automated reporting, customer insights, and intelligent document processing.',
      tags: ['LLM', 'N8N', 'OpenClaw', 'Automation', 'Business AI'],
      status: 'In Progress',
      year: '2024',
      icon: '💼',
      color: '#f472b6',
    }
  ]);
});

// API: Skills (focused on AI/ML, Edge AI, Signal Processing)
app.get('/api/skills', (req, res) => {
  res.json({
    categories: [
      {
        name: 'AI & Machine Learning',
        icon: '🧠',
        skills: [
          { name: 'TensorFlow / Keras', level: 92 },
          { name: 'PyTorch', level: 88 },
          { name: 'Diffusion Models / DiT', level: 78 },
          { name: 'Hugging Face Transformers', level: 82 },
          { name: 'Scikit-learn', level: 85 },
        ]
      },
      {
        name: 'Computer Vision & Signal Processing',
        icon: '👁️',
        skills: [
          { name: 'Computer Vision (OpenCV)', level: 86 },
          { name: 'Image Enhancement & Restoration', level: 80 },
          { name: 'Signal Processing & DSP', level: 83 },
          { name: 'Medical Image Segmentation', level: 75 },
        ]
      },
      {
        name: 'Edge AI & MLOps',
        icon: '⚡',
        skills: [
          { name: 'Edge AI (Jetson Nano, RPi)', level: 84 },
          { name: 'TensorRT / TF Lite (Optimization)', level: 80 },
          { name: 'MLOps (MLflow, CI/CD)', level: 76 },
          { name: 'Docker & Containerization', level: 70 },
        ]
      },
      {
        name: 'AI Tools & Automation',
        icon: '🤖',
        skills: [
          { name: 'LLM Integration & Prompt Engineering', level: 82 },
          { name: 'N8N Workflow Automation', level: 78 },
          { name: 'AWS (SageMaker, EC2)', level: 76 },
          { name: 'Python (Core Language)', level: 94 },
        ]
      }
    ]
  });
});

// API: YouTube channel info
app.get('/api/youtube', (req, res) => {
  res.json({
    channel: '@goutamdevs',
    url: 'https://youtube.com/@goutamdevs',
    description: 'Sharing practical AI Engineering tutorials covering MLOps pipelines, model training, Edge AI deployment, LLM integration, and full project walkthroughs — with GitHub code included.',
    topics: [
      { icon: '🔄', label: 'MLOps & Pipelines' },
      { icon: '🤖', label: 'Model Training' },
      { icon: '⚡', label: 'Edge AI Deployment' },
      { icon: '🧠', label: 'LLM Integration' },
      { icon: '📊', label: 'AI Project Walkthroughs' },
      { icon: '🐙', label: 'GitHub Code Included' },
    ]
  });
});

// Fallback → SPA
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio Server running at http://localhost:${PORT}`);
});
